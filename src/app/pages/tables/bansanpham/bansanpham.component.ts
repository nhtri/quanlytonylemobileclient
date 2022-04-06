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

  imeiduocchon = []
  giatiensanpham = []

  dropdownList=[
    { item_id: 1, item_text: 'Mumbai' },
    { item_id: 2, item_text: 'Bangaluru' },
    { item_id: 3, item_text: 'Pune' },
    { item_id: 4, item_text: 'Navsari' },
    { item_id: 5, item_text: 'New Delhi' }
  ];
  dropdownSettings:{}
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];


  constructor(private service: NetworkserviceService, private route: ActivatedRoute, private router: Router) {

    this.route.queryParams
      .subscribe(params => {
        console.log("params.id[0]", params.id[0])
        this.id = params.id[0].split(",")
        console.log('this.id', this.id)
        this.id.forEach(element => {
          this.service.getsanpham([element]).subscribe(value => {
            this.datas.push(value)
          })
        });
        console.log('this.datas', this.datas)
      })
  }

  ngOnInit(): void {

  }

  onClick() { }

  quayve() {
    this.router.navigateByUrl("/pages/tables/danhsachsanpham")
  }
  checkCheckBoxvalue(event, id, nhomsanpham, tensanpham, dungluong, loaisanpham, phienban) {
    console.log(event.target.value, id)
    if (this.imeiduocchon.length == 0) {
      this.imeiduocchon.push({
        "id": id,
        "nhomsanpham": nhomsanpham,
        "tensanpham": tensanpham,
        "dungluong": dungluong,
        "loaisanpham": loaisanpham,
        "phienban": phienban,
        "imei": event.target.value
      })
    }
    else {
      if (this.imeiduocchon.some(vendor => vendor['imei'] === event.target.value)) {
        this.imeiduocchon = this.imeiduocchon.filter(e => e.imei !== event.target.value)
      }
      else {
        this.imeiduocchon.push({
          "id": id,
          "nhomsanpham": nhomsanpham,
          "tensanpham": tensanpham,
          "dungluong": dungluong,
          "loaisanpham": loaisanpham,
          "phienban": phienban,
          "imei": event.target.value
        })
      }
    };

    console.log('this.imeiduocchon', this.imeiduocchon)
  }
  delete(value) {
    console.log('delete', value)

    this.datas = []
    console.log(this.id)
    this.id = this.id.filter(val => val != value)
    console.log('this.id.filter(val=>val!==value)', this.id.filter(val => val !== value))
    this.id.forEach(element => {
      this.service.getsanpham([element]).subscribe(value => {
        this.datas.push(value)
      })
    });
  }

  changesotien(event, id,) {

    console.log(event.target.value, id)
    if (this.giatiensanpham.length == 0) {
      this.giatiensanpham.push({ "id": id, "giatien": event.target.value })
    }
    else {
      if (this.giatiensanpham.some(vendor => vendor['id'] === id)) {
        this.giatiensanpham = this.giatiensanpham.filter(e => e.id !== id)
        this.giatiensanpham.push({ "id": id, "giatien": event.target.value })
      }
      else {
        this.giatiensanpham.push({ "id": id, "giatien": event.target.value })
      }
    };

    console.log('this.giatiensanpham', this.giatiensanpham)


  }


  changehinhthucthanhtoan(event) {
    this.tienhoadon = '0'
    this.hinhthucthanhtoan = event.target.value
    console.log(this.hinhthucthanhtoan)

    this.giatiensanpham.forEach(element => {
      console.log('element', element)
      console.log('(parseFloat(this.tienhoadon)', (parseFloat(this.tienhoadon)))
      console.log('parseFloat(element.giatien)', parseFloat(element.giatien))
      console.log('(this.imeiduocchon.filter(val => val.id != element.id)).length)', this.imeiduocchon.filter(val => val.id == element.id).length)

      if (this.imeiduocchon.filter(val => val.id == element.id).length > 0) {
        console.log('>0')
        this.tienhoadon = (parseFloat(this.tienhoadon) + (parseFloat(element.giatien) * (this.imeiduocchon.filter(val => val.id == element.id)).length)).toString()
      }
      // else {
      //   console.log('=0')
      //   this.tienhoadon = (parseFloat(this.tienhoadon) + (parseFloat(element.giatien) * (this.imeiduocchon.length))).toString()
      // }
    });
  }

  hoantat() {
    let transactionkey = Date.now().toString() + 'dh' + Math.floor(Math.random() * 100000000).toString()
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getDate().toString().padStart(2, '0');
    let danhsachimei = ""
    for (let i = 0; i < this.imeiduocchon.length; i++) {
      for (let j = 0; j < this.giatiensanpham.length; j++) {
        console.log("this.imeiduocchon[i]['id']", this.imeiduocchon[i]['id'])
        if (this.imeiduocchon[i].id == this.giatiensanpham[j].id) {
          this.imeiduocchon[i].giatien = this.giatiensanpham[j].giatien
        }
      }
    }
    this.imeiduocchon.forEach(element => {
      danhsachimei = (element.imei).toString() + "," + danhsachimei.toString()
    });
    console.log('this.imeiduocchon', this.imeiduocchon)
    this.imeiduocchon.forEach(element => {



      this.service.getsanpham([element.id]).subscribe(value => {
        let newimei = value[0].imei.replace(element.imei, "")
        this.service.updateimeisanphamtonkho([newimei, element.id]).subscribe(value => { })
      })



      this.service.danhsachsanphamdaban([element.nhomsanpham, element.tensanpham,
      element.dungluong,
      element.loaisanpham,
      element.phienban,
      element.imei,
        transactionkey,
      element.giatien,
        date,this.hinhthucthanhtoan]).subscribe(value => {
          console.log(value)
        })
    });

    this.service.quanlythu([this.tienhoadon, date, transactionkey]).subscribe(val => {})

    this.service.taodanhsachdonhang([date, this.tienhoadon, transactionkey, this.imeiduocchon.length, danhsachimei.substring(0, danhsachimei.length - 1)]).subscribe(value => {
      console.log(value)
      alert("Mua Hàng Thành Công")
      this.router.navigateByUrl('/pages/tables/quanlydanhsachdonhang')
    })
   


   


  }

  changetienkhachdua(event) {
    this.tienkhachdua = '0'
    this.tienkhachdua = event.target.value
    this.tienthua = (parseFloat(this.tienkhachdua) - parseFloat(this.tienhoadon)).toString()
  }
}
