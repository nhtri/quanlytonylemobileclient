import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NetworkserviceService } from '../../../services/networkservice.service';

@Component({
  selector: 'ngx-quanlydanhsachsanpham',
  templateUrl: './quanlydanhsachsanpham.component.html',
  styleUrls: ['./quanlydanhsachsanpham.component.scss']
})
export class QuanlydanhsachsanphamComponent implements OnInit {

  constructor(private service: NetworkserviceService) {

    this.service.getsanphamtonkho().subscribe(val => {

      val.forEach(element => {
        this.arrayImei = (element['imei'].split(",")).filter(val=>val!='')
        // element.map(obj => ({ ...obj, soluong: this.arrayImei.length }))
        
        element.soluong = this.arrayImei.length
        element.imei = element.imei.replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",")
        this.dataedit.push(element)
      });
      this.source.load(this.dataedit);
      this.data = val



    });

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
  dataedit = []
  arrayImei = []
  ngOnInit(): void {

  }

  settings = {

    actions: {
      columnTitle: '', position: 'right',

    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark" (click)="onClick()"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },


    pager: false,
    columns: {
      id: {
        title: 'ID',
        type: 'string',
        // filter: false,
        editable: false,
        addable: false,
      },
      nhomsanpham: {
        title: 'Nhóm Sản Phẩm',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: []
          }
        },
        // filter: false,
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
        // filter: false,
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
        // filter: false,
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
        // filter: false,
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
        // filter: false,
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
        // filter: false,
      },
      imei: {
        title: 'IMEI',
        type: 'string',
        // filter: false,
      },
      soluong: {
        title: 'Số Lượng',
        type: 'string',
        editable: false,
        addable: false,
        // filter: false,
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
          event['newData']['id'],
        ]
      )
        .subscribe(data => {
        
          console.log("POST Request is successful ", data);

          this.service.getsanphamtonkho().subscribe(val => {
this.dataedit=[]
            val.forEach(element => {
              this.arrayImei = (element['imei'].split(",")).filter(val=>val!='')
              // element.map(obj => ({ ...obj, soluong: this.arrayImei.length }))
              
              element.soluong = this.arrayImei.length
              element.imei = element.imei.replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",")
              this.dataedit.push(element)
            });
            this.source.load(this.dataedit);
            this.data = val
      
      
      
          });

          
        },
          error => {
            console.log("Error", error);

          })
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onDeleteConfirm(event): void {
    console.log(event)
    if (window.confirm('Bạn có chắc muốn xóa không ????')) {
      this.service.deletesanphamtonkho(
        [
          event['data']['id']
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
    if (!this.data.some(el => el.nhomsanpham === (event['newData']['nhomsanpham']) &&
    el.tensanpham === (event['newData']['tensanpham']) &&
    el.dungluong === (event['newData']['dungluong']) &&
    el.mau === (event['newData']['mau']) &&
    el.loaisanpham === (event['newData']['loaisanpham']) &&
    el.phienban === (event['newData']['phienban'])
    )) {
      this.service.sanphamtonkho(
        [
          event['newData']['nhomsanpham'],
          event['newData']['tensanpham'],
          event['newData']['dungluong'],
          event['newData']['loaisanpham'],
          event['newData']['phienban'],
          event['newData']['imei']
        ]
      )
        .subscribe(data => {

          console.log("POST Request is successful ", data);
        },
          error => {
            console.log("Error", error);

          })
      event.confirm.resolve();
    }
    else {
      alert("Dữ liệu đã tồn tại")
      event.confirm.reject();
    }

  }
}
