import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { NetworkserviceService } from '../../../services/networkservice.service';

@Component({
  selector: 'ngx-quanlykhachhang',
  templateUrl: './quanlykhachhang.component.html',
  styleUrls: ['./quanlykhachhang.component.scss']
})
export class QuanlykhachhangComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();
  data
  constructor(private route: ActivatedRoute, private service: NetworkserviceService, private router: Router) {

    this.service.getkhachhang().subscribe(val => {
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
      ten: {
        title: 'Họ Tên',
        type: 'string',
      },
      tuoi: {
        title: 'Tuổi',
        type: 'string',
      },
      sodienthoai: {
        title: 'Số điện thoại',
        type: 'string',
      },
      diachi: {
        title: 'Địa chỉ',
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
      this.service.deletekhachhang(
        [
          event['data']['sodienthoai']
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
    console.log(event['newData']['sodienthoai']);
    if (!this.data.some(el => el.chip === (event['newData']['sodienthoai']))) {
      this.service.khachhang(
        [
          event['newData']['ten'],
          event['newData']['tuoi'],
          event['newData']['sodienthoai'],
          event['newData']['diachi'],
          'kho'
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

  onSaveConfirm(event) {
    if (window.confirm('Bạn có muốn thay đổi không?')) {
      this.service.deletekhachhang(
        [
          event['data']['sodienthoai']
        ]
      )
        .subscribe(data => {

          this.service.khachhang(
            [
              event['newData']['ten'],
              event['newData']['tuoi'],
              event['newData']['sodienthoai'],
              event['newData']['diachi'],
              'kho'
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

  onUserRowSelect(event) {
    console.log(event.data["sodienthoai"])
    this.router.navigate(['/pages/tables/danhsachsanphamkhachhangdamua'],{state:{ ten: event.data["ten"] }});
  }
}