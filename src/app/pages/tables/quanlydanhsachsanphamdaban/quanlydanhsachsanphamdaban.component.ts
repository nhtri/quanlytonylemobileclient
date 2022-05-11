import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { NetworkserviceService } from '../../../services/networkservice.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'ngx-quanlydanhsachsanphamdaban',
  templateUrl: './quanlydanhsachsanphamdaban.component.html',
  styleUrls: ['./quanlydanhsachsanphamdaban.component.scss']
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

  dataorigin =[]
  role=''

  nhomsp=""
  tensp=""
  imeisp=""
  constructor(private service: NetworkserviceService, private router: Router) {

    this.service.getdanhsachsanphamdabanquanlymobile().subscribe(value => {
      // this.source.load(val);
      value.forEach(element => {
        this.service.getdanhsachdonhangquanlymobiletransaction([element.transactionkey]).subscribe(val => {
          element.madonhang = val[0].madonhang
          this.data.push(element)
          console.log('this.data', this.data)

          if (element.nhomsanpham != '' && element.nhomsanpham != null && !this.datanhomsanpham.some(val => val.value == element.nhomsanpham)) {
            this.datanhomsanpham.push({ "value": element.nhomsanpham, "title": element.nhomsanpham })
            // this.datanhomsanpham = [...new Set(this.datanhomsanpham)];
          }

          if (element.tensanpham != '' && element.tensanpham != null && !this.datatensanpham.some(val => val.value == element.tensanpham)) {
            this.datatensanpham.push({ "value": element.tensanpham, "title": element.tensanpham })
            // this.datatensanpham = [...new Set(this.datatensanpham)];
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
      });
      this.datafilter = this.data
      this.dataorigin = this.data
    });

    // this.service.getnhomsanpham().subscribe(val => {
    //   let data = val.map(val => val.nhomsanpham)
    //   data.forEach(data => {
    //     this.datanhomsanpham.push({ "value": data, "title": data })
    //   });
    //   console.log(this.datanhomsanpham)
    //   // this.settings.columns.nhomsanpham.editor.config.list = this.datanhomsanpham
    //   // this.settings = Object.assign({}, this.settings);

    // })

    // this.service.gettensanpham().subscribe(val => {
    //   let data = val.map(val => val.tensanpham)
    //   data.forEach(data => {
    //     this.datatensanpham.push({ "value": data, "title": data })
    //   });
    //   // this.settings.columns.tensanpham.editor.config.list = this.datatensanpham
    //   // this.settings = Object.assign({}, this.settings);

    // })

    // this.service.getdungluong().subscribe(val => {
    //   let data = val.map(val => val.dungluong)
    //   data.forEach(data => {
    //     this.datadungluong.push({ "value": data, "title": data })
    //   });
    //   // this.settings.columns.dungluong.editor.config.list = this.datadungluong
    //   // this.settings = Object.assign({}, this.settings);

    // })

    // this.service.getmau().subscribe(val => {
    //   let data = val.map(val => val.mau)
    //   data.forEach(data => {
    //     this.datamau.push({ "value": data, "title": data })
    //   });
    //   // this.settings.columns.mau.editor.config.list = this.datamau
    //   // this.settings = Object.assign({}, this.settings);

    // })

    // this.service.getloaisanpham().subscribe(val => {
    //   let data = val.map(val => val.loaisanpham)
    //   data.forEach(data => {
    //     this.dataloaisanpham.push({ "value": data, "title": data })
    //   });
    //   // this.settings.columns.loaisanpham.editor.config.list = this.dataloaisanpham
    //   // this.settings = Object.assign({}, this.settings);

    // })

    // this.service.getphienban().subscribe(val => {
    //   let data = val.map(val => val.phienban)
    //   data.forEach(data => {
    //     this.dataphienban.push({ "value": data, "title": data })
    //   });
    //   // this.settings.columns.phienban.editor.config.list = this.dataphienban
    //   // this.settings = Object.assign({}, this.settings);

    // })

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
console.log('datatemp',datatemp)
console.log('daterange',this.daterange)
    datatemp.forEach(element1 => {
      this.daterange.forEach(element2 => {
        console.log('element2',element2)
        console.log('element1.ngayban',element1.ngayban)
        if (element2 == element1.ngayban) {
          this.data.push(element1)
        }
      });

    });
    console.log(this.daterange)
  }

  refresh(){
    window.location.reload()
  }

  filterdanhsachsanpham() {
    console.log(this.tensp,this.imeisp)
    console.log(this.data)
    console.log("this.datafilter",this.datafilter)
    this.data = []
    // if (this.nhomsp != "") {
    //   this.data = this.datafilter.filter(data => data.group_name.includes(this.nhomsp))
    // }
    if (this.tensp != "") {
      this.data = this.datafilter.filter(data => data.tensanpham.includes(this.tensp))
    }
    if (this.imeisp != "") {
      this.data = this.datafilter.filter(data => data.imei.includes(this.imeisp))
    }
    if(this.tensp==""&&this.imeisp==""){
      this.data = this.datafilter
    }
  }
}