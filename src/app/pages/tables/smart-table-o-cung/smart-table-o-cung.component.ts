import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { NetworkserviceService } from '../../../services/networkservice.service';

@Component({
  selector: 'ngx-smart-table-o-cung',
  templateUrl: './smart-table-o-cung.component.html',
  styleUrls: ['./smart-table-o-cung.component.scss']
})
export class SmartTableOCungComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();
  data
  constructor(private service: NetworkserviceService) {
    this.service.getocung().subscribe(val => {
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
      ocung: {
        title: 'Ổ Cứng',
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
    if (window.confirm('Bạn có chắc muốn xóa không ????')) {
      this.service.deleteocung(
        [
          event['data']['ocung']
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
    console.log(event);
    if (!this.data.some(el => el.ocung === (event['newData']['ocung']))) {
      this.service.ocung(
        [
          event['newData']['ocung']
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
      alert('Dữ liệu đã tồn tại')
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    if (window.confirm('Bạn có muốn thay đổi không?')) {
      this.service.deleteocung(
        [
          event['data']['ocung']
        ]
      )
        .subscribe(data => {

          this.service.ocung(
            [
              event['newData']['ocung']
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