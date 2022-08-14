import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { NetworkserviceService } from '../../../services/networkservice.service';

@Component({
  selector: 'ngx-quanlythongtinmaythumua',
  templateUrl: './quanlythongtinmaythumua.component.html',
  styleUrls: ['./quanlythongtinmaythumua.component.scss']
})
export class QuanlythongtinmaythumuaComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();
  data
  constructor(private service: NetworkserviceService, private router: Router) {

    this.service.getthongtinmaythumua().subscribe(val => {
      this.source.load(val);
      this.data = val
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
        type: 'string',
      },
      tenmay: {
        title: 'Tên Máy',
        type: 'string',
      },
      trangthai: {
        title: 'Trạng Thái',
        type: 'string',
      },
      mau: {
        title: 'Màu',
        type: 'string',
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
