import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { NetworkserviceService } from '../../../services/networkservice.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'ngx-quanlydanhsachdonhangnhat',
  templateUrl: './quanlydanhsachdonhangnhat.component.html',
  styleUrls: ['./quanlydanhsachdonhangnhat.component.scss']
})
export class QuanlydanhsachdonhangnhatComponent implements OnInit {

  fileName = 'DanhSachSanPham.xlsx';
  source: LocalDataSource = new LocalDataSource();
  data=[]
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
  constructor(private service: NetworkserviceService, private router: Router) {
this.role = localStorage.getItem('role')
    this.service.getdanhsachdonhangquanlymobilejp().subscribe(value => {
this.data =value.filter(v=>v.hinhthucthanhtoan!="luutam" && v.hinhthucthanhtoan!="datcoc")
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

}