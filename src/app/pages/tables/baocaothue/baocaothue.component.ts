import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { NetworkserviceService } from '../../../services/networkservice.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'ngx-baocaothue',
  templateUrl: './baocaothue.component.html',
  styleUrls: ['./baocaothue.component.scss']
})
export class BaocaothueComponent implements OnInit {

  fileName = 'BaoCaoThue.xlsx';
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

  date = []

  dataconvert=[]
  dataconverttemp=[]
  moneytemp=0
  tensanphamtemp=''
  emeitemp=''
  constructor(private service: NetworkserviceService, private router: Router) {

    this.service.getdanhsachsanphamdabanquanlymobile().subscribe(value => {
      value.forEach(element => {
        if (!this.date.includes(element.ngayban)) { this.date.push(element.ngayban) }
      });
      this.data = value

      this.datafilter = this.data
      this.dataorigin = this.data

      this.data = value.reduce(function (r, a) {
        r[a.ngayban] = r[a.ngayban] || [];
        r[a.ngayban].push(a);
        return r;
      }, Object.create(null));
      console.log('this.data', this.data)


      this.date.forEach(element => {
        for(let i=0;i<this.data[element].length;i++){
          // console.log("this.data[element][i]",this.data[element][i].tensanpham)
          this.moneytemp += parseInt(this.data[element][i].giatien)
          this.tensanphamtemp += this.data[element][i].tensanpham.toString() + ','
          this.emeitemp += this.data[element][i].imei + ','
        }
        this.dataconvert.push({"ngayban":element,"tongsotien":this.moneytemp,"tensanpham":this.tensanphamtemp,"imei":this.emeitemp})
        this.moneytemp=0
        this.tensanphamtemp=''
        this.emeitemp=''
      });
      this.dataconverttemp=this.dataconvert
    });

console.log('this.dataconvert',this.dataconvert)

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











  change1() {

    let datatemp = this.dataconvert
    if (this.date2 == "") {
      this.dataconvert=[]
      console.log(this.date1, this.date2)
      datatemp.forEach(element => {
        console.log('element.ngayban', element.ngayban)
        if (this.date1 == element.ngayban) {
          this.dataconvert.push(element)
        }
      });
    }
    if (this.date2 != "") {
      this.dataconvert = []
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
            this.dataconvert.push(element1)
          }
        });

      });
      console.log(this.daterange)

    }
  }
  change2() {

  
this.dataconvert = this.dataconverttemp
    let datatemp = this.dataconvert

    this.dataconvert = []
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
          this.dataconvert.push(element1)
        }
      });

    });
    console.log(this.daterange)

   
  }

  refresh() {
    window.location.reload()
  }
}