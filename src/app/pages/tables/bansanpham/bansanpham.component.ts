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
  position
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
  tongsosanpham = 0
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
        if (params.position.length == 1) {
          this.position = params.position[0].split(",")
        }
        else {
          this.position = params.position.split(",")
        }
        console.log('this.id', this.id)
        console.log('this.position', this.position)
        this.id.forEach(element => {
          this.service.getsanpham([element]).subscribe(value => {
            console.log('value', value)
            value.forEach(element => {
              if (element.position == this.position) {
                // this.datas.push(element.map(data => ({ ...data, quantitytemp: data.quantity, quantity: 1 })))
                element["quantitytemp"] = element.quantity
                element["quantity"] = 1
                this.datas.push(element)

              }
            });

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
    console.log('this.id.filter(val=>val!==value)', this.id)
    this.id.forEach(element => {
      this.service.getsanpham([element]).subscribe(value => {
        // this.datas.push(value.map(data => ({ ...data, quantitytemp: data.quantity, quantity: 1 })))


        value.forEach(element => {
          if (element.position == this.position) {
            // this.datas.push(element.map(data => ({ ...data, quantitytemp: data.quantity, quantity: 1 })))
            element["quantitytemp"] = element.quantity
            element["quantity"] = 1
            this.datas.push(element)

          }
        });
      })
    });
    this.tongtienthu = 0
    this.tongtienban = 0
    this.tienhoadon = this.tongtienban.toString()
    this.tienkhachdua="0"
    this.tienthua="0"
    this.hinhthucthanhtoan = "default"
  }

  changesotien(event, id,) {



  }


  changehinhthucthanhtoan(event) {
    this.tongtienthu = 0
    this.tongtienban = 0
    this.datas.forEach(e => {
      this.tongtienban += parseInt(e.quantity) * parseInt(e.sotienban)
      this.tongtienthu += parseInt(e.quantity) * parseInt(e.price)
    });
    this.tienhoadon = this.tongtienban.toString()
    this.hinhthucthanhtoan = event.target.value
    console.log(this.hinhthucthanhtoan)

  }

  hoantat() {
    if (this.hinhthucthanhtoan == 'default' || this.hinhthucthanhtoan == "") {
      alert("Xin vui lòng chọn hình thức thanh toán !!!")
    }
    else{
      console.log('this.datas', this.datas)
      let transactionkey = Date.now().toString() + 'dh' + Math.floor(Math.random() * 100000000).toString()
      let today = new Date();
      let date = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getDate().toString().padStart(2, '0');
      let danhsachimei = ""
      let soluongsanpham = 0
      this.datas.forEach(element => {
        danhsachimei += element.imei + ','
        soluongsanpham += parseInt(element.quantity)
        this.vitri = element.position
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
        datasale.push({ "id": element.id, "quantity": element.quantity, "price": parseInt(element.sotienban), "position": this.vitri })
        this.service.danhsachsanphamdaban(['', element.name,
          '',
          '',
          '',
          element.imei,
          transactionkey,
          parseInt(element.price) * parseInt(element.quantity),
          date, this.hinhthucthanhtoan,
          this.vitri, parseInt(element.sotienban) * parseInt(element.quantity)
          , element.quantity, element.id,element.thoihanbaohanh
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
          console.log(this.vitri)
        }
        if (this.vitri == "SHOP_VN") {
          this.router.navigateByUrl('/pages/tables/quanlydanhsachdonhangvn')
          console.log(this.vitri)
        }
        if (this.vitri == "SHOP_JP") {
          this.router.navigateByUrl('/pages/tables/quanlydanhsachdonhangjp')
          console.log(this.vitri)
        }
      })
    }
   






  }

  changetienkhachdua(event) {

    this.tienkhachdua = '0'
    this.tienkhachdua = event.target.value
    this.tienthua = (parseFloat(this.tienkhachdua) - parseFloat(this.tienhoadon)).toString()
  }


  thaydoisoluong(event, id) {
    console.log(event.target.value, id)
    this.datas.forEach(data => {
      console.log('data.id', data.id)
      if (data.id == id) {
        data.quantity = event.target.value
        console.log('data.quantity', data.quantity)
      }
    }
    )
    console.log('this.datas', this.datas)

    this.tongtienban = 0
    this.tongtienthu
    this.datas.forEach(e => {
      this.tongtienban += parseInt(e.quantity) * parseInt(e.sotienban)
      this.tongtienthu += parseInt(e.quantity) * parseInt(e.price)
    });
    this.tienhoadon = this.tongtienban.toString()
  }

  nhapsotienban(event, id) {
    console.log(event.target.value, id)
    this.datas.forEach(data => {
      console.log('data.id', data.id)
      if (data.id == id) {
        data.sotienban = event.target.value
      }
      console.log('data.quantity', data.quantity)
    }

    )

    this.tongtienban = 0
    this.tongtienthu = 0
    this.datas.forEach(e => {
      this.tongtienban += (parseInt(e.quantity) * parseInt(e.sotienban))
      this.tongtienthu += (parseInt(e.quantity) * parseInt(e.price))
    });
    console.log('this.datas', this.datas)
    this.tienhoadon = this.tongtienban.toString()
  }


  changehinhthucbaohanh(event, id){
    console.log(event.target.value, id)
    this.datas.forEach(data => {
      console.log('data.id', data.id)
      if (data.id == id) {
        data.thoihanbaohanh = event.target.value
      }
    }
    )
    console.log('this.datas', this.datas)
  }
}
