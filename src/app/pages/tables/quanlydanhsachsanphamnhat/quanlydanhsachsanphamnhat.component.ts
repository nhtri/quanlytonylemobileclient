import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NetworkserviceService } from '../../../services/networkservice.service';

@Component({
  selector: 'ngx-quanlydanhsachsanphamnhat',
  templateUrl: './quanlydanhsachsanphamnhat.component.html',
  styleUrls: ['./quanlydanhsachsanphamnhat.component.scss']
})
export class QuanlydanhsachsanphamnhatComponent implements OnInit {

  datadaxuly
  constructor(private service: NetworkserviceService) {

    this.service.getsanphamtonkhojp().subscribe(val => {

      val.forEach(element => {
        this.arrayImei = (element['imei'].split(",")).filter(val=>val!='')
        // element.map(obj => ({ ...obj, soluong: this.arrayImei.length }))
        
        // element.soluong = this.arrayImei.length
        element.imei = element.imei.replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",")
        this.dataedit.push(element)
      });
      this.source.load(this.dataedit);
      this.data = val



    });

    this.service.getproductgroups().subscribe(val => {
      // let data = val.map(val => val.name)
      let data=val
      let datanhomsanphamfilter = []
      data.forEach(data => {
        this.datanhomsanpham.push({ "value": data.id, "title": data.name })
        datanhomsanphamfilter.push({ "value": data.name, "title": data.name })
        console.log('datanhomsanphamfilter',datanhomsanphamfilter, 'datanhomsanpham', this.datanhomsanpham)
      });
      console.log(this.datanhomsanpham)
      this.settings.columns.group_name.editor.config.list = this.datanhomsanpham
      this.settings.columns.group_name.filter.config.list = datanhomsanphamfilter
      this.settings = Object.assign({}, this.settings);

    })

    // this.service.gettensanpham().subscribe(val => {
    //   let data = val.map(val => val.tensanpham)
    //   data.forEach(data => {
    //     this.datatensanpham.push({ "value": data, "title": data })
    //   });
    //   // this.settings.columns.name.editor.config.list = this.datatensanpham
    //   this.settings = Object.assign({}, this.settings);

    // })

    // this.service.getdungluong().subscribe(val => {
    //   let data = val.map(val => val.dungluong)
    //   data.forEach(data => {
    //     this.datadungluong.push({ "value": data, "title": data })
    //   });
    //   this.settings.columns.dungluong.editor.config.list = this.datadungluong
    //   this.settings = Object.assign({}, this.settings);

    // })

    // this.service.getmau().subscribe(val => {
    //   let data = val.map(val => val.mau)
    //   data.forEach(data => {
    //     this.datamau.push({ "value": data, "title": data })
    //   });
    //   // this.settings.columns.color.editor.config.list = this.datamau
    //   this.settings = Object.assign({}, this.settings);

    // })

    // this.service.getloaisanpham().subscribe(val => {
    //   let data = val.map(val => val.loaisanpham)
    //   data.forEach(data => {
    //     this.dataloaisanpham.push({ "value": data, "title": data })
    //   });
    //   this.settings.columns.loaisanpham.editor.config.list = this.dataloaisanpham
    //   this.settings = Object.assign({}, this.settings);

    // })

    // this.service.getphienban().subscribe(val => {
    //   let data = val.map(val => val.phienban)
    //   data.forEach(data => {
    //     this.dataphienban.push({ "value": data, "title": data })
    //   });
    //   this.settings.columns.phienban.editor.config.list = this.dataphienban
    //   this.settings = Object.assign({}, this.settings);

    // })
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
      // id: {
      //   title: 'ID',
      //   type: 'string',
      //   // filter: false,
      //   editable: false,
      //   addable: false,
      //   hidden:true,
      // },
      group_name: {
        title: 'Nhóm Sản Phẩm',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: []
          }
        },
         filter: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: []
          }
        },
      },
      name: {
        title: 'Tên Sản Phẩm',
        editor: {
          // type: 'list',
          // config: {
          //   selectText: 'Select',
          //   list: [
          //   ]
          // }
          type:'string'
        },
        // filter: false,
      },
      imei: {
        title: 'IMEI',
        type: 'string',
        // filter: false,
      },
      // dungluong: {
      //   title: 'Dung Lượng',
      //   editor: {
      //     type: 'list',
      //     config: {
      //       selectText: 'Select',
      //       list: [
      //       ]
      //     }
      //   },
      //   // filter: false,
      // },
      color: {
        title: 'Màu',
        editor: {
          // type: 'list',
          // config: {
          //   selectText: 'Select',
          //   list: [
          //   ]
          // }
          type:'string'
        },
        // filter: false,
      },
      status: {
        title: 'Tình Trạng',
        editor: {
          // type: 'list',
          // config: {
          //   selectText: 'Select',
          //   list: [
          //   ]
          // }
          type:'string'
        },
        // filter: false,
      },
      // phienban: {
      //   title: 'Phiên Bản',
      //   editor: {
      //     type: 'list',
      //     config: {
      //       selectText: 'Select',
      //       list: [
      //       ]
      //     }
      //   },
      //   // filter: false,
      // },
     
      quantity: {
        title: 'Số Lượng',
        type: 'string',
        editable: true,
        addable: true,
        // filter: false,
      },
      price: {
        title: 'Giá Tiền',
        type: 'string',
        editable: true,
        addable: true,
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

//   onSaveConfirm(event) {
//     if (window.confirm('Bạn có muốn thay đổi không?')) {
//       this.service.updatesanpham(
//         [
//           event['newData']['nhomsanpham'],
//           event['newData']['tensanpham'],
//           event['newData']['dungluong'],
//           event['newData']['loaisanpham'],
//           event['newData']['phienban'],
//           event['newData']['imei'],
//           event['newData']['id'],
//         ]
//       )
//         .subscribe(data => {
        
//           console.log("POST Request is successful ", data);

//           this.service.getsanphamtonkhokhohang().subscribe(val => {
// this.dataedit=[]
//             val.forEach(element => {
//               this.arrayImei = (element['imei'].split(",")).filter(val=>val!='')
//               // element.map(obj => ({ ...obj, soluong: this.arrayImei.length }))
              
//               element.soluong = this.arrayImei.length
//               element.imei = element.imei.replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",").replace(",,",",")
//               this.dataedit.push(element)
//             });
//             this.source.load(this.dataedit);
//             this.data = val
      
      
      
//           });

          
//         },
//           error => {
//             console.log("Error", error);

//           })
//       event.confirm.resolve();
//     } else {
//       event.confirm.reject();
//     }
//   }


onSaveConfirm(event) {
  if (window.confirm('Bạn có muốn thay đổi không?')) {
    console.log(event['newData']['imei'])
    this.service.editsanphamtonkhojp(
      {
        'id':event['newData']['id'],
        'imei':event['newData']['imei'],
        'name':event['newData']['name'],
        'color':event['newData']['color'],
        'status':event['newData']['status'],
        'quantity' :event['newData']['quantity'],
       'price': event['newData']['price'],
       'position' :'SHOP_JP',
        'source':'SHOP_JP',
        'product_group_id':event['newData']['product_group_id'],
      }
    )
      .subscribe(data => {
window.location.reload()
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

  onDeleteConfirm(event): void {
    console.log(event)
    if (window.confirm('Bạn có chắc muốn xóa không ????')) {
      this.service.deletesanphamtonkho(
        
          event['data']['id']
      
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
    // if (!this.data.some(el => el.nhomsanpham === (event['newData']['nhomsanpham']) &&
    // el.tensanpham === (event['newData']['tensanpham']) &&
    // el.dungluong === (event['newData']['dungluong']) &&
    // el.mau === (event['newData']['mau']) &&
    // el.loaisanpham === (event['newData']['loaisanpham']) &&
    // el.phienban === (event['newData']['phienban'])
    // )) {
      console.log(event['newData']['imei'])
      this.service.sanphamtonkhojp(
        {
          'imei':event['newData']['imei'],
          'name':event['newData']['name'],
          'color':event['newData']['color'],
          'status':event['newData']['status'],
          'quantity' :event['newData']['quantity'],
         'price': event['newData']['price'],
         'position' :'SHOP_JP',
          'source':'SHOP_JP',
          'product_group_id':event['newData']['product_group_id'],
        }
      )
        .subscribe(data => {
window.location.reload()
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
        'product_group_id': input[i]['Nhóm Sản Phẩm'],
        'name': input[i]['Tên Sản Phẩm'],
        'imei': input[i]['IMEI'],
        'color': input[i]['Màu'],
        'status': input[i]['Tình Trạng'],
        'quantity': input[i]['Số Lượng'],
        'price': input[i]['Giá Tiền'],
        'position': 'SHOP_JP',
        'source': 'SHOP_JP',
      });
    }
    console.log("output", output)
    
    output.forEach(elementoutput => {
      this.datanhomsanpham.forEach(element => {
        if(elementoutput.product_group_id == element.title){
          elementoutput.product_group_id = element.value
        }
      });
      console.log("output", output)
});
return output;
  }

  taosanpham(){
    this.datadaxuly.forEach(element => {
      this.service.sanphamtonkhojp(
        element
      )
        .subscribe(data => {
          console.log("POST Request is successful ", data);
        },
          error => {
            console.log("Error", error);
  
          })
    });
  
    setTimeout(() => {
      window.location.reload()
    },
      30000);
  }
}
