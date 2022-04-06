import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NetworkserviceService } from '../../../services/networkservice.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'ngx-smart-table-may-da-ban',
  templateUrl: './smart-table-may-da-ban.component.html',
  styleUrls: ['./smart-table-may-da-ban.component.scss']
})
export class SmartTableMayDaBanComponent implements OnInit {
  fileName= 'DanhSachHangDaBan.xlsx'; 
  source: LocalDataSource = new LocalDataSource();
  datachip = []
  datadoimay = []
  dataloaimay = []
  datamanhinh = []
  dataram = []
  dataocung = []
  data

  loaimaysarr
  loaimays = []
  doimaysarr
  doimays = []
  manhinhsarr
  manhinhs = []
  chipsarr
  chips = []
  nhomsarr
  nhoms = []
  ramsarr
  rams = []
  tansosarr
  tansos = []
  ocungsarr
  ocungs = []
  soluongmay
  constructor(private service: NetworkserviceService) {
    this.service.getquanlymay().subscribe(val => {
      this.source.load(val.filter(val=>val.trangthai!=''))
      this.data = val
this.soluongmay = val.filter(val=>val.trangthai!='').length

      this.loaimaysarr = [...new Set(this.data.map(({ loaimay }) => loaimay) )].filter(n => n)
      this.loaimaysarr.forEach(data => {
        this.loaimays.push({ "value": data, "title": data })
      });
      this.settings.columns.loaimay.filter.config.list = this.loaimays
      
      
      this.doimaysarr = [...new Set(this.data.map(({ doimay }) => doimay) )].filter(n => n)
      this.doimaysarr.forEach(data => {
        this.doimays.push({ "value": data, "title": data })
      });
      this.settings.columns.doimay.filter.config.list = this.doimays

      this.manhinhsarr = [...new Set(this.data.map(({ manhinh }) => manhinh) )].filter(n => n)
      this.manhinhsarr.forEach(data => {
        this.manhinhs.push({ "value": data, "title": data })
      });
      this.settings.columns.manhinh.filter.config.list = this.manhinhs

      this.chipsarr = [...new Set(this.data.map(({ chip }) => chip) )].filter(n => n)
      this.chipsarr.forEach(data => {
        this.chips.push({ "value": data, "title": data })
      });
      this.settings.columns.chip.filter.config.list = this.chips

      this.nhomsarr = [...new Set(this.data.map(({ nhom }) => nhom) )].filter(n => n)
      this.nhomsarr.forEach(data => {
        this.nhoms.push({ "value": data, "title": data })
      });
      this.settings.columns.nhom.filter.config.list = this.nhoms

      this.ramsarr = [...new Set(this.data.map(({ ram }) => ram) )].filter(n => n)
      this.ramsarr.forEach(data => {
        this.rams.push({ "value": data, "title": data })
      });
      this.settings.columns.ram.filter.config.list = this.rams

      this.ramsarr = [...new Set(this.data.map(({ ram }) => ram) )].filter(n => n)
      this.ramsarr.forEach(data => {
        this.rams.push({ "value": data, "title": data })
      });
      this.settings.columns.ram.filter.config.list = this.rams

      this.tansosarr = [...new Set(this.data.map(({ tanso }) => tanso) )].filter(n => n)
      this.tansosarr.forEach(data => {
        this.tansos.push({ "value": data, "title": data })
      });
      this.settings.columns.tanso.filter.config.list = this.tansos

      this.ocungsarr = [...new Set(this.data.map(({ ocung }) => ocung) )].filter(n => n)
      this.ocungsarr.forEach(data => {
        this.ocungs.push({ "value": data, "title": data })
      });
      this.settings.columns.ocung.filter.config.list = this.ocungs


      this.settings = Object.assign({}, this.settings);


    });
    this.service.getdoimay().subscribe(val => {
      let data = val.map(val => val.doimay)
      data.forEach(data => {
        this.datadoimay.push({ "value": data, "title": data })
      });
      this.settings.columns.doimay.editor.config.list = this.datadoimay
      this.settings = Object.assign({}, this.settings);
    });
    this.service.getloaimay().subscribe(val => {
      let data = val.map(val => val.loaimay)
      data.forEach(data => {
        this.dataloaimay.push({ "value": data, "title": data })
      });
      this.settings.columns.loaimay.editor.config.list = this.dataloaimay
      this.settings = Object.assign({}, this.settings);
    });
    this.service.getmanhinh().subscribe(val => {
      let data = val.map(val => val.manhinh)
      data.forEach(data => {
        this.datamanhinh.push({ "value": data, "title": data })
      });
      this.settings.columns.manhinh.editor.config.list = this.datamanhinh
      this.settings = Object.assign({}, this.settings);
    });
    this.service.getocung().subscribe(val => {
      let data = val.map(val => val.ocung)
      data.forEach(data => {
        this.dataocung.push({ "value": data, "title": data })
      });
      this.settings.columns.ocung.editor.config.list = this.dataocung
      this.settings = Object.assign({}, this.settings);
    });
    this.service.getram().subscribe(val => {
      let data = val.map(val => val.ram)
      data.forEach(data => {
        this.dataram.push({ "value": data, "title": data })
      });
      this.settings.columns.ram.editor.config.list = this.dataram
      this.settings = Object.assign({}, this.settings);
    });
    this.service.getchip().subscribe(val => {
      let data = val.map(val => val.chip)
      data.forEach(data => {
        this.datachip.push({ "value": data, "title": data })
      });
      this.settings.columns.chip.editor.config.list = this.datachip
      this.settings = Object.assign({}, this.settings);
    });
  }


  settings = {
    actions: false,
    pager:false,
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark" (click)="onClick()"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },

    columns: {
      masanpham: {
        title: 'Mã Sản Phẩm',
        type: 'string',
        width: '300px'
      },
      loaimay: {
        title: 'Loại Máy',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: []
          }
        }
        ,
        filter: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              
            ],
          },
        },
        width: '200px'
      },
      doimay: {
        title: 'Đời Máy',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
            ]
          }
        }
        ,
        filter: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              
            ],
          },
        },
        width: '200px'
      },
      manhinh: {
        title: 'Màn Hình',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
            ]
          }
        },
        filter: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              
            ],
          },
        },
      },
      chip: {
        title: 'Chip',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
            ]
          }
        },
        filter: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              
            ],
          },
        },
      },
      tanso: {
        title: 'Tần số',
        type: 'string',
        filter: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              
            ],
          },
        },
      },
      ram: {
        title: 'Ram',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
            ]
          }
        },
        filter: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              
            ],
          },
        },
      },
      ocung: {
        title: 'Ổ cứng',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
            ]
          }
        },
        filter: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              
            ],
          },
        },
      },
      nhom: {
        title: 'Nhóm',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              { value: 'A', title: 'A' },
              { value: 'B', title: 'B' },
              { value: 'C', title: 'C' },
              { value: 'D', title: 'D' },
            ]
          }
        },
        filter: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              
            ],
          },
        },
      },
      imei: {
        title: 'IMEI',
        type: 'string'
      },
      gia1: {
        title: 'Giá 1',
        type: 'string'
      },
      gia2: {
        title: 'Giá 2',
        type: 'string'
      },
      gia3: {
        title: 'Khách lẻ',
        type: 'string'
      },
      mausac: {
        title: 'Màu Sắc',
        type: 'string'
      },
      chitiet: {
        title: 'Chi Tiết',
        type: 'string'
      },
      trangthai: {
        title: 'Tên Người Mua',
        type: 'string'
      },
      chitietdacbiet: {
        title: 'Chi tiết đặc biệt',
        type: 'string'
      },
      madonhang: {
        title: 'Mã DH',
        type: 'string'
      },
      ngayban: {
        title: 'Ngày Bán',
        type: 'string'
      }
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

  ngDoCheck() {
    this.soluongmay = this.source != null ? this.source.count() : null;
  }

  ngOnInit(): void {
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Bạn có chắc muốn xóa không ????')) {
      this.service.deletequanlymay(
        [
          event['data']['masanpham'],
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
    if (!this.data.some(el => el.masanpham === (event['newData']['masanpham']))) {
      this.service.quanlymay(
        [
          event['newData']['loaimay'],
          event['newData']['doimay'],
          event['newData']['manhinh'],
          event['newData']['chip'],
          event['newData']['tanso'],
          event['newData']['ram'],
          event['newData']['ocung'],
          event['newData']['nhom'],
          event['newData']['imei'],
          event['newData']['gia1'],
          event['newData']['gia2'],
          event['newData']['gia3'],
          '',
          event['newData']['masanpham'],
          event['newData']['chitiet'],
          '',
          event['newData']['mausac'],
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
      alert('Dữ liệu đã tồn tại');
      event.confirm.reject();
    }
  }





onSaveConfirm(event) {
  if (window.confirm('Bạn có muốn thay đổi không?')) {
    this.service.deletequanlymay(
      [
        event['newData']['masanpham'],
      ]
    )
      .subscribe(data => {

        console.log("POST Request is successful ", data);
        this.service.quanlymay(
          [
            event['newData']['loaimay'],
            event['newData']['doimay'],
            event['newData']['manhinh'],
            event['newData']['chip'],
            event['newData']['tanso'],
            event['newData']['ram'],
            event['newData']['ocung'],
            event['newData']['nhom'],
            event['newData']['imei'],
            event['newData']['gia1'],
            event['newData']['gia2'],
            event['newData']['gia3'],
            '',
            event['newData']['masanpham'],
            event['newData']['chitiet'],
            '',
            event['newData']['mausac'],
          ]
        )
          .subscribe(data => {

            console.log("POST Request is successful ", data);
          },
            error => {
              console.log("Error", error);

            })
      },
        error => {
          console.log("Error", error);

        })
  } else {
    event.confirm.reject();
  }
}

exportexcel(){
  let element = document.getElementById('excel-table'); 
  const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

  /* generate workbook and add the worksheet */
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  /* save to file */
  XLSX.writeFile(wb, this.fileName);
}
}