import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { NetworkserviceService } from '../../../services/networkservice.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'ngx-quanlydanhsachsanphamdaban',
  templateUrl: './quanlydanhsachsanphamdaban.component.html',
  styleUrls: ['./quanlydanhsachsanphamdaban.component.scss'],

})
export class QuanlydanhsachsanphamdabanComponent implements OnInit {
  fileName = 'DanhSachSanPham.xlsx';
  source: LocalDataSource = new LocalDataSource();
  data = []
  datadungluong = []
  datanhomsanpham = []
  datatensanpham = []
  datamau = []
  dataloaisanpham = []
  dataphienban = []
  danhsachidsanpham = []
  taomoisanpham = false
  date1 = ""
  date2 = ""
  daterange = []


  datanhomsanphamtaomoi = ""
  datatensanphamtaomoi = ""
  datadungluongtaomoi = ""
  dataloaisanphamtaomoi = ""
  dataphienbantaomoi = ""
  dataimeitaomoi = ""


  dataselectnhomsanpham = ""
  dataselecttensanpham = ""
  dataselectdungluong = ""
  dataselectloaisanpham = ""
  dataselectphienban = ""

  datafilter = []

  dataorigin = []
  role = ''

  nhomsp = ""
  tensp = ""
  imeisp = ""
  constructor(private service: NetworkserviceService, private router: Router) {

    this.service.getdanhsachsanphamdabanquanlymobile200().subscribe(value => {
      this.data = value.filter(x => x.trangthaidonhang == 'trahet')

      this.datafilter = this.data
      this.dataorigin = this.data
    });


    this.service.getdanhsachsanphamdabanquanlymobile().subscribe(value => {
      this.data = value.filter(x => x.trangthaidonhang == 'trahet')

      this.datafilter = this.data
      this.dataorigin = this.data
    });



  }



  ngOnInit(): void {
    this.role = localStorage.getItem('role')
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

  selectLoaiMay(value) { }

  delete(value) {
    console.log(value)
    if (window.confirm('Bạn có chắc muốn xóa không ????')) {
      this.service.deletesanphamtonkho(
        [
          value
        ]
      )
        .subscribe(data => {

          this.service.getsanphamtonkhokhohang().subscribe(val => {
            // this.source.load(val);
            this.data = val
          });
          console.log("POST Request is successful ", data);
        },
          error => {
            console.log("Error", error);

          })
    }
  }

  edit(value) {
    this.router.navigate(["/pages/tables/sanpham", value]);
  }

  select(value) {
    if (this.danhsachidsanpham.length == 0) {
      this.danhsachidsanpham.push(value)
    }
    else {
      if (this.danhsachidsanpham.includes(value)) {
        this.danhsachidsanpham = this.danhsachidsanpham.filter(item => item !== value);
      }
      else {
        this.danhsachidsanpham.push(value)
      }
    }
    console.log(this.danhsachidsanpham)
  }





  selectnhomsanpham(event) {
    this.dataselectnhomsanpham = event.target.value
    this.data = this.datafilter
    if (this.dataselectnhomsanpham != '' && this.dataselectnhomsanpham != 'default') {
      this.data = this.data.filter(val => val.nhomsanpham == this.dataselectnhomsanpham)
    }
    if (this.dataselecttensanpham != '' && this.dataselecttensanpham != 'default') {
      this.data = this.data.filter(val => val.tensanpham == this.dataselecttensanpham)
    }
    if (this.dataselectdungluong != '' && this.dataselectdungluong != 'default') {
      this.data = this.data.filter(val => val.dungluong == this.dataselectdungluong)
    }
    if (this.dataselectloaisanpham != '' && this.dataselectloaisanpham != 'default') {
      this.data = this.data.filter(val => val.loaisanpham == this.dataselectloaisanpham)
    }
    if (this.dataselectphienban != '' && this.dataselectphienban != 'default') {
      this.data = this.data.filter(val => val.phienban == this.dataselectphienban)
    }
  }
  selecttensanpham(event) {
    this.dataselecttensanpham = event.target.value
    this.data = this.datafilter
    if (this.dataselectnhomsanpham != '' && this.dataselectnhomsanpham != 'default') {
      this.data = this.data.filter(val => val.nhomsanpham == this.dataselectnhomsanpham)
    }
    if (this.dataselecttensanpham != '' && this.dataselecttensanpham != 'default') {
      this.data = this.data.filter(val => val.tensanpham == this.dataselecttensanpham)
    }
    if (this.dataselectdungluong != '' && this.dataselectdungluong != 'default') {
      this.data = this.data.filter(val => val.dungluong == this.dataselectdungluong)
    }
    if (this.dataselectloaisanpham != '' && this.dataselectloaisanpham != 'default') {
      this.data = this.data.filter(val => val.loaisanpham == this.dataselectloaisanpham)
    }
    if (this.dataselectphienban != '' && this.dataselectphienban != 'default') {
      this.data = this.data.filter(val => val.phienban == this.dataselectphienban)
    }
  }
  selectdungluong(event) {
    this.dataselectdungluong = event.target.value
    this.data = this.datafilter
    if (this.dataselectnhomsanpham != '' && this.dataselectnhomsanpham != 'default') {
      this.data = this.data.filter(val => val.nhomsanpham == this.dataselectnhomsanpham)
    }
    if (this.dataselecttensanpham != '' && this.dataselecttensanpham != 'default') {
      this.data = this.data.filter(val => val.tensanpham == this.dataselecttensanpham)
    }
    if (this.dataselectdungluong != '' && this.dataselectdungluong != 'default') {
      this.data = this.data.filter(val => val.dungluong == this.dataselectdungluong)
    }
    if (this.dataselectloaisanpham != '' && this.dataselectloaisanpham != 'default') {
      this.data = this.data.filter(val => val.loaisanpham == this.dataselectloaisanpham)
    }
    if (this.dataselectphienban != '' && this.dataselectphienban != 'default') {
      this.data = this.data.filter(val => val.phienban == this.dataselectphienban)
    }
  }
  selectloaisanpham(event) {
    this.dataselectloaisanpham = event.target.value
    this.data = this.datafilter
    if (this.dataselectnhomsanpham != '' && this.dataselectnhomsanpham != 'default') {
      this.data = this.data.filter(val => val.nhomsanpham == this.dataselectnhomsanpham)
    }
    if (this.dataselecttensanpham != '' && this.dataselecttensanpham != 'default') {
      this.data = this.data.filter(val => val.tensanpham == this.dataselecttensanpham)
    }
    if (this.dataselectdungluong != '' && this.dataselectdungluong != 'default') {
      this.data = this.data.filter(val => val.dungluong == this.dataselectdungluong)
    }
    if (this.dataselectloaisanpham != '' && this.dataselectloaisanpham != 'default') {
      this.data = this.data.filter(val => val.loaisanpham == this.dataselectloaisanpham)
    }
    if (this.dataselectphienban != '' && this.dataselectphienban != 'default') {
      this.data = this.data.filter(val => val.phienban == this.dataselectphienban)
    }
  }
  selectphienban(event) {
    this.dataselectphienban = event.target.value
    this.data = this.datafilter
    if (this.dataselectnhomsanpham != '' && this.dataselectnhomsanpham != 'default') {
      this.data = this.data.filter(val => val.nhomsanpham == this.dataselectnhomsanpham)
    }
    if (this.dataselecttensanpham != '' && this.dataselecttensanpham != 'default') {
      this.data = this.data.filter(val => val.tensanpham == this.dataselecttensanpham)
    }
    if (this.dataselectdungluong != '' && this.dataselectdungluong != 'default') {
      this.data = this.data.filter(val => val.dungluong == this.dataselectdungluong)
    }
    if (this.dataselectloaisanpham != '' && this.dataselectloaisanpham != 'default') {
      this.data = this.data.filter(val => val.loaisanpham == this.dataselectloaisanpham)
    }
    if (this.dataselectphienban != '' && this.dataselectphienban != 'default') {
      this.data = this.data.filter(val => val.phienban == this.dataselectphienban)
    }
  }


  change1() {

    this.data = this.datafilter
    if (this.dataselectnhomsanpham != '' && this.dataselectnhomsanpham != 'default') {
      this.data = this.data.filter(val => val.nhomsanpham == this.dataselectnhomsanpham)
    }
    if (this.dataselecttensanpham != '' && this.dataselecttensanpham != 'default') {
      this.data = this.data.filter(val => val.tensanpham == this.dataselecttensanpham)
    }
    if (this.dataselectdungluong != '' && this.dataselectdungluong != 'default') {
      this.data = this.data.filter(val => val.dungluong == this.dataselectdungluong)
    }
    if (this.dataselectloaisanpham != '' && this.dataselectloaisanpham != 'default') {
      this.data = this.data.filter(val => val.loaisanpham == this.dataselectloaisanpham)
    }
    if (this.dataselectphienban != '' && this.dataselectphienban != 'default') {
      this.data = this.data.filter(val => val.phienban == this.dataselectphienban)
    }
    let datatemp = this.data
    console.log(datatemp)
    if (this.date2 == "") {
      this.data = []
      console.log(this.date1, this.date2)
      datatemp.forEach(element => {
        console.log('element.ngayban', element.ngayban)
        if (this.date1 == element.ngayban) {
          this.data.push(element)
        }
      });
    }
    if (this.date2 != "") {
      this.data = []
      console.log(this.date1, this.date2)
      var currentDate = new Date(this.date1);
      while (currentDate <= new Date(this.date2)) {
        this.daterange.push(currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1).toString().padStart(2, '0') + '-' + currentDate.getDate().toString().padStart(2, '0'));
        currentDate.setDate(currentDate.getDate() + 1)
      }

      datatemp.forEach(element1 => {
        console.log('element.ngayban', element1.ngayban)
        this.daterange.forEach(element2 => {
          if (element2 == element1.ngayban) {
            this.data.push(element1)
          }
        });

      });
      console.log(this.daterange)
    }
  }
  change2() {

    this.data = this.datafilter
    if (this.dataselectnhomsanpham != '' && this.dataselectnhomsanpham != 'default') {
      this.data = this.data.filter(val => val.nhomsanpham == this.dataselectnhomsanpham)
    }
    if (this.dataselecttensanpham != '' && this.dataselecttensanpham != 'default') {
      this.data = this.data.filter(val => val.tensanpham == this.dataselecttensanpham)
    }
    if (this.dataselectdungluong != '' && this.dataselectdungluong != 'default') {
      this.data = this.data.filter(val => val.dungluong == this.dataselectdungluong)
    }
    if (this.dataselectloaisanpham != '' && this.dataselectloaisanpham != 'default') {
      this.data = this.data.filter(val => val.loaisanpham == this.dataselectloaisanpham)
    }
    if (this.dataselectphienban != '' && this.dataselectphienban != 'default') {
      this.data = this.data.filter(val => val.phienban == this.dataselectphienban)
    }
    let datatemp = this.data

    this.data = []
    console.log(this.date1, this.date2)
    var currentDate = new Date(this.date1);
    while (currentDate <= new Date(this.date2)) {
      this.daterange.push(currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1).toString().padStart(2, '0') + '-' + currentDate.getDate().toString().padStart(2, '0'));
      currentDate.setDate(currentDate.getDate() + 1)
    }
    console.log('datatemp', datatemp)
    console.log('daterange', this.daterange)
    datatemp.forEach(element1 => {
      this.daterange.forEach(element2 => {
        console.log('element2', element2)
        console.log('element1.ngayban', element1.ngayban)
        if (element2 == element1.ngayban) {
          this.data.push(element1)
        }
      });

    });
    console.log(this.daterange)
  }

  refresh() {
    window.location.reload()
  }

  filterdanhsachsanpham() {
    console.log(this.tensp, this.imeisp)
    console.log(this.data)
    console.log("this.datafilter", this.datafilter)
    this.data = []
    // if (this.nhomsp != "") {
    //   this.data = this.datafilter.filter(data => data.group_name.includes(this.nhomsp))
    // }
    if (this.tensp != "") {
      this.data = this.datafilter.filter(data => data.tensanpham != null && data.tensanpham.toLowerCase().includes(this.tensp.toLowerCase()))
    }
    if (this.imeisp != "") {
      this.data = this.datafilter.filter(data => data.imei != null && data.imei.toLowerCase().includes(this.imeisp.toLowerCase()))
    }
    if (this.tensp == "" && this.imeisp == "") {
      this.data = this.datafilter
    }
  }
}