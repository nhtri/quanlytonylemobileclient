import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { NetworkserviceService } from '../../../services/networkservice.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'ngx-danhsachsanphamvn',
  templateUrl: './danhsachsanphamvn.component.html',
  styleUrls: ['./danhsachsanphamvn.component.scss']
})
export class DanhsachsanphamvnComponent implements OnInit {
  position = 'SHOP_VN'
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
  role



  dataselectnhomsanpham = ""
  dataselecttensanpham = ""
  dataselectdungluong = ""
  dataselectloaisanpham = ""
  dataselectphienban = ""

  datafilter = []


  tensp = ""
  imeisp = ""
  mausacsp = ""
  tinhtrangsp = ""
  nhomsp = ""

  constructor(private service: NetworkserviceService, private router: Router) {

   


    this.service.getsanphamtonkhovn().subscribe(val => {
      this.source.load(val);
      this.data =val
      val.forEach(element => {
        // element.imei = element.imei.replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",")
        // this.data.push(element)
        if (element.nhomsanpham != '' && element.nhomsanpham != null && !this.datanhomsanpham.some(val => val.value == element.nhomsanpham)) {
          this.datanhomsanpham.push({ "value": element.nhomsanpham, "title": element.nhomsanpham })
          // this.datanhomsanpham = [...new Set(this.datanhomsanpham)];
        }

        if (element.name != '' && element.name != null && !this.datatensanpham.some(val => val.value == element.name)) {
          this.datatensanpham.push({ "value": element.name, "title": element.name })
           this.datatensanpham = [...new Set(this.datatensanpham)];
        }

        if (element.dungluong != '' && element.dungluong != null && !this.datadungluong.some(val => val.value == element.dungluong)) {
          this.datadungluong.push({ "value": element.dungluong, "title": element.dungluong })
          // this.datadungluong = [...new Set(this.datadungluong)];
        }

        if (element.loaisanpham != '' && element.loaisanpham != null && !this.dataloaisanpham.some(val => val.value == element.loaisanpham)) {
          this.dataloaisanpham.push({ "value": element.loaisanpham, "title": element.loaisanpham })
          // this.dataloaisanpham = [...new Set(this.dataloaisanpham)];
        }

        if (element.phienban != '' && element.phienban != null && !this.dataphienban.some(val => val.value == element.phienban)) {
          this.dataphienban.push({ "value": element.phienban, "title": element.phienban })
          // this.dataphienban = [...new Set(this.dataphienban)];
        }

      });
      this.datafilter = this.data
    });

  

  }



  ngOnInit(): void {
    this.role = localStorage.getItem('role')
    if (this.role != 'cuahangvietnam' && this.role!='admin') {
      this.router.navigateByUrl('/pages/tables/login')
    }

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

          this.service.getsanphamtonkhovn().subscribe(val => {
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


  taomoi() {
    this.taomoisanpham = true
  }
  canceltaomoi() {
    this.taomoisanpham = false
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
      this.data = this.data.filter(val => val.name == this.dataselecttensanpham)
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

  filterdanhsachsanpham() {
    console.log(this.data)
    this.data = []
    if (this.tensp != "") {
      this.data = this.datafilter.filter(data => data.name.includes(this.tensp))
    }
    if (this.nhomsp != "") {
      this.data = this.datafilter.filter(data => data.group_name.includes(this.nhomsp))
    }
    if (this.imeisp != "") {
      this.data = this.datafilter.filter(data => data.imei.includes(this.imeisp))
    }
    if (this.mausacsp != "") {
      this.data = this.datafilter.filter(data => data.color.includes(this.mausacsp))
    }
    if (this.tinhtrangsp != "") {
      this.data = this.datafilter.filter(data => data.status.includes(this.tinhtrangsp))
    }
    if(this.tensp==""&&this.imeisp==""&&this.mausacsp==""&&this.tinhtrangsp==""&&this.nhomsp == ""){
      this.data = this.datafilter
    }
  }
}