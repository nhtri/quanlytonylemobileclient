import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { NetworkserviceService } from '../../../services/networkservice.service';
@Component({
  selector: 'ngx-quanlythu',
  templateUrl: './quanlythu.component.html',
  styleUrls: ['./quanlythu.component.scss']
})
export class QuanlythuComponent implements OnInit {

  data = []
  id = ""
  date1 = ""
  date2 = ""
  daterange = []
  datatemp = []
  totalmoney = 0
  tienmat = 0
  daibiki = 0
  chuyenkhoan = 0
  hinhthuc = "default"
  constructor(private service: NetworkserviceService) {

    // this.service.getquanlythu().subscribe(val => {
    //   console.log(val)
    //   val.forEach(element => {
    //     // this.totalmoney += parseInt(element.sotien)
    //     if (element.mucdich.includes('dh')) {
    //       this.service.getdanhsachdonhangquanlymobiletransaction([element.mucdich]).subscribe(data => {
    //         element.mucdich = 'Mã ĐH: ' + data[0].madonhang
    //         // this.data.push(element)
    //         this.datatemp.push(element)
    //         // let today = new Date();
    //         // let date = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getDate().toString().padStart(2, '0');
    //         // this.date1 = date
    //         // this.datatemp.forEach(element => {
    //         //  console.log(element.ngaytao,this.date1)

    //         // });
    //       })
    //     }
    //     else {
    //       let today = new Date();
    //       let date = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getDate().toString().padStart(2, '0');
    //       this.date1 = date
    //       // this.datatemp.forEach(element => {
    //       //  console.log(element.ngaytao,this.date1)

    //       // this.data.push(element)
    //       this.datatemp.push(element)
    //     }

    //   });
    //   console.log('this.datatemp', this.datatemp)

    //   console.log(this.date1, 'this.data', this.datatemp)



    // });

    this.service.getquanlythudanhsachdonhang().subscribe(val => {
      console.log(val)
      val.forEach(element => {
        this.totalmoney += Number(element.sotien)
        if (element.mucdich.includes('dh')) {
          element.mucdich = 'Mã ĐH: ' + element.madonhang
          //  this.data.push(element)
          this.datatemp.push(element)
          // let today = new Date();
          // let date = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getDate().toString().padStart(2, '0');
          // this.date1 = date
          // this.datatemp.forEach(element => {
          //  console.log(element.ngaytao,this.date1)

          // });

        }
        else {
          // let today = new Date();
          // let date = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getDate().toString().padStart(2, '0');
          // this.date1 = date
          this.datatemp.forEach(element => {
           console.log(element.ngaytao,this.date1)

          // this.data.push(element)
          this.datatemp.push(element)
        })}

      });
      console.log('this.datatemp', this.datatemp)

      console.log(this.date1, 'this.data', this.datatemp)



    });

    this.service.getquanlythudanhsachdonhang().subscribe(val => {
      console.log(val)
      let today = new Date();
      let date = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getDate().toString().padStart(2, '0');
      this.date1 = date
      console.log('this.date1',this.date1)
      val.forEach(element => {
        // this.totalmoney += parseInt(element.sotien)
        if (element.ngaytao == this.date1) {
          if (element.mucdich.includes('dh')) {
            element.mucdich = 'Mã ĐH: ' + element.madonhang
             this.data.push(element)
            this.datatemp.push(element)
            // let today = new Date();
            // let date = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getDate().toString().padStart(2, '0');
            // this.date1 = date
            // this.datatemp.forEach(element => {
            //  console.log(element.ngaytao,this.date1)

            // });

          }
          else {
            let today = new Date();
            let date = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getDate().toString().padStart(2, '0');
            this.date1 = date
            // this.datatemp.forEach(element => {
            //  console.log(element.ngaytao,this.date1)
    
            this.data.push(element)
            this.datatemp.push(element)
          }
          this.totalmoney += Number(element.sotien)

          if (element.hinhthucthanhtoan == 'tienmat' || element.tienmat !='0') {
            this.tienmat += Number(element.sotien)
          }
          if (element.hinhthucthanhtoan == 'daibiki' || element.daikibi !='0') {
            this.daibiki += Number(element.sotien)
          }
          if (element.hinhthucthanhtoan == 'chuyenkhoan' || element.chuyenkhoan != '0') {
            this.chuyenkhoan += Number(element.sotien)
          }

         
        }
          
        });
      console.log('this.datatemp', this.datatemp)

      console.log(this.date1, 'this.data', this.datatemp)



    });

    // this.service.getquanlythu().subscribe(val => {
    //   let today = new Date();
    //   let date = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getDate().toString().padStart(2, '0');
    //   this.date1 = date
    //   val.forEach(element => {
    //     if (element.ngaytao == this.date1) {
    //       if (element.mucdich.includes('dh')) {
    //         this.service.getdanhsachdonhangquanlymobiletransaction([element.mucdich]).subscribe(data => {
    //           element.mucdich = 'Mã ĐH: ' + data[0].madonhang
    //           this.data.push(element)

    //         })
    //       }
    //       else {


    //         this.data.push(element)

    //       }
    //       // element.forEach(element => {
    //       //   this.totalmoney += parseInt(element.sotien)

    //       //   if (element.hinhthucthanhtoan == 'tienmat') {
    //       //     this.tienmat += parseInt(element.sotien)
    //       //   }
    //       //   if (element.hinhthucthanhtoan == 'daibiki') {
    //       //     this.daibiki += parseInt(element.sotien)
    //       //   }
    //       //   if (element.hinhthucthanhtoan == 'chuyenkhoan') {
    //       //     this.chuyenkhoan += parseInt(element.sotien)
    //       //   }
    //       // });

    //       this.totalmoney += Number(element.sotien)

    //       if (element.hinhthucthanhtoan == 'tienmat') {
    //         this.tienmat += Number(element.sotien)
    //       }
    //       if (element.hinhthucthanhtoan == 'daibiki') {
    //         this.daibiki += Number(element.sotien)
    //       }
    //       if (element.hinhthucthanhtoan == 'chuyenkhoan') {
    //         this.chuyenkhoan += Number(element.sotien)
    //       }
    //     }
    //   });



    // });
  }

  fileName = "DanhSachThu"
  date
  sotien = ""
  mucdich = ""
  hinhthucthanhtoan = "tienmat"
  hinhthucthanhtoanfilter = ""

  ngOnInit(): void {
    this.date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1).toString().padStart(2, '0') + '-' + new Date().getDate().toString().padStart(2, '0')



  }

  selecthinhthucthanhtoan(event) {
    console.log(event.target.value)
    this.hinhthucthanhtoan = event.target.value

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
      if (this.hinhthucthanhtoan == 'default') {
        this.hinhthucthanhtoan = "tienmat"
      }
      this.service.quanlythu([this.sotien, this.date, this.mucdich, this.hinhthucthanhtoan, 'WAREHOUSE']).subscribe(val => {
        alert("Tạo mới thành công")
        console.log(val)
        // this.service.getquanlythu().subscribe(val => {
        //   console.log(val)
        //   this.data = val
        // });
        window.location.reload()
      });
    }
    if (this.id != "") {
      this.service.editquanlythu([this.sotien, this.date, this.mucdich, this.hinhthucthanhtoan, this.id]).subscribe(val => {
        console.log(val)
        alert("Chỉnh sửa thành công")
        // this.service.getquanlythu().subscribe(val => {
        //   this.data = []
        //   this.sotien = "", this.date = "", this.mucdich = "", this.id = ""
        //   console.log(val)
        //   val.forEach(element => {
        //     if (element.mucdich.includes('dh')) {
        //       this.service.getdanhsachdonhangquanlymobiletransaction([element.mucdich]).subscribe(data => {
        //         element.mucdich = 'Mã ĐH: ' + data[0].madonhang
        //         this.data.push(element)
        //       })
        //     }
        //     else {
        //       this.data.push(element)
        //     }

        //   });



        // });
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
    this.service.deletequanlythu([value]).subscribe(val => {
      console.log(val)
      alert("Xoá thành công")
      window.location.reload()
      // this.service.getquanlythu().subscribe(val => {
      //   this.data = []
      //   console.log(val)
      //   val.forEach(element => {
      //     if (element.mucdich.includes('dh')) {
      //       this.service.getdanhsachdonhangquanlymobiletransaction([element.mucdich]).subscribe(data => {
      //         element.mucdich = 'Mã ĐH: ' + data[0].madonhang
      //         this.data.push(element)
      //       })
      //     }
      //     else {
      //       this.data.push(element)
      //     }

      //   });



      // });
    });
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
      if (element.hinhthucthanhtoan == 'tienmat' || element.tienmat !='0') {
        this.tienmat += Number(element.sotien)
      }
      if (element.hinhthucthanhtoan == 'daibiki' || element.daikibi !='0') {
        this.daibiki += Number(element.sotien)
      }
      if (element.hinhthucthanhtoan == 'chuyenkhoan' || element.chuyenkhoan != '0') {
        this.chuyenkhoan += Number(element.sotien)
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
    console.log(this.daterange)

    this.data.forEach(element => {
      if (element.hinhthucthanhtoan == 'tienmat' || element.tienmat !='0') {
        this.tienmat += Number(element.sotien)
      }
      if (element.hinhthucthanhtoan == 'daibiki' || element.daikibi !='0') {
        this.daibiki += Number(element.sotien)
      }
      if (element.hinhthucthanhtoan == 'chuyenkhoan' || element.chuyenkhoan != '0') {
        this.chuyenkhoan += Number(element.sotien)
      }
    });
  }


  selecthinhthucthanhtoanfilter(event) {
    // let datatemp
    // datatemp = this.data

    // this.data=[]
    // console.log(event.target.value)
    // this.hinhthucthanhtoanfilter = event.target.value
    // this.datatemp.forEach(element => {
    //   if(element.hinhthucthanhtoan == this.hinhthucthanhtoanfilter){
    //     this.data.push(element)
    //   }

    // });
    if (this.date1 == "") {
      this.data = []
      console.log(event.target.value)
      this.hinhthucthanhtoanfilter = event.target.value
      if (this.hinhthucthanhtoanfilter != 'default') {
        this.datatemp.forEach(element => {
          if (element.hinhthucthanhtoan == this.hinhthucthanhtoanfilter) {
            this.data.push(element)
          }

        });
      }
      else {
        this.data = this.datatemp
      }
    }
    if (this.date1 != "" && this.date2 == "") {


      this.tienmat = 0
      this.daibiki = 0
      this.chuyenkhoan = 0
      if (this.date2 == "") {
        this.data = []
        console.log(this.date1, this.date2)
        this.datatemp.forEach(element => {
          console.log('element.ngaytao', element.ngaytao)
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
        if (element.hinhthucthanhtoan == 'tienmat' || element.tienmat !='0') {
          this.tienmat += Number(element.sotien)
        }
        if (element.hinhthucthanhtoan == 'daibiki' || element.daikibi !='0') {
          this.daibiki += Number(element.sotien)
        }
        if (element.hinhthucthanhtoan == 'chuyenkhoan' || element.chuyenkhoan != '0') {
          this.chuyenkhoan += Number(element.sotien)
        }
      });


      let datatemp
      datatemp = this.data

      this.data = []
      console.log(event.target.value)
      this.hinhthucthanhtoanfilter = event.target.value
      datatemp.forEach(element => {
        if (element.hinhthucthanhtoan == this.hinhthucthanhtoanfilter) {
          this.data.push(element)
        }

      });

      if (this.hinhthucthanhtoanfilter == "default") {
        window.location.reload()
      }

      if (this.hinhthucthanhtoanfilter == "daibiki") {
        this.tienmat = 0
        this.chuyenkhoan = 0
      }
      if (this.hinhthucthanhtoanfilter == "tienmat") {
        this.daibiki = 0
        this.chuyenkhoan = 0
      }
      if (this.hinhthucthanhtoanfilter == "chuyenkhoan") {
        this.tienmat = 0
        this.daibiki = 0
      }
    }

    if (this.date2 != "") {
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
      console.log(this.daterange)

      this.data.forEach(element => {
        if (element.hinhthucthanhtoan == 'tienmat' || element.tienmat !='0') {
          this.tienmat += Number(element.sotien)
        }
        if (element.hinhthucthanhtoan == 'daibiki' || element.daikibi !='0') {
          this.daibiki += Number(element.sotien)
        }
        if (element.hinhthucthanhtoan == 'chuyenkhoan' || element.chuyenkhoan != '0') {
          this.chuyenkhoan += Number(element.sotien)
        }
      });


      let datatemp
      datatemp = this.data

      this.data = []
      console.log(event.target.value)
      this.hinhthucthanhtoanfilter = event.target.value
      datatemp.forEach(element => {
        if (element.hinhthucthanhtoan == this.hinhthucthanhtoanfilter) {
          this.data.push(element)
        }

      });

      if (this.hinhthucthanhtoanfilter == "default") {
        window.location.reload()
      }

      if (this.hinhthucthanhtoanfilter == "daibiki") {
        this.tienmat = 0
        this.chuyenkhoan = 0
      }
      if (this.hinhthucthanhtoanfilter == "tienmat") {
        this.daibiki = 0
        this.chuyenkhoan = 0
      }
      if (this.hinhthucthanhtoanfilter == "chuyenkhoan") {
        this.tienmat = 0
        this.daibiki = 0
      }
    }

  }

  refresh() {
    window.location.reload()
  }
}
