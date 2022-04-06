import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NetworkserviceService } from '../../../services/networkservice.service';

@Component({
  selector: 'ngx-smart-table-nguoidung',
  templateUrl: './smart-table-nguoidung.component.html',
  styleUrls: ['./smart-table-nguoidung.component.scss']
})
export class SmartTableNguoidungComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();
  users
  sodienthoaikhachhangselect = ''
  constructor(private service: NetworkserviceService) {
    this.service.getalluser().subscribe(val => {
      this.source.load(val);
      this.users = val.filter(val => val.dienthoai != 'admin')
    });
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

    columns: {
      hoten: {
        title: 'Họ Tên',
        type: 'string',
      },
      dienthoai: {
        title: 'Số Điện Thoại',
        type: 'string',
      },
      quyenhan: {
        title: 'Quyền Hạn',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              { value: 'dailycap1', title: 'Đại Lý Cấp 1' },
              { value: 'dailycap2', title: 'Đại Lý Cấp 2' },
              { value: 'khachle', title: 'Khách Lẻ' },
            ]
          }
        },
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
    custom: {
      resetButtonContent: '<i class="nb-locked"></i>',
      confirmReset: true,
    },
  };

  ngOnInit(): void {
  }

  onDeleteConfirm(event): void {
    console.log(event)
    if (window.confirm('Bạn có chắc muốn xóa không ????')) {
      this.service.deleteuser(
        [
          event['data']['dienthoai']
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
    console.log(event['newData']['firstName']);

    this.service.user(
      [
        event['newData']['dienthoai'], event['newData']['hoten'], '123456', event['newData']['quyenhan']
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

  onSaveConfirm(event) {
    if (window.confirm('Bạn có muốn thay đổi không?')) {

      this.service.deleteuser(
        [
          event['data']['dienthoai']
        ]
      )
        .subscribe(data => {
          this.service.user(
            [
              event['newData']['dienthoai'], event['newData']['hoten'], '123456', event['newData']['quyenhan']
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


  resetpass() {
    if (this.sodienthoaikhachhangselect != '') {
      if (window.confirm('Mật khẩu sẽ được trở về mặc định')) {
        this.service.resetpassword(['123456',this.sodienthoaikhachhangselect]).subscribe(val => { console.log(val) })
      }
    }
  }

  selectOption(event) {
    this.sodienthoaikhachhangselect = event.target.value
    console.log(this.sodienthoaikhachhangselect)
  }
}
