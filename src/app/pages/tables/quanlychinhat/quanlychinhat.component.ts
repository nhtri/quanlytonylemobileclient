import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import * as XLSX from 'xlsx';
import { NetworkserviceService } from '../../../services/networkservice.service';

@Component({
  selector: 'ngx-quanlychinhat',
  templateUrl: './quanlychinhat.component.html',
  styleUrls: ['./quanlychinhat.component.scss']
})
export class QuanlychinhatComponent implements OnInit {

  data = []
  totalmoney = 0
  tienmat = 0
  daibiki = 0
  chuyenkhoan = 0
  hinhthuc = "default"

  constructor(private service: NetworkserviceService) {

    this.service.getquanlychijp().subscribe(val => {
      console.log(val)
      this.data = val
      this.datatemp = val
      val.forEach(element => {
        this.totalmoney += parseInt(element.sotien)

        if (element.hinhthucthanhtoan == 'tienmat') {
          this.tienmat += parseInt(element.sotien)
        }
        if (element.hinhthucthanhtoan == 'daibiki') {
          this.daibiki += parseInt(element.sotien)
        }
        if (element.hinhthucthanhtoan == 'chuyenkhoan') {
          this.chuyenkhoan += parseInt(element.sotien)
        }
      });
    });


  }

  fileName = "DanhSachChi"
  date = ""
  sotien = ""
  mucdich = ""

  id = ""

  date1 = ""
  date2 = ""
  daterange = []
  datatemp = []
  hinhthucthanhtoan = "tienmat"
  ngOnInit(): void {
    this.date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1).toString().padStart(2, '0') + '-' + new Date().getDate().toString().padStart(2, '0')

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
  hoantat() {
    console.log(this.sotien, this.mucdich, this.date)
    if (this.id == "") {
      this.service.quanlychi([this.sotien, this.date, this.mucdich, this.hinhthucthanhtoan, 'SHOP_JP']).subscribe(val => {
        console.log(val)
        alert("Tạo mới thành công")
        window.location.reload()
      });
    }
    if (this.id != "") {
      this.service.editquanlychi([this.sotien, this.date, this.mucdich, this.hinhthucthanhtoan, this.id]).subscribe(val => {
        console.log(val)
        alert("Chỉnh sửa thành công")
        window.location.reload()
      });
    }
  }
  edit(id, ngaytao, sotien, mucdich, hinhthuc) {
    this.date = ngaytao
    this.sotien = sotien
    this.mucdich = mucdich
    this.id = id
    this.hinhthuc = hinhthuc
  }
  delete(value) {
    if (window.confirm('Bạn có chắc muốn xóa không ????')) {
      this.service.deletequanlychi([value]).subscribe(val => {
        console.log(val)
        alert("Xoá thành công")
        // this.service.getquanlychi().subscribe(val => {
        //   console.log(val)
        //   this.data = val
        // });
        window.location.reload()
      });
    }
  }

  refresh() {
    window.location.reload()
  }

  change1() {
    this.tienmat = 0
    this.daibiki = 0
    this.chuyenkhoan = 0
    if (this.date2 == "") {
      this.data = []
      console.log(this.date1, this.date2)
      this.datatemp.forEach(element => {
        console.log('element.ngaytao', element.ngaytao)
        console.log('this.date1', this.date1)
        if (this.date1 == element.ngaytao) {
          this.data.push(element)
        }
      });
    }
    if (this.date2 != "") {
      this.data = []
      this.daterange = []
      console.log(this.date1, this.date2)
      var currentDate = new Date(this.date1);
      while (currentDate <= new Date(this.date2)) {
        this.daterange.push(currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1).toString().padStart(2, '0') + '-' + currentDate.getDate().toString().padStart(2, '0'));
        currentDate.setDate(currentDate.getDate() + 1)
      }

      this.datatemp.forEach(element1 => {
        console.log('element.ngaytao', element1.ngaytao)
        this.daterange.forEach(element2 => {
          if (element2 == element1.ngaytao) {
            this.data.push(element1)
          }
        });

      });
      console.log(this.daterange)
    }
    this.data.forEach(element => {
      if (element.hinhthucthanhtoan == 'tienmat') {
        this.tienmat += parseInt(element.sotien)
      }
      if (element.hinhthucthanhtoan == 'daibiki') {
        this.daibiki += parseInt(element.sotien)
      }
      if (element.hinhthucthanhtoan == 'chuyenkhoan') {
        this.chuyenkhoan += parseInt(element.sotien)
      }
    });
  }
  change2() {
    this.tienmat = 0
    this.daibiki = 0
    this.chuyenkhoan = 0
    this.data = []
    this.daterange = []
    console.log(this.date1, this.date2)
    var currentDate = new Date(this.date1);
    while (currentDate <= new Date(this.date2)) {
      this.daterange.push(currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1).toString().padStart(2, '0') + '-' + currentDate.getDate().toString().padStart(2, '0'));
      currentDate.setDate(currentDate.getDate() + 1)
    }

    this.datatemp.forEach(element1 => {
      console.log('element.ngaytao', element1.ngaytao)
      this.daterange.forEach(element2 => {
        if (element2 == element1.ngaytao) {
          this.data.push(element1)
        }
      });

    });

    this.data.forEach(element => {
      if (element.hinhthucthanhtoan == 'tienmat') {
        this.tienmat += parseInt(element.sotien)
      }
      if (element.hinhthucthanhtoan == 'daibiki') {
        this.daibiki += parseInt(element.sotien)
      }
      if (element.hinhthucthanhtoan == 'chuyenkhoan') {
        this.chuyenkhoan += parseInt(element.sotien)
      }
    });
    console.log(this.daterange)
  }


  selecthinhthucthanhtoan(event) {
    this.hinhthucthanhtoan = event.target.value
  }
}
