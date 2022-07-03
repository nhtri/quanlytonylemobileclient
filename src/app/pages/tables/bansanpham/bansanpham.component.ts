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
  tienthua = 0
  tienhoadon = '0'
  hinhthucthanhtoan = ""
  tongtienthu = 0
  imeiduocchon = []
  giatiensanpham = []
  tongtienban = 0
  role = ''
  vitri = ''
  tongsosanpham = 0
  tienmat = 0
  daikibi = 0
  chuyenkhoan = 0
  tienconlai = 0
  hoantattoggle = true
  danhsachkhachhang
  thongtinkhachhang = "khachle"
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
                element["sotienban"] = element.estimated_price
                this.datas.push(element)
                this.tienmat = element.estimated_price
              }
            });

          })
        });
        console.log('this.datas', this.datas)
        if (this.position == "WAREHOUSE") {
          this.service.getkhachhang().subscribe(value => {
            this.danhsachkhachhang = value
            console.log("this.danhsachkhachhang", this.danhsachkhachhang)
          })
        }
        if (this.position == "SHOP_JP") {
          this.service.getkhachhangnhat().subscribe(value => {
            this.danhsachkhachhang = value
            console.log("this.danhsachkhachhang", this.danhsachkhachhang)
          })
        }
        if (this.position == "SHOP_VN") {
          this.service.getkhachhangvn().subscribe(value => {
            this.danhsachkhachhang = value
            console.log("this.danhsachkhachhang", this.danhsachkhachhang)
          })
        }

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
    console.log('delete', value, this.datas)
    this.datas = this.datas.filter((obj) => {
      return obj.id == value;
    });
    console.log('this.datas', this.datas)
    // this.datas = []
    // console.log(this.id)
    // this.id = this.id.filter(val => val != value)
    // console.log('this.id.filter(val=>val!==value)', this.id)
    // this.id.forEach(element => {
    //   this.service.getsanpham([element]).subscribe(value => {
    //     // this.datas.push(value.map(data => ({ ...data, quantitytemp: data.quantity, quantity: 1 })))


    //     value.forEach(element => {
    //       if (element.position == this.position) {
    //         // this.datas.push(element.map(data => ({ ...data, quantitytemp: data.quantity, quantity: 1 })))
    //         element["quantitytemp"] = element.quantity
    //         element["quantity"] = 1
    //         this.datas.push(element)

    //       }
    //     });
    //   })
    // });
    // this.tongtienthu = 0
    // this.tongtienban = 0
    // this.tienmat = 0
    // this.tienhoadon = this.tongtienban.toString()
    // this.tienkhachdua = "0"
    // this.tienthua = 0
    // this.hinhthucthanhtoan = "default"
  }




  changehinhthucthanhtoan(event) {
    this.tongtienthu = 0
    this.tongtienban = 0
    this.tienmat = 0
    console.log("this.datas", this.datas)
    this.datas.forEach(e => {
      this.tongtienban += parseInt(e.quantity) * parseInt(e.sotienban)
      this.tongtienthu += parseInt(e.quantity) * parseInt(e.price)
    });
    this.tienhoadon = this.tongtienban.toString()
    this.hinhthucthanhtoan = event.target.value
    console.log(this.hinhthucthanhtoan)
    console.log("tongtienban", this.tongtienban)
    this.tienmat = this.tongtienban
  }

  hoantat() {
    this.hoantattoggle = false
    console.log("this.hoantattoggle", this.hoantattoggle)
    if (this.hinhthucthanhtoan == 'default' || this.hinhthucthanhtoan == "") {
      alert("Xin vui lòng chọn hình thức thanh toán !!!")
    }
    else {
      alert("Đang thực hiện quá trình thanh toán !!!")
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
        if (element.sotienban != null) {
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
            , element.quantity, element.id, element.thoihanbaohanh, this.thongtinkhachhang
          ]).subscribe(value => {
            console.log(value)
          })
        }

      });


      this.service.forsale(
        {
          "quantity": soluongsanpham,
          "total_money": parseInt(this.tienhoadon),
          "sale_date": date,
          "products": datasale
        }
      ).subscribe(val => { })

      if (this.tienmat != 0) {
        this.service.quanlythu([this.tienmat, date, transactionkey, "tienmat", this.vitri]).subscribe(val => { })
      }
      if (this.daikibi != 0) {
        this.service.quanlythu([this.daikibi, date, transactionkey, "daibiki", this.vitri]).subscribe(val => { })
      }
      if (this.chuyenkhoan != 0) {
        this.service.quanlythu([this.chuyenkhoan, date, transactionkey, "chuyenkhoan", this.vitri]).subscribe(val => { })
      }
      // this.service.quanlythu([this.tienhoadon, date, transactionkey, this.hinhthucthanhtoan, this.vitri]).subscribe(val => { })
      console.log('data danhsachdonhang', date, this.tongtienthu, transactionkey, soluongsanpham, danhsachimei.substring(0, danhsachimei.length - 1), this.vitri, this.hinhthucthanhtoan, this.tienhoadon)
      this.service.taodanhsachdonhang([date, this.tongtienthu, transactionkey, soluongsanpham, danhsachimei.substring(0, danhsachimei.length - 1), this.vitri, this.hinhthucthanhtoan, this.tienhoadon, this.tienmat, this.daikibi, this.chuyenkhoan, this.hinhthucthanhtoan,this.thongtinkhachhang]).subscribe(value => {
        console.log(value)
        alert("Mua Hàng Thành Công")
        if (this.vitri == "WAREHOUSE" && this.hinhthucthanhtoan == 'trahet') {
          this.router.navigateByUrl('/pages/tables/quanlydanhsachdonhang')
          console.log(this.vitri)
        }
        if (this.vitri == "SHOP_VN" && this.hinhthucthanhtoan == 'trahet') {
          this.router.navigateByUrl('/pages/tables/quanlydanhsachdonhangvn')
          console.log(this.vitri)
        }
        if (this.vitri == "SHOP_JP" && this.hinhthucthanhtoan == 'trahet') {
          this.router.navigateByUrl('/pages/tables/quanlydanhsachdonhangjp')
          console.log(this.vitri)
        }

        if (this.vitri == "WAREHOUSE" && this.hinhthucthanhtoan == 'datcoc') {
          this.router.navigateByUrl('/pages/tables/quanlydanhsachdonhangdatcoc')
          console.log(this.vitri)
        }
        if (this.vitri == "SHOP_VN" && this.hinhthucthanhtoan == 'datcoc') {
          this.router.navigateByUrl('/pages/tables/quanlydanhsachdonhangdatcocvn')
          console.log(this.vitri)
        }
        if (this.vitri == "SHOP_JP" && this.hinhthucthanhtoan == 'datcoc') {
          this.router.navigateByUrl('/pages/tables/quanlydanhsachdonhangdatcocjp')
          console.log(this.vitri)
        }
      })
    }







  }

  changetienkhachdua(event) {

    // this.tienkhachdua = '0'
    // this.tienkhachdua = event.target.value
    // this.tienthua = (parseFloat(this.tienkhachdua) - parseFloat(this.tienhoadon)).toString()
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
    this.tienmat = this.tongtienban
    this.tienconlai = this.tongtienban - this.chuyenkhoan - this.tienmat - this.daikibi
  }

  nhapsotienban(event, id) {
    console.log(event.target.value, id)
    this.datas.forEach(data => {
      console.log('data.id', data.id)
      if (data.id == id) {
        data.sotienban = event.target.value
      }
      console.log('data.quantity', data.quantity)
      console.log('data', data)
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
    this.tienmat = this.tongtienban
  }


  changehinhthucbaohanh(event, id) {
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



  selecthinhthucthanhtoan(event) {
    this.hinhthucthanhtoan = event.target.value
    console.log('this.hinhthucthanhtoan', this.hinhthucthanhtoan)


    this.tongtienthu = 0
    this.tongtienban = 0
    this.tienmat = 0
    this.datas.forEach(e => {
      this.tongtienban += parseInt(e.quantity) * parseInt(e.sotienban)
      this.tongtienthu += parseInt(e.quantity) * parseInt(e.price)
    });
    this.tienhoadon = this.tongtienban.toString()
    this.hinhthucthanhtoan = event.target.value
    console.log(this.hinhthucthanhtoan)
    console.log("tongtienban", this.tongtienban)
    this.tienmat = this.tongtienban
  }

  thaydoisotienthanhtoan() {
    console.log("this.tienmat",this.tienmat)
    this.tienconlai = this.tongtienban - this.tienmat - this.daikibi - this.chuyenkhoan
    
    console.log("this.tienconlai",this.tienconlai)
    this.tienthua = this.tongtienban - this.tienmat - this.daikibi - this.chuyenkhoan
    console.log("this.tienthua",this.tienthua)
  }

  luutam() {
    if (this.hinhthucthanhtoan == 'default' || this.hinhthucthanhtoan == "") {
      alert("Xin vui lòng chọn hình thức thanh toán !!!")
    }
    else {
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
          , element.quantity, element.id, element.thoihanbaohanh, this.thongtinkhachhang
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

      if (this.tienmat != 0) {
        this.service.quanlythu([this.tienmat, date, transactionkey, "tienmat", this.vitri]).subscribe(val => { })
      }
      if (this.daikibi != 0) {
        this.service.quanlythu([this.daikibi, date, transactionkey, "daibiki", this.vitri]).subscribe(val => { })
      }
      if (this.chuyenkhoan != 0) {
        this.service.quanlythu([this.chuyenkhoan, date, transactionkey, "chuyenkhoan", this.vitri]).subscribe(val => { })
      }

      // this.service.quanlythu([this.tienhoadon, date, transactionkey, this.hinhthucthanhtoan, this.vitri]).subscribe(val => { })
      console.log('data danhsachdonhang', date, this.tongtienthu, transactionkey, soluongsanpham, danhsachimei.substring(0, danhsachimei.length - 1), this.vitri, this.hinhthucthanhtoan, this.tienhoadon)
      this.service.taodanhsachdonhang([date, this.tongtienthu, transactionkey, soluongsanpham, danhsachimei.substring(0, danhsachimei.length - 1), this.vitri, this.hinhthucthanhtoan, this.tienhoadon, this.tienmat, this.daikibi, this.chuyenkhoan, "luutam",this.thongtinkhachhang]).subscribe(value => {
        console.log(value)
        alert("Mua Hàng Thành Công")
        if (this.vitri == "WAREHOUSE") {
          this.router.navigateByUrl('/pages/tables/quanlydanhsachdonhangcho')
          console.log(this.vitri)
        }
        if (this.vitri == "SHOP_VN") {
          this.router.navigateByUrl('/pages/tables/quanlydanhsachdonhangchovn')
          console.log(this.vitri)
        }
        if (this.vitri == "SHOP_JP") {
          this.router.navigateByUrl('/pages/tables/quanlydanhsachdonhangchojp')
          console.log(this.vitri)
        }
      })
    }
  }

  seleckhachhang(event){
this.thongtinkhachhang = event.target.value
    console.log(event.target.value)
  }

  hoantatvaxuathoadon(){}
}
