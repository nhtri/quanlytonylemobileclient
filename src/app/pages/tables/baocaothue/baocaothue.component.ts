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
  // data = []
  // datadungluong = []
  // datanhomsanpham = []
  // datatensanpham = []
  // datamau = []
  // dataloaisanpham = []
  // dataphienban = []
  // danhsachidsanpham = []
  // taomoisanpham = false
  // date1 = ""
  // date2 = ""
  // daterange = []


  // datanhomsanphamtaomoi = ""
  // datatensanphamtaomoi = ""
  // datadungluongtaomoi = ""
  // dataloaisanphamtaomoi = ""
  // dataphienbantaomoi = ""
  // dataimeitaomoi = ""


  // dataselectnhomsanpham = ""
  // dataselecttensanpham = ""
  // dataselectdungluong = ""
  // dataselectloaisanpham = ""
  // dataselectphienban = ""

  // datafilter = []

  // dataorigin = []

  // date = []

  // dataconvert=[]
  // dataconverttemp=[]
  // moneytemp=0
  // tensanphamtemp=''
  // emeitemp=''


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

//     this.service.getdanhsachsanphamdabanquanlymobile().subscribe(value => {
//       value.forEach(element => {
//         if (!this.date.includes(element.ngayban)) { this.date.push(element.ngayban) }
//       });
//       this.data = value

//       this.datafilter = this.data
//       this.dataorigin = this.data

//       this.data = value.reduce(function (r, a) {
//         r[a.ngayban] = r[a.ngayban] || [];
//         r[a.ngayban].push(a);
//         return r;
//       }, Object.create(null));
//       console.log('this.data', this.data)


//       this.date.forEach(element => {
//         for(let i=0;i<this.data[element].length;i++){
//           // console.log("this.data[element][i]",this.data[element][i].tensanpham)
//           this.moneytemp += parseInt(this.data[element][i].giatien)
//           this.tensanphamtemp += this.data[element][i].tensanpham.toString() + ','
//           this.emeitemp += this.data[element][i].imei + ','
//         }
//         this.dataconvert.push({"ngayban":element,"tongsotien":this.moneytemp,"tensanpham":this.tensanphamtemp,"imei":this.emeitemp})
//         this.moneytemp=0
//         this.tensanphamtemp=''
//         this.emeitemp=''
//       });
//       this.dataconverttemp=this.dataconvert
//     });

// console.log('this.dataconvert',this.dataconvert)

this.service.getdanhsachsanphamdabanquanlymobileall200().subscribe(value => {
  // this.source.load(val);
  console.log(value)
  this.data = value.filter(x=>x.trangthaidonhang=='trahet')
  // value.forEach(element => {
  //   this.service.getdanhsachdonhangquanlymobiletransaction([element.transactionkey]).subscribe(val => {
  //     element.madonhang = val[0].madonhang
  //     this.data.push(element)
  //     console.log('this.data', this.data)

  //     if (element.nhomsanpham != '' && element.nhomsanpham != null && !this.datanhomsanpham.some(val => val.value == element.nhomsanpham)) {
  //       this.datanhomsanpham.push({ "value": element.nhomsanpham, "title": element.nhomsanpham })
  //       // this.datanhomsanpham = [...new Set(this.datanhomsanpham)];
  //     }

  //     if (element.tensanpham != '' && element.tensanpham != null && !this.datatensanpham.some(val => val.value == element.tensanpham)) {
  //       this.datatensanpham.push({ "value": element.tensanpham, "title": element.tensanpham })
  //       // this.datatensanpham = [...new Set(this.datatensanpham)];
  //     }

  //     if (element.dungluong != '' && element.dungluong != null && !this.datadungluong.some(val => val.value == element.dungluong)) {
  //       this.datadungluong.push({ "value": element.dungluong, "title": element.dungluong })
  //       // this.datadungluong = [...new Set(this.datadungluong)];
  //     }

  //     if (element.loaisanpham != '' && element.loaisanpham != null && !this.dataloaisanpham.some(val => val.value == element.loaisanpham)) {
  //       this.dataloaisanpham.push({ "value": element.loaisanpham, "title": element.loaisanpham })
  //       // this.dataloaisanpham = [...new Set(this.dataloaisanpham)];
  //     }

  //     if (element.phienban != '' && element.phienban != null && !this.dataphienban.some(val => val.value == element.phienban)) {
  //       this.dataphienban.push({ "value": element.phienban, "title": element.phienban })
  //       // this.dataphienban = [...new Set(this.dataphienban)];
  //     }
  //   });
  // });
  this.datafilter = this.data
  this.dataorigin = this.data
});

this.service.getdanhsachsanphamdabanquanlymobileall().subscribe(value => {
  this.data = value.filter(x=>x.trangthaidonhang=='trahet')
  // this.source.load(val);
  // value.forEach(element => {
  //   this.service.getdanhsachdonhangquanlymobiletransaction([element.transactionkey]).subscribe(val => {
  //     element.madonhang = val[0].madonhang
  //     this.data.push(element)
  //     console.log('this.data', this.data)

  //     if (element.nhomsanpham != '' && element.nhomsanpham != null && !this.datanhomsanpham.some(val => val.value == element.nhomsanpham)) {
  //       this.datanhomsanpham.push({ "value": element.nhomsanpham, "title": element.nhomsanpham })
  //       // this.datanhomsanpham = [...new Set(this.datanhomsanpham)];
  //     }

  //     if (element.tensanpham != '' && element.tensanpham != null && !this.datatensanpham.some(val => val.value == element.tensanpham)) {
  //       this.datatensanpham.push({ "value": element.tensanpham, "title": element.tensanpham })
  //       // this.datatensanpham = [...new Set(this.datatensanpham)];
  //     }

  //     if (element.dungluong != '' && element.dungluong != null && !this.datadungluong.some(val => val.value == element.dungluong)) {
  //       this.datadungluong.push({ "value": element.dungluong, "title": element.dungluong })
  //       // this.datadungluong = [...new Set(this.datadungluong)];
  //     }

  //     if (element.loaisanpham != '' && element.loaisanpham != null && !this.dataloaisanpham.some(val => val.value == element.loaisanpham)) {
  //       this.dataloaisanpham.push({ "value": element.loaisanpham, "title": element.loaisanpham })
  //       // this.dataloaisanpham = [...new Set(this.dataloaisanpham)];
  //     }

  //     if (element.phienban != '' && element.phienban != null && !this.dataphienban.some(val => val.value == element.phienban)) {
  //       this.dataphienban.push({ "value": element.phienban, "title": element.phienban })
  //       // this.dataphienban = [...new Set(this.dataphienban)];
  //     }
  //   });
  // });
  this.datafilter = this.data
  this.dataorigin = this.data
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











//   change1() {

//     let datatemp = this.dataconvert
//     if (this.date2 == "") {
//       this.dataconvert=[]
//       console.log(this.date1, this.date2)
//       datatemp.forEach(element => {
//         console.log('element.ngayban', element.ngayban)
//         if (this.date1 == element.ngayban) {
//           this.dataconvert.push(element)
//         }
//       });
//     }
//     if (this.date2 != "") {
//       this.dataconvert = []
//       console.log(this.date1, this.date2)
//       var currentDate = new Date(this.date1);
//       while (currentDate <= new Date(this.date2)) {
//         this.daterange.push(currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1).toString().padStart(2, '0') + '-' + currentDate.getDate().toString().padStart(2, '0'));
//         currentDate.setDate(currentDate.getDate() + 1)
//       }

//       datatemp.forEach(element1 => {
//         console.log('element.ngayban', element1.ngayban)
//         this.daterange.forEach(element2 => {
//           if (element2 == element1.ngayban) {
//             this.dataconvert.push(element1)
//           }
//         });

//       });
//       console.log(this.daterange)

//     }
//   }
//   change2() {

  
// this.dataconvert = this.dataconverttemp
//     let datatemp = this.dataconvert

//     this.dataconvert = []
//     console.log(this.date1, this.date2)
//     var currentDate = new Date(this.date1);
//     while (currentDate <= new Date(this.date2)) {
//       this.daterange.push(currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1).toString().padStart(2, '0') + '-' + currentDate.getDate().toString().padStart(2, '0'));
//       currentDate.setDate(currentDate.getDate() + 1)
//     }
//     console.log('datatemp', datatemp)
//     console.log('daterange', this.daterange)
//     datatemp.forEach(element1 => {
//       this.daterange.forEach(element2 => {
//         console.log('element2', element2)
//         console.log('element1.ngayban', element1.ngayban)
//         if (element2 == element1.ngayban) {
//           this.dataconvert.push(element1)
//         }
//       });

//     });
//     console.log(this.daterange)

   
//   }

  // refresh() {
  //   window.location.reload()
  // }


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
      this.data = this.datafilter.filter(data => data.tensanpham.toLowerCase().includes(this.tensp.toLowerCase()))
    }
    if (this.imeisp != "") {
      this.data = this.datafilter.filter(data => data.imei.toLowerCase().includes(this.imeisp.toLowerCase()))
    }
    if(this.tensp==""&&this.imeisp==""){
      this.data = this.datafilter
    }
  }
}