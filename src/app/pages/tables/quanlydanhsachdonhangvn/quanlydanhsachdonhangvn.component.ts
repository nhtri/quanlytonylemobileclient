import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { NetworkserviceService } from '../../../services/networkservice.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'ngx-quanlydanhsachdonhangvn',
  templateUrl: './quanlydanhsachdonhangvn.component.html',
  styleUrls: ['./quanlydanhsachdonhangvn.component.scss']
})
export class QuanlydanhsachdonhangvnComponent implements OnInit {

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


  datanhomsanphamtaomoi = ""
  datatensanphamtaomoi = ""
  datadungluongtaomoi = ""
  dataloaisanphamtaomoi = ""
  dataphienbantaomoi = ""
  dataimeitaomoi = ""
  role

  date1 = ""
  date2 = ""
  daterange = []
  datatemp = []


  constructor(private service: NetworkserviceService, private router: Router) {
    this.role = localStorage.getItem('role')
    this.service.getdanhsachdonhangquanlymobilevn().subscribe(value => {
      this.data = value.filter(v => v.trangthaidonhang != "luutam" && v.trangthaidonhang != "datcoc")
    });



  }



  ngOnInit(): void {
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


  taomoi() {
    this.taomoisanpham = true
  }
  canceltaomoi() {
    this.taomoisanpham = false
  }

  selecttaomoinhomsanpham(value) {
    this.datanhomsanphamtaomoi = value
    console.log('selecttaomoinhomsanpham', value)
  }
  selecttaomoitensanpham(value) {
    this.datatensanphamtaomoi = value
  }
  selecttaomoidungluong(value) {
    this.datadungluongtaomoi = value
  }
  selecttaomoiloaisanpham(value) {
    this.dataloaisanphamtaomoi = value
  }
  selecttaomoiphienban(value) {
    this.dataphienbantaomoi = value
  }
  taosanphammoi() {
    this.service.sanphamtonkho([
      this.datanhomsanphamtaomoi,
      this.datatensanphamtaomoi,
      this.datadungluongtaomoi,
      this.dataloaisanphamtaomoi,
      this.dataphienbantaomoi,
      this.dataimeitaomoi
    ]).subscribe(data => {
      this.taomoisanpham = false
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


  change1() {
    if (this.date2 == "") {
      this.data = []
      console.log(this.date1, this.date2)
      this.datatemp.forEach(element => {
        console.log('element.ngayban', element.ngayban)
        if (this.date1 == element.ngayban) {
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
    this.data = []
    this.daterange = []
    console.log(this.date1, this.date2)
    var currentDate = new Date(this.date1);
    while (currentDate <= new Date(this.date2)) {
      this.daterange.push(currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1).toString().padStart(2, '0') + '-' + currentDate.getDate().toString().padStart(2, '0'));
      currentDate.setDate(currentDate.getDate() + 1)
    }

    this.datatemp.forEach(element1 => {
      console.log('element.ngayban', element1.ngayban)
      this.daterange.forEach(element2 => {
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
}