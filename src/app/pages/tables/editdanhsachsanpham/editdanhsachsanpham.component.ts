import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { NetworkserviceService } from '../../../services/networkservice.service';

@Component({
  selector: 'ngx-editdanhsachsanpham',
  templateUrl: './editdanhsachsanpham.component.html',
  styleUrls: ['./editdanhsachsanpham.component.scss']
})
export class EditdanhsachsanphamComponent implements OnInit {

  constructor(private service: NetworkserviceService, private route: ActivatedRoute, private router: Router) {


    this.service.getnhomsanpham().subscribe(val => {
      let data = val.map(val => val.nhomsanpham)
      data.forEach(data => {
        this.datanhomsanpham.push({ "value": data, "title": data })
      });
      console.log(this.datanhomsanpham)
      this.settings.columns.nhomsanpham.editor.config.list = this.datanhomsanpham
      this.settings = Object.assign({}, this.settings);

    })

    this.service.gettensanpham().subscribe(val => {
      let data = val.map(val => val.tensanpham)
      data.forEach(data => {
        this.datatensanpham.push({ "value": data, "title": data })
      });
      this.settings.columns.tensanpham.editor.config.list = this.datatensanpham
      this.settings = Object.assign({}, this.settings);

    })

    this.service.getdungluong().subscribe(val => {
      let data = val.map(val => val.dungluong)
      data.forEach(data => {
        this.datadungluong.push({ "value": data, "title": data })
      });
      this.settings.columns.dungluong.editor.config.list = this.datadungluong
      this.settings = Object.assign({}, this.settings);

    })

    this.service.getmau().subscribe(val => {
      let data = val.map(val => val.mau)
      data.forEach(data => {
        this.datamau.push({ "value": data, "title": data })
      });
      this.settings.columns.mau.editor.config.list = this.datamau
      this.settings = Object.assign({}, this.settings);

    })

    this.service.getloaisanpham().subscribe(val => {
      let data = val.map(val => val.loaisanpham)
      data.forEach(data => {
        this.dataloaisanpham.push({ "value": data, "title": data })
      });
      this.settings.columns.loaisanpham.editor.config.list = this.dataloaisanpham
      this.settings = Object.assign({}, this.settings);

    })

    this.service.getphienban().subscribe(val => {
      let data = val.map(val => val.phienban)
      data.forEach(data => {
        this.dataphienban.push({ "value": data, "title": data })
      });
      this.settings.columns.phienban.editor.config.list = this.dataphienban
      this.settings = Object.assign({}, this.settings);

    })
  }
  source: LocalDataSource = new LocalDataSource();
  data
  datadungluong = []
  datanhomsanpham = []
  datatensanpham = []
  datamau = []
  dataloaisanpham = []
  dataphienban = []
  id
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log("params.id[0]", params.id[0])
        this.id = params.id[0]
        this.service.getsanpham([params.id[0]]).subscribe(val => {
          this.source.load(val);
          this.data = val
        });
      })
  }

  settings = {

    actions: {
      columnTitle: '', position: 'right',

      delete: false,
      add: false,
    },


    pager: false,
    columns: {
      nhomsanpham: {
        title: 'Nhóm Sản Phẩm',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: []
          }
        },
        filter: false,
      },
      tensanpham: {
        title: 'Tên Sản Phẩm',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
            ]
          }
        },
        filter: false,
      },
      dungluong: {
        title: 'Dung Lượng',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
            ]
          }
        },
        filter: false,
      },
      mau: {
        title: 'Màu',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
            ]
          }
        },
        filter: false,
      },
      loaisanpham: {
        title: 'Loại Sản Phẩm',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
            ]
          }
        },
        filter: false,
      },
      phienban: {
        title: 'Phiên Bản',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
            ]
          }
        },
        filter: false,
      },
      imei: {
        title: 'IMEI',
        type: 'string',
        filter: false,
      },
      soluong: {
        title: 'Số Lượng',
        type: 'string',
        editable: false,
        addable: false,
        filter: false,
      },
    },

    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
  };

  onSaveConfirm(event) {
    if (window.confirm('Bạn có muốn thay đổi không?')) {
      this.service.updatesanpham(
        [
          event['newData']['nhomsanpham'],
          event['newData']['tensanpham'],
          event['newData']['dungluong'],
          event['newData']['loaisanpham'],
          event['newData']['phienban'],
          event['newData']['imei'],
          this.id
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

  quayve() {
    this.router.navigateByUrl("/pages/tables/danhsachsanpham")
  }
}
