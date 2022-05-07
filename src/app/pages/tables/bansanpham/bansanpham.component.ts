import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NetworkserviceService } from '../../../services/networkservice.service';

@Component({
  selector: 'ngx-bansanpham',
  templateUrl: './bansanpham.component.html',
  styleUrls: ['./bansanpham.component.scss']
})
export class BansanphamComponent implements OnInit {
  datas = []
  imei = []
  id = []
  tienkhachdua = '0'
  tienthua = '0'
  tienhoadon = '0'
  hinhthucthanhtoan = ""
  tongtienthu = 0
  imeiduocchon = []
  giatiensanpham = []
  tongtienban = 0
  role = ''
  vitri = ''

  constructor(private service: NetworkserviceService, private route: ActivatedRoute, private router: Router) {

    this.route.queryParams
      .subscribe(params => {
        console.log('params.id', params.id)
        console.log("params.id[0]", params.id[0])
        if (params.id.length == 1) {
          this.id = params.id[0].split(",")
        }
        else {
          this.id = params.id.split(",")
        }
        console.log('this.id', this.id)
        this.id.forEach(element => {
          this.service.getsanpham([element]).subscribe(value => {
            console.log('value', value)

            this.datas.push(value.map(data => ({ ...data, quantitytemp: data.quantity, quantity: 1 })))

          })
        });
        console.log('this.datas', this.datas)


      })

  }

  ngOnInit(): void {
    this.role = localStorage.getItem('role')
  }

  onClick() { }

  quayve() {
    this.router.navigateByUrl("/pages/tables/danhsachsanpham")
  }

  delete(value) {
    console.log('delete', value)

    this.datas = []
    console.log(this.id)
    this.id = this.id.filter(val => val != value)
    console.log('this.id.filter(val=>val!==value)', this.id.filter(val => val !== value))
    this.id.forEach(element => {
      this.service.getsanpham([element]).subscribe(value => {
        this.datas.push(value.map(data => ({ ...data, quantitytemp: data.quantity, quantity: 1 })))

      })
    });
    this.tongtienthu = 0
    this.tongtienban = 0
    this.tienhoadon = this.tongtienban.toString()
  }

  changesotien(event, id,) {



  }


  changehinhthucthanhtoan(event) {
    this.tongtienthu = 0
    this.tongtienban = 0
    this.datas.forEach(e => {
      this.tongtienban += parseInt(e[0].quantity) * parseInt(e[0].sotienban)
      this.tongtienthu += parseInt(e[0].quantity) * parseInt(e[0].price)
    });
    this.tienhoadon = this.tongtienban.toString()
    this.hinhthucthanhtoan = event.target.value
    console.log(this.hinhthucthanhtoan)

  }

  hoantat() {
    if (this.hinhthucthanhtoan == 'default') {
      this.hinhthucthanhtoan = "tienmat"
    }
    console.log('this.datas', this.datas)
    let transactionkey = Date.now().toString() + 'dh' + Math.floor(Math.random() * 100000000).toString()
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getDate().toString().padStart(2, '0');
    let danhsachimei = ""
    let soluongsanpham = 0
    this.datas.forEach(element => {
      danhsachimei += element[0].imei + ','
      soluongsanpham += parseInt(element[0].quantity)
      this.vitri = element[0].position
    });
    // for (let i = 0; i < this.imeiduocchon.length; i++) {
    //   for (let j = 0; j < this.giatiensanpham.length; j++) {
    //     console.log("this.imeiduocchon[i]['id']", this.imeiduocchon[i]['id'])
    //     if (this.imeiduocchon[i].id == this.giatiensanpham[j].id) {
    //       this.imeiduocchon[i].giatien = this.giatiensanpham[j].giatien
    //     }
    //   }
    // }
    // this.imeiduocchon.forEach(element => {
    //   danhsachimei = (element.imei).toString() + "," + danhsachimei.toString()
    // });
    // console.log('this.imeiduocchon', this.imeiduocchon)
    // this.imeiduocchon.forEach(element => {



    //   this.service.getsanpham([element.id]).subscribe(value => {
    //     let newimei = value[0].imei.replace(element.imei, "")
    //     this.service.updateimeisanphamtonkho([newimei, element.id]).subscribe(value => { })
    //   })
    let datasale = []

    this.datas.forEach(element => {
      datasale.push({ "id": element[0].id, "quantity": element[0].quantity, "price": parseInt(element[0].sotienban), "position": this.vitri })
      this.service.danhsachsanphamdaban(['', element[0].name,
        '',
        '',
        '',
        element[0].imei,
        transactionkey,
        parseInt(element[0].price) * parseInt(element[0].quantity),
        date, this.hinhthucthanhtoan,
        this.vitri, parseInt(element[0].sotienban) * parseInt(element[0].quantity)
        , element[0].quantity
      ]).subscribe(value => {
        console.log(value)
      })
    });


    this.service.forsale(
      {
        "quantity": soluongsanpham,
        "total_money": parseInt(this.tienhoadon),
        "sale_date": date,
        "products": datasale
      }
    ).subscribe(val => { })


    this.service.quanlythu([this.tienhoadon, date, transactionkey, this.hinhthucthanhtoan, this.vitri]).subscribe(val => { })
    console.log('data danhsachdonhang', date, this.tongtienthu, transactionkey, soluongsanpham, danhsachimei.substring(0, danhsachimei.length - 1), this.vitri, this.hinhthucthanhtoan, this.tienhoadon)
    this.service.taodanhsachdonhang([date, this.tongtienthu, transactionkey, soluongsanpham, danhsachimei.substring(0, danhsachimei.length - 1), this.vitri, this.hinhthucthanhtoan, this.tienhoadon]).subscribe(value => {
      console.log(value)
      alert("Mua Hàng Thành Công")
      if (this.vitri == "WAREHOUSE") {
        this.router.navigateByUrl('/pages/tables/quanlydanhsachdonhang')
      }
      if (this.vitri == "SHOP_VN") {
        this.router.navigateByUrl('/pages/tables/quanlydanhsachdonhangvn')
      }
      if (this.vitri == "SHOP_JP") {
        this.router.navigateByUrl('/pages/tables/quanlydanhsachdonhangjp')
      }
    })






  }

  changetienkhachdua(event) {

    this.tienkhachdua = '0'
    this.tienkhachdua = event.target.value
    this.tienthua = (parseFloat(this.tienkhachdua) - parseFloat(this.tienhoadon)).toString()
  }


  thaydoisoluong(event, id) {
    console.log(event.target.value, id)
    this.datas.forEach(data => {
      console.log('data.id', data[0].id)
      if (data[0].id == id) {
        data[0].quantity = event.target.value
        console.log('data.quantity', data[0].quantity)
      }
    }
    )
    console.log('this.datas', this.datas)

    this.tongtienban = 0
    this.tongtienthu
    this.datas.forEach(e => {
      this.tongtienban += parseInt(e[0].quantity) * parseInt(e[0].sotienban)
      this.tongtienthu += parseInt(e[0].quantity) * parseInt(e[0].price)
    });
    this.tienhoadon = this.tongtienban.toString()
  }

  nhapsotienban(event, id) {
    console.log(event.target.value, id)
    this.datas.forEach(data => {
      console.log('data.id', data[0].id)
      if (data[0].id == id) {
        data[0].sotienban = event.target.value
      }
      console.log('data.quantity', data[0].quantity)
    }

    )

    this.tongtienban = 0
    this.tongtienthu = 0
    this.datas.forEach(e => {
      this.tongtienban += (parseInt(e[0].quantity) * parseInt(e[0].sotienban))
      this.tongtienthu += (parseInt(e[0].quantity) * parseInt(e[0].price))
    });
    console.log('this.datas', this.datas)
    this.tienhoadon = this.tongtienban.toString()
  }
}
