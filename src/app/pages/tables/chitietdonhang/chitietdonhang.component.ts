import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NetworkserviceService } from '../../../services/networkservice.service';

@Component({
  selector: 'ngx-chitietdonhang',
  templateUrl: './chitietdonhang.component.html',
  styleUrls: ['./chitietdonhang.component.scss']
})
export class ChitietdonhangComponent implements OnInit {
  data
  madonhang
  role

  transactionkey
  location
  tienmat = '0'
  daikibi = '0'
  chuyenkhoan = '0'
  tonggiatien = '0'
  duyetdon=''
  constructor(private service: NetworkserviceService, private route: ActivatedRoute, private router: Router) {
    this.role = localStorage.getItem('role')
    this.route.queryParams
      .subscribe(params => {
        console.log("params.id[0]", params.id[0])
        console.log("params.id", params.id)
        if (params.id.length == 1) {
          this.madonhang = params.id[0]
        }
        else {
          this.madonhang = params.id
        }
        // this.madonhang = params.id[0]
        this.service.getdanhsachdonhangquanlymobileid([this.madonhang]).subscribe(value => {
          console.log('value', value)
          this.transactionkey = value[0].transactionkey
          this.location = value[0].vitri
          this.duyetdon = value[0].trangthaidonhang
          if (value[0].tienmat != null) {
            this.tienmat = value[0].tienmat
          }
          if (value[0].chuyenkhoan != null) {
            this.chuyenkhoan = value[0].chuyenkhoan
          }
          if (value[0].daikibi != null) {
            this.daikibi = value[0].daikibi
          }

          this.tonggiatien = value[0].giatienban
          this.service.getdanhsachsanphamdabanquanlymobiletransaction([value[0].transactionkey]).subscribe(data => {
            this.data = data

            console.log('data', data)
          })
        })

      })
  }

  ngOnInit(): void {
  }

  huydonhang() {
    if (window.confirm('Bạn có chắc muốn xóa không ????')) {
      this.data.forEach(element => {
        this.service.getsoluongsanphamhientaidangco([element.productid, element.vitri]).subscribe(d => {
          console.log('d', d)
          console.log('parseInt(d[0].quantity) ', parseInt(d[0].quantity))
          console.log('parseInt(element.quantity)', parseInt(element.quantity))

          this.service.updatesoluongsanphamhuy([parseInt(d[0].quantity) + parseInt(element.soluong), element.productid, element.vitri]).subscribe(val => {
            this.service.deletedanhsachdonhangsaukhihuy([this.transactionkey]).subscribe(
              va => {
                this.service.deletedanhsachsanphamdabansaukhihuy([this.transactionkey]).subscribe(t => {
                  this.service.deletequanlythutransactionkey([this.transactionkey]).subscribe(c => {
                    if (this.location == "WAREHOUSE") {
                      this.router.navigateByUrl('/pages/tables/quanlydanhsachdonhang')
                      console.log(this.location)
                    }
                    if (this.location == "SHOP_VN") {
                      this.router.navigateByUrl('/pages/tables/quanlydanhsachdonhangvn')
                      console.log(this.location)
                    }
                    if (this.location == "SHOP_JP") {
                      this.router.navigateByUrl('/pages/tables/quanlydanhsachdonhangjp')
                      console.log(this.location)
                    }

                  })
                })
              }
            )

          })
        })
      });
    }
  }

  duyetdonhang(){
    this.service.updatetrangthaidonhang(["trahet",this.madonhang]).subscribe(val=>{
      if (this.location == "WAREHOUSE") {
        this.router.navigateByUrl('/pages/tables/quanlydanhsachdonhang')
        console.log(this.location)
      }
      if (this.location == "SHOP_VN") {
        this.router.navigateByUrl('/pages/tables/quanlydanhsachdonhangvn')
        console.log(this.location)
      }
      if (this.location == "SHOP_JP") {
        this.router.navigateByUrl('/pages/tables/quanlydanhsachdonhangjp')
        console.log(this.location)
      }
    })
  }
  hoantatthanhtoan(){}
}
