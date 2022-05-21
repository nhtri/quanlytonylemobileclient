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
          this.transactionkey = value[0].transactionkey
          this.location = value[0].vitri
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
            )

          })
        })
      });
    }
  }
}
