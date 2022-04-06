import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NetworkserviceService } from '../../../services/networkservice.service';

@Component({
  selector: 'ngx-mau',
  templateUrl: './mau.component.html',
  styleUrls: ['./mau.component.scss']
})
export class MauComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();
  data
  constructor(private service: NetworkserviceService) {

    this.service.getmau().subscribe(val => {
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
      mau: {
        title: 'Màu',
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
      this.service.deletemau(
        [
          event['data']['mau']
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
    if (!this.data.some(el => el.mau === (event['newData']['mau']))) {
      this.service.mau(
        [
          event['newData']['mau']
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
      this.service.deletemau(
        [
          event['data']['mau']
        ]
      )
        .subscribe(data => {

          this.service.mau(
            [
              event['newData']['mau']
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