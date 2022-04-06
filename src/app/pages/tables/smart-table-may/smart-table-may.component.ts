import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { NetworkserviceService } from '../../../services/networkservice.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'ngx-smart-table-may',
  templateUrl: './smart-table-may.component.html',
  styleUrls: ['./smart-table-may.component.scss']
})
export class SmartTableMayComponent implements OnInit {
  fileName = 'DanhSachHangTon.xlsx';

  source: LocalDataSource = new LocalDataSource();
  datachip = []
  datadoimay = []
  dataloaimay = []
  datamanhinh = []
  dataram = []
  dataocung = []
  data
  datadaxuly
  fileToUpload: File | null = null;
  role
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
    this.role = localStorage.getItem("role")
    if (localStorage.getItem("role") == 'admin') {
      this.service.getquanlymay().subscribe(val => {
        this.soluongmay = val.filter(val => val.trangthai == '').length
        this.source.load(val.filter(val => val.trangthai == ''))
        this.data = val

        this.loaimaysarr = [...new Set(this.data.map(({ loaimay }) => loaimay))].filter(n => n)
        this.loaimaysarr.forEach(data => {
          this.loaimays.push({ "value": data, "title": data })
        });
        this.settings.columns.loaimay.filter.config.list = this.loaimays


        this.doimaysarr = [...new Set(this.data.map(({ doimay }) => doimay))].filter(n => n)
        this.doimaysarr.forEach(data => {
          this.doimays.push({ "value": data, "title": data })
        });
        this.settings.columns.doimay.filter.config.list = this.doimays

        this.manhinhsarr = [...new Set(this.data.map(({ manhinh }) => manhinh))].filter(n => n)
        this.manhinhsarr.forEach(data => {
          this.manhinhs.push({ "value": data, "title": data })
        });
        this.settings.columns.manhinh.filter.config.list = this.manhinhs

        this.chipsarr = [...new Set(this.data.map(({ chip }) => chip))].filter(n => n)
        this.chipsarr.forEach(data => {
          this.chips.push({ "value": data, "title": data })
        });
        this.settings.columns.chip.filter.config.list = this.chips

        this.nhomsarr = [...new Set(this.data.map(({ nhom }) => nhom))].filter(n => n)
        this.nhomsarr.forEach(data => {
          this.nhoms.push({ "value": data, "title": data })
        });
        this.settings.columns.nhom.filter.config.list = this.nhoms

        this.ramsarr = [...new Set(this.data.map(({ ram }) => ram))].filter(n => n)
        this.ramsarr.forEach(data => {
          this.rams.push({ "value": data, "title": data })
        });
        this.settings.columns.ram.filter.config.list = this.rams

        this.ramsarr = [...new Set(this.data.map(({ ram }) => ram))].filter(n => n)
        this.ramsarr.forEach(data => {
          this.rams.push({ "value": data, "title": data })
        });
        this.settings.columns.ram.filter.config.list = this.rams

        this.tansosarr = [...new Set(this.data.map(({ tanso }) => tanso))].filter(n => n)
        this.tansosarr.forEach(data => {
          this.tansos.push({ "value": data, "title": data })
        });
        this.settings.columns.tanso.filter.config.list = this.tansos

        this.ocungsarr = [...new Set(this.data.map(({ ocung }) => ocung))].filter(n => n)
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

  }


  settings = {
    actions: { columnTitle: '', position: 'right' },
    // selectMode: 'multi',
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark" (click)="onClick()"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },

    pager: false,
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
      chitietdacbiet: {
        title: 'Chi Tiết Đặc Biệt',
        type: 'string'
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
    if (!this.data.some(el => el.masanpham === (event['newData']['masanpham']) || el.imei === (event['newData']['imei']))) {
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
          event['newData']['chitiet'] ? event['newData']['chitiet'] : '',
          '',
          event['newData']['mausac'] ? event['newData']['mausac'] : '',
          event['newData']['chitietdacbiet'],
          '',
          ''
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
      alert('Mã sản phẩm' + event['newData']['masanpham'] + ' hoặc imei ' + event['newData']['imei'] + ' đã tồn tại');
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
              event['newData']['chitiet'] ? event['newData']['chitiet'] : '',
              '',
              event['newData']['mausac'] ? event['newData']['mausac'] : '',
              event['newData']['chitietdacbiet'] ? event['newData']['chitietdacbiet'] : '',
              '',
              ''
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
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }


  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload)
  }

  taosanpham() {
    this.datadaxuly.forEach(element => {
      if (this.data.some(el => el.masanpham === element.masanpham && el.imei === element.imei)) {
        console.log('testtrung')
        this.service.deletequanlymay(
          [
            element.masanpham
          ]
        )
          .subscribe(data => {

            this.service.quanlymay(
              [
                element.loaimay,
                element.doimay,
                element.manhinh,
                element.chip,
                element.tanso,
                element.ram,
                element.ocung,
                element.nhom,
                element.imei,
                element.gia1,
                element.gia2,
                element.gia3,
                '',
                element.masanpham,
                element.chitiet != null ? element.chitiet : '',
                '',
                element.mausac != null ? element.mausac : '',
                element.chitietdacbiet != null ? element.chitietdacbiet : '',
                '',
                ''
              ]
            )
              .subscribe(data => {
                this.service.getquanlymay().subscribe(val => {
                  this.source.load(val.filter(val => val.trangthai == ''))
                  this.data = val
                });
                console.log("POST Request is successful ", data);
              },
                error => {
                  console.log("Error", error);

                })
          },
            error => {
              console.log("Error", error);

            })




      }
      else {
        if (!this.data.some(el => el.masanpham === element.masanpham || el.imei === element.imei)) {
          this.service.quanlymay(
            [
              element.loaimay,
              element.doimay,
              element.manhinh,
              element.chip,
              element.tanso,
              element.ram,
              element.ocung,
              element.nhom,
              element.imei,
              element.gia1,
              element.gia2,
              element.gia3,
              '',
              element.masanpham,
              element.chitiet != null ? element.chitiet : '',
              '',
              element.mausac != null ? element.mausac : '',
              element.chitietdacbiet != null ? element.chitietdacbiet : '',
              '',
              ''
            ]
          )
            .subscribe(data => {
              this.service.getquanlymay().subscribe(val => {
                this.source.load(val.filter(val => val.trangthai == ''))
                this.data = val
              });
              console.log("POST Request is successful ", data);
            },
              error => {
                console.log("Error", error);

              })
        }
        else {
          alert('Mã sản phẩm ' + element.masanpham + ' hoặc imei ' + element.imei + ' đã tồn tại');
        }
      }
    });
    alert("Sản Phẩm Đang Được Tải Lên. Vui lòng đợi ít phút")
    setTimeout(() => {
      window.location.reload()
    },
      20000);
  }

  uploadExcel(e) {

    try {

      const fileName = e.target.files[0].name;

      import('xlsx').then(xlsx => {
        let workBook = null;
        let jsonData = null;
        const reader = new FileReader();
        // const file = ev.target.files[0];
        reader.onload = (event) => {
          const data = reader.result;
          workBook = xlsx.read(data, { type: 'binary' });
          jsonData = workBook.SheetNames.reduce((initial, name) => {
            const sheet = workBook.Sheets[name];
            initial[name] = xlsx.utils.sheet_to_json(sheet);
            return initial;
          }, {});

          console.log(this.getData(jsonData[Object.keys(jsonData)[0]]));
          this.datadaxuly = this.getData(jsonData[Object.keys(jsonData)[0]])
        };
        reader.readAsBinaryString(e.target.files[0]);
      });

    } catch (e) {
      console.log('error', e);
    }
  }


  getData(input) {
    var output = [];
    for (var i = 0; i < input.length; i++) {
      output.push({
        'masanpham': input[i]['Mã Sản Phẩm'],
        'loaimay': input[i]['Loại Máy'],
        'doimay': input[i]['Đời Máy'],
        'manhinh': input[i]['Màn Hình'],
        'chip': input[i]['Chip'],
        'tanso': input[i]['Tần số'],
        'ram': input[i]['Ram'],
        'ocung': input[i]['Ổ cứng'],
        'nhom': input[i]['Nhóm'],
        'imei': input[i]['IMEI'],
        'gia1': input[i]['Giá 1'],
        'gia2': input[i]['Giá 2'],
        'gia3': input[i]['Khách lẻ'],
        'chitiet': input[i]['Chi Tiết'],
        'mausac': input[i]['Màu Sắc'],
        'chitietdacbiet': input[i]['Chi Tiết Đặc Biệt'],
        'madonhang': '',
        'ngayban': ''
      });
    }
    return output;
  }



  exportexcel() {
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }
}
