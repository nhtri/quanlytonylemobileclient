import { Component, OnInit } from '@angular/core';
import { NetworkserviceService } from '../../../services/networkservice.service';
import * as XLSX from 'xlsx';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./thongke.component.scss']
})
export class ThongkeComponent implements OnInit {

  date1 = ""
  date2 = ""
  daterange
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
  datatemp = []
  tongloinhuan = 0
  tongloinhuantheothang = 0

  constructor(private service: NetworkserviceService, private router: Router) {


    this.tongloinhuan = 0
    this.service.getdanhsachdonhangquanlymobile().subscribe(value => {
      this.data = value
      this.datatemp = value
      this.data.forEach(element => {
        console.log("element.giatien", element.giatien)
        console.log("element.giatienban", element.giatienban)
        this.tongloinhuan += (parseInt(element.giatienban) - parseInt(element.giatien))
        this.tongloinhuantheothang += (parseInt(element.giatienban) - parseInt(element.giatien))
        console.log("this.tongloinhuan", this.tongloinhuan)
      });
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
      console.log('this.datatemp', this.datatemp)
      this.datatemp.forEach(element => {
        console.log('element.ngaytao', element.ngayban)
        if (this.date1 == element.ngayban) {
          this.data.push(element)
          console.log('this.data', this.data)
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
        console.log('element.ngaytao', element1.ngayban)
        this.daterange.forEach(element2 => {
          if (element2 == element1.ngayban) {
            this.data.push(element1)
          }
        });

      });}
      console.log(this.daterange)
      this.tongloinhuantheothang = 0
      this.data.forEach(element => {
        this.tongloinhuantheothang += (parseInt(element.giatienban) - parseInt(element.giatien))
        console.log("this.tongloinhuan", this.tongloinhuan)
      });
    
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
      console.log('element.ngaytao', element1.ngayban)
      this.daterange.forEach(element2 => {
        if (element2 == element1.ngayban) {
          this.data.push(element1)
        }
      });

    });
    console.log(this.daterange)

    this.tongloinhuantheothang = 0
    this.data.forEach(element => {
      this.tongloinhuantheothang += (parseInt(element.giatienban) - parseInt(element.giatien))
      console.log("this.tongloinhuan", this.tongloinhuan)
    });
  }


  selecvitri(event) {
    if (event.target.value == "kho") {
      this.tongloinhuan = 0
      this.service.getdanhsachdonhangquanlymobile().subscribe(value => {
        this.data = value
        this.datatemp = value
        this.data.forEach(element => {
          console.log("element.giatien", element.giatien)
          console.log("element.giatienban", element.giatienban)
          this.tongloinhuan += (parseInt(element.giatienban) - parseInt(element.giatien))
          console.log("this.tongloinhuan", this.tongloinhuan)
        });
      });

    }


    if (event.target.value == "cuahangvietnam") {
      this.tongloinhuan = 0

      this.service.getdanhsachdonhangquanlymobilevn().subscribe(value => {
        this.data = value
        this.datatemp = value
        this.data.forEach(element => {
          console.log("element.giatien", element.giatien)
          console.log("element.giatienban", element.giatienban)
          this.tongloinhuan += (parseInt(element.giatienban) - parseInt(element.giatien))
          console.log("this.tongloinhuan", this.tongloinhuan)
        });
      });

    }
    if (event.target.value == "cuahangnhat") {
      this.tongloinhuan = 0
      this.service.getdanhsachdonhangquanlymobilejp().subscribe(value => {
        this.data = value
        this.datatemp = value
        this.data.forEach(element => {
          console.log("element.giatien", element.giatien)
          console.log("element.giatienban", element.giatienban)
          this.tongloinhuan += (parseInt(element.giatienban) - parseInt(element.giatien))
          console.log("this.tongloinhuan", this.tongloinhuan)
        });
      });

    }
  }



}