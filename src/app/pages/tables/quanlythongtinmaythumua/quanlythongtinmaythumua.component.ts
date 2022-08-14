import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { NetworkserviceService } from '../../../services/networkservice.service';
import { ColorTitlePipe } from '../../../@core/shared/pipes/color-title.pipe';
import { PRODUCT_COLORS, PRODUCT_STATUSES } from '../../../@core/constant/common';
import { ProductStatusPipe } from '../../../@core/shared/pipes/product-status.pipe';

@Component({
  selector: 'ngx-quanlythongtinmaythumua',
  templateUrl: './quanlythongtinmaythumua.component.html',
  styleUrls: ['./quanlythongtinmaythumua.component.scss']
})
export class QuanlythongtinmaythumuaComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();
  data
  datamau = PRODUCT_COLORS.map(x => {
    return {
      value: x.value,
      title: x.label,
    };
  });
  datatrangthai = PRODUCT_STATUSES.map(x => {
    return {
      value: x.value,
      title: x.label,
    };
  });

  datanhomsanpham = [];
  constructor(private service: NetworkserviceService, private router: Router,
    private colorTitlePipe: ColorTitlePipe,
    private productStatusPipe: ProductStatusPipe,
  ) {

    this.service.getproductgroups().subscribe(val => {
      // let data = val.map(val => val.name)
      let data = val;
      let datanhomsanphamfilter = [];
      data.forEach(data => {
          this.datanhomsanpham.push({ 'value': data.name, 'title': data.name });
          datanhomsanphamfilter.push({ 'value': data.name, 'title': data.name });
          console.log('datanhomsanphamfilter', datanhomsanphamfilter, 'datanhomsanpham', this.datanhomsanpham);
      });
      console.log(this.datanhomsanpham);
      this.settings.columns.nhomsanpham.editor.config.list = this.datanhomsanpham;
      this.settings.columns.nhomsanpham.filter.config.list = datanhomsanphamfilter;
      this.settings = Object.assign({}, this.settings);

  });

    this.service.getthongtinmaythumua().subscribe(val => {
      this.source.load(val);
      this.data = val


      this.settings.columns.mau.editor.config.list = this.datamau;
      this.settings.columns.mau.filter.config.list = this.datamau;
      this.settings = Object.assign({}, this.settings);

      this.settings.columns.trangthai.editor.config.list = this.datatrangthai;
      this.settings.columns.trangthai.filter.config.list = this.datatrangthai;
      this.settings = Object.assign({}, this.settings);
    });




  }


  settings = {
    actions: { columnTitle: '', position: 'right' },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark" (click)="onClick()"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },

    columns: {
      jpcode: {
        title: 'JP Code',
        type: 'string',
      },
      nhomsanpham: {
        title: 'Nhóm Sản Phẩm',
        editor: {
            type: 'list',
            config: {
                selectText: 'Select',
                list: [],
            },
        },
        filter: {
            type: 'list',
            config: {
                selectText: 'Select',
                list: [],
            },
        },
      },
      tenmay: {
        title: 'Tên Máy',
        type: 'string',
      },
      trangthai: {
        title: 'Trạng Thái',
        editor: {
            type: 'list',
            config: {
                selectText: 'Select',
                list: [],
            },
        },
        filter: {
            type: 'list',
            config: {
                selectText: 'Select',
                list: [],
            },
        },
        valuePrepareFunction: (cell, row) => {
            return this.productStatusPipe.transform(cell);
        },
        filterFunction(cell?: any, search?: string): boolean {
            return cell.trim().toUpperCase() === search.trim().toUpperCase();
        },
      },
      mau: {
        title: 'Màu',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [],
          },
        },
        filter: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [],
          },
        },
        valuePrepareFunction: (cell, row) => {
          return this.colorTitlePipe.transform(cell);
        },
        filterFunction(cell?: any, search?: string): boolean {
          return cell.trim().toUpperCase() === search.trim().toUpperCase();
        },
      },
      gia: {
        title: 'Giá',
        type: 'string',
      },
    },

    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
  };

  ngOnInit(): void {
  }

  onDeleteConfirm(event): void {
    console.log(event)
    if (window.confirm('Bạn có chắc muốn xóa không ????')) {
      this.service.deletethongtinmaythumua(
        [
          event['data']['jpcode'],
          event['data']['nhomsanpham'],
          event['data']['tenmay'],
          event['data']['trangthai'],
          event['data']['mau'],
          event['data']['gia'],
        ]
      )
        .subscribe(data => {

          console.log("POST Request is successful ", data);
        },
          error => {
            console.log("Error", error);

          })
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event): void {
    console.log("Create Event In Console")
    // if (!this.data.some(el => el.sodienthoai === (event['newData']['sodienthoai']))) {
    this.service.thongtinmaythumua(
      [
        event['newData']['jpcode'],
        event['newData']['nhomsanpham'],
        event['newData']['tenmay'],
        event['newData']['trangthai'],
        event['newData']['mau'],
        event['newData']['gia'],
      ]
    )
      .subscribe(data => {

        console.log("POST Request is successful ", data);
      },
        error => {
          console.log("Error", error);

        })
    event.confirm.resolve();
    // }
    // else {
    //   alert("Dữ liệu đã tồn tại")
    //   event.confirm.reject();
    // }

  }

  onSaveConfirm(event) {
    if (window.confirm('Bạn có muốn thay đổi không?')) {
      this.service.deletethongtinmaythumua(
        [
          event['data']['jpcode'],
          event['data']['nhomsanpham'],
          event['data']['tenmay'],
          event['data']['trangthai'],
          event['data']['mau'],
          event['data']['gia'],
        ]
      )
        .subscribe(data => {

          this.service.thongtinmaythumua(
            [
              event['newData']['jpcode'],
              event['newData']['nhomsanpham'],
              event['newData']['tenmay'],
              event['newData']['trangthai'],
              event['newData']['mau'],
              event['newData']['gia'],
            ]
          )
            .subscribe(data => {

              console.log("POST Request is successful ", data);
            },
              error => {
                console.log("Error", error);

              })

          console.log("POST Request is successful ", data);
        },
          error => {
            console.log("Error", error);

          })
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
