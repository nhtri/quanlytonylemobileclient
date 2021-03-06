import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { NetworkserviceService } from '../../../services/networkservice.service';

@Component({
  selector: 'ngx-smart-table-detail',
  templateUrl: './smart-table-detail.component.html',
  styleUrls: ['./smart-table-detail.component.scss']
})
export class SmartTableDetailComponent implements OnInit {
  masanphammoi = ""
  source: LocalDataSource = new LocalDataSource();
  data
  constructor(private route: ActivatedRoute, private service: NetworkserviceService, private router: Router) { }
  sanphams
  madonhangparam
  capnhatdanhsachdonhang
  gia
  dailyrole
  masanphamarray=[]
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params.id[0]); // { orderby: "price" }
        if (params.id[0] == 'D') {
          this.router.navigateByUrl('/pages/tables/smart-table-don-hang-dang-xu-ly-admin')
        }
        this.service.getdanhsachdonhangtheomadonhang([params.id[0]]).subscribe(val => {
          this.sanphams = [...new Map(val.map(item => [item.madonhang, item])).values()]
          this.sanphams.forEach(element => {
            this.masanphamarray.push(element.masanpham)
          });
          this.source.load(val)
          for (let i = 0; i < this.sanphams.length; i++) {
            this.service.gettonggiatienreal([this.sanphams[i].madonhang]).subscribe(val => {
              // this.tongtiens.push(val)
              console.log('val', val)
              this.sanphams[i] = { ...this.sanphams[i], ...{ 'tongtien': val[0]['total'] } }
              this.sanphams[i] = { ...this.sanphams[i], ...{ 'tongsanpham': val[0]['totalitem'] } }
              // console.log(this.tongtiens,val)
            })
          }
          this.data = val
          this.service.getalluser().subscribe(val => {
            console.log('this.sanphams[0].tenkhachhang', this.sanphams[0].tenkhachhang)
            this.dailyrole = val.filter(data => data.hoten == this.sanphams[0].tenkhachhang)[0].quyenhan
            console.log('this.dailyrole', this.dailyrole)
          })
          this.madonhangparam = params.id[0]
          console.log(this.sanphams)
        });
      }
      );
  }


  settings = {
    actions: { columnTitle: '', position: 'right', edit: false, add: false },
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark" (click)="onClick()"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    //   confirmCreate: true,
    // },

    columns: {

      masanpham: {
        title: 'M?? S???n Ph???m',
        type: 'string',
        width: '300px',
        filter: false,
      },
      loaimay: {
        title: 'Lo???i M??y',
        filter: false,
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: []
          }
        }
        ,
        width: '200px'
      },
      doimay: {
        title: '?????i M??y',
        filter: false,
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
            ]
          }
        }
        ,
        width: '200px'
      },
      manhinh: {
        title: 'M??n H??nh',
        filter: false,
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
            ]
          }
        }
      },
      chip: {
        title: 'Chip',
        filter: false,
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
            ]
          }
        },
      },
      tanso: {
        filter: false,
        title: 'T???n s???',
        type: 'string'
      },
      ram: {
        filter: false,
        title: 'Ram',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
            ]
          }
        },
      },
      ocung: {
        filter: false,
        title: '??? c???ng',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
            ]
          }
        },
      },
      nhom: {
        filter: false,
        title: 'Nh??m',
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
      },
      imei: {
        filter: false,
        title: 'IMEI',
        type: 'string'
      },
      gia: {
        filter: false,
        title: 'Gi??',
        type: 'string'
      },
      mausac: {
        filter: false,
        title: 'M??u S???c',
        type: 'string'
      },
      chitiet: {
        filter: false,
        title: 'Chi Ti???t',
        type: 'string'
      },
      chitietdacbiet: {
        filter: false,
        title: 'Chi Ti???t ?????c Bi???t',
        type: 'string'
      },
    },
    // edit:false,
    // edit: {
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    //   confirmSave: true,
    // },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
  };


  onDeleteConfirm(event): void {
    if (window.confirm('B???n c?? ch???c mu???n x??a kh??ng ????')) {
      this.service.deletedanhsachdonhangsanphamreal(
        [
          this.madonhangparam,
          event['data']['masanpham']
        ]
      )
        .subscribe(data => {
          this.masanphamarray.filter(data => data != event['data']['masanpham'])
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
      this.service.danhsachdonhang(
        [
          event['newData']['loaimay'],
          event['newData']['doimay'],
          event['newData']['manhinh'],
          event['newData']['chip'],
          event['newData']['tanso'],
          event['newData']['ram'],
          event['newData']['ocung'],
          event['newData']['nhom'],
          event['newData']['gia'],
          '',
          localStorage.getItem('sodienthoai'),
          localStorage.getItem('hoten'),
          'dangxuly',
          new Date(),
          event['newData']['masanpham'],
          this.sanphams.madonhang,
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
      alert('D??? li???u ???? t???n t???i');
      event.confirm.reject();
    }
  }
  // onSaveConfirm(event) {
  //   if (window.confirm('B???n c?? mu???n thay ?????i kh??ng?')) {
  //     this.service.deletedanhsachdonhangsanphamreal(
  //       [
  //         this.madonhangparam,
  //         event['data']['masanpham']
  //       ]
  //     )
  //       .subscribe(data => {

  //         console.log("POST Request is successful ", data);
  //         this.service.danhsachdonhang(
  //           [
  //             event['newData']['loaimay'],
  //             event['newData']['doimay'],
  //             event['newData']['manhinh'],
  //             event['newData']['chip'],
  //             event['newData']['tanso'],
  //             event['newData']['ram'],
  //             event['newData']['ocung'],
  //             event['newData']['nhom'],
  //             event['newData']['gia'],
  //             '',
  //             localStorage.getItem('sodienthoai'),
  //             localStorage.getItem('hoten'),
  //             'dangxuly',
  //             new Date(),
  //             event['newData']['masanpham'],
  //             this.madonhangparam,
  //             event['newData']['imei']
  //           ]
  //         )
  //           .subscribe(data => {

  //             console.log("POST Request is successful ", data);
  //           },
  //             error => {
  //               console.log("Error", error);

  //             })
  //       },
  //         error => {
  //           console.log("Error", error);

  //         })
  //   } else {
  //     event.confirm.reject();
  //   }
  // }



  huy() {
    if (window.confirm('B???n c?? ch???c mu???n x??a ????n h??ng kh??ng ???')) {
      this.service.deletedanhsachdonhangreal(
        [
          this.madonhangparam,
        ]
      )
        .subscribe(data => {
          this.router.navigateByUrl('/pages/tables/smart-table-don-hang-dang-xu-ly-admin')
          console.log("POST Request is successful ", data);
        },
          error => {
            console.log("Error", error);

          })
    }
  }

  dongy() {
    let daban = false
    this.service.getquanlymay().subscribe(data => {
      const arraySanpham = data.filter(data => data.trangthai != '').map(data => data.masanpham)
      console.log('test', arraySanpham)
      this.service.getdanhsachdonhangtheomadonhang([this.madonhangparam]).subscribe(val => {
        const sanpham = val
        console.log('test1', val)
        for (let i = 0; i < sanpham.length; i++) {
          console.log('testmasanpham', sanpham[i].masanpham, arraySanpham)
          if (arraySanpham.includes(sanpham[i].masanpham)) {
            daban = true
            alert('S???n ph???m ' + sanpham[i].masanpham + ' ???? b??n. Vui l??ng thay th??? b???ng s???n ph???m kh??c')
          }
        }
        if (daban != true) {
          this.service.updatetrangthaidonhang(
            [
              'thanhcong',
              this.madonhangparam,
            ]
          )
            .subscribe(data => {
              alert("????n H??ng ???? X??? L?? Th??nh C??ng")
              this.service.getdanhsachdonhangtheomadonhang([this.madonhangparam]).subscribe(data => {

                data.forEach(element => {
                  this.service.updatequanlymaynguoimua([element.tenkhachhang, element.madonhang, new Date(), element.masanpham]).subscribe(val => { console.log("POST Request is successful ", val) })
                });
              })
              this.router.navigateByUrl('/pages/tables/smart-table-don-hang-dang-xu-ly-admin')
              console.log("POST Request is successful ", data);
            },
              error => {
                console.log("Error", error);

              })
        }
      })
      console.log("POST Request is successful ", data);
    },
      error => {
        console.log("Error", error);

      })







    // this.service.updatetrangthaidonhang(
    //   [
    //     'thanhcong',
    //     this.madonhangparam,
    //   ]
    // )
    //   .subscribe(data => {
    //     alert("????n H??ng ???? X??? L?? Th??nh C??ng")
    //     this.service.getdanhsachdonhangtheomadonhang([this.madonhangparam]).subscribe(data => {

    //       data.forEach(element => {
    //         this.service.updatequanlymaynguoimua([element.tenkhachhang, element.masanpham]).subscribe(val => { console.log("POST Request is successful ", val) })
    //       });
    //     })
    //     this.router.navigateByUrl('/smart-table-don-hang-da-xu-ly-thanh-cong')
    //     console.log("POST Request is successful ", data);
    //   },
    //     error => {
    //       console.log("Error", error);

    //     })


  }


  themsanpham() {
    if(!this.masanphamarray.includes(this.masanphammoi)){
    this.service.getquanlymaytheomasanpham([this.masanphammoi]).subscribe(data => {

      if (this.dailyrole == "dailycap1") {
        this.gia = data[0].gia1
      }
      if (this.dailyrole == "dailycap2") {
        this.gia = data[0].gia2
      }
      if (this.dailyrole == "khachle") {
        this.gia = data[0].gia3
      }
      this.service.danhsachdonhang([
        data[0].loaimay,
        data[0].doimay,
        data[0].manhinh,
        data[0].chip,
        data[0].tanso,
        data[0].ram,
        data[0].ocung,
        data[0].nhom,
        this.gia,
        data[0].soluong,
        this.sanphams[0].sodienthoaikhachhang,
        this.sanphams[0].tenkhachhang,
        'dangxuly',
        new Date(),
        data[0].masanpham,
        this.madonhangparam,
        data[0].imei,
        data[0].mausac,
        data[0].chitiet,
        data[0].chitietdacbiet
      ]).subscribe(data => {
        this.service.getdanhsachdonhangtheomadonhang([this.madonhangparam]).subscribe(val => {
          val.forEach(element => {
            this.masanphamarray.push(element.masanpham)
          });
          this.source.load(val)
          console.log(this.sanphams)
        });
        console.log("POST Request is successful ", data);
      },
        error => {
          console.log("Error", error);

        })



      console.log("POST Request is successful ", data);
    },
      error => {
        console.log("Error", error);

      })}
      else{
        alert('S???n ph???m ???? ???????c ch???n !!!')
      }
  }
}
