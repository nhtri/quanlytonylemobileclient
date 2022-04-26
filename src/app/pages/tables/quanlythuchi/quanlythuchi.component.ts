import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { NetworkserviceService } from '../../../services/networkservice.service';
@Component({
  selector: 'ngx-quanlythuchi',
  templateUrl: './quanlythuchi.component.html',
  styleUrls: ['./quanlythuchi.component.scss']
})
export class QuanlythuchiComponent implements OnInit {

  datathu = []
  datatempthu = []
  datachi = []
  datatempchi = []
  datathuedit = []
  datachiedit = []
  datatong = []
  datatongedit = []
  datatongconvert = []
  daterange = []



  date1 = ""
  date2 = ""
  daterangefilter = []
  datatemp = []
  totalthu = 0
  totalchi = 0
  totalthutheothang = 0
  totalchitheothang = 0
  constructor(private service: NetworkserviceService) {
    // this.service.getquanlythu().subscribe(val => {
    //   console.log(val)
    //   this.datathu = val

    // const res = this.datathu.reduce((acc, curr) => {
    //   if (!acc[curr.ngaytao]) acc[curr.ngaytao] = []; //If this type wasn't previously stored
    //   acc[curr.ngaytao].push(curr);
    //   return acc;
    // }, {});
    // console.log('resthu', res)


    // this.datathu.forEach(element => {
    //   this.daterange.push(element.ngaytao)
    //   if (res[element.ngaytao].length > 1) {
    //     let tienchi = 0
    //     let mucdich = ''
    //     res[element.ngaytao].forEach(element => {
    //       tienchi = tienchi + parseFloat(element.sotien)
    //       mucdich = mucdich + ',' + element.mucdich
    //     });
    //     this.datathuedit.push({ 'ngaytao': element.ngaytao, 'tienthu': tienchi, 'mucdich': mucdich })

    //   }
    //   else {
    //     this.datathuedit.push({ 'ngaytao': element.ngaytao, 'tienthu': element.sotien, 'mucdich': element.mucdich })
    //   }
    // });

    this.service.getquanlythu().subscribe(async val => {
      this.datathu = []
      // this.sotien = "", this.date = "", this.mucdich = "", this.id = ""
      console.log(val)
      val.forEach(element => {
        if (element.hinhthucthanhtoan == "tienmat") {
          this.totalthu += parseInt(element.sotien)
          if (element.mucdich.includes('dh')) {
            this.service.getdanhsachdonhangquanlymobiletransaction([element.mucdich]).subscribe(data => {
              element.mucdich = 'Mã ĐH: ' + data[0].madonhang
              this.datathu.push(element)
            })
          }
          else {
            this.datathu.push(element)
          }

        }
      });

      await new Promise(f => setTimeout(f, 5000));
      const res1 = this.datathu.reduce((acc, curr) => {
        if (!acc[curr.ngaytao]) acc[curr.ngaytao] = []; //If this type wasn't previously stored
        acc[curr.ngaytao].push(curr);
        return acc;
      }, {});
      console.log('resthu', res1)

      this.datathu.forEach(element => {
        this.daterange.push(element.ngaytao)
        if (res1[element.ngaytao].length > 1) {
          let tienthu = 0
          let mucdich = ''
          res1[element.ngaytao].forEach(element => {
            tienthu = tienthu + parseFloat(element.sotien)
            mucdich = mucdich + ',' + element.mucdich
          });
          this.datathuedit.push({ 'ngaytao': element.ngaytao, 'tienthu': tienthu, 'mucdich': mucdich })

        }
        else {
          this.datathuedit.push({ 'ngaytao': element.ngaytao, 'tienthu': element.sotien, 'mucdich': element.mucdich })
        }
      });
      this.datathuedit = this.datathuedit.filter((value, index, self) =>
        index === self.findIndex((t) => (
          t.ngaytao === value.ngaytao
        ))
      )
      console.log('datathuedit', this.datathuedit,)


      console.log('datathu', this.datathu,)







      this.service.getquanlychi().subscribe(val => {

        console.log(val)
        this.datachi = val.filter(val => val.hinhthucthanhtoan == "tienmat")
        this.datatempchi = val.filter(val => val.hinhthucthanhtoan == "tienmat")

        const res = this.datachi.reduce((acc, curr) => {
          if (!acc[curr.ngaytao]) acc[curr.ngaytao] = []; //If this type wasn't previously stored
          acc[curr.ngaytao].push(curr);
          return acc;
        }, {});
        console.log('res', res)

        this.datachi.forEach(element => {

          this.totalchi += parseInt(element.sotien)
          this.daterange.push(element.ngaytao)
          if (res[element.ngaytao].length > 1) {
            let tienchi = 0
            let mucdich = ''
            let hinhthucthanhtoan = ''
            res[element.ngaytao].forEach(element => {
              tienchi = tienchi + parseFloat(element.sotien)
              mucdich = mucdich + ',' + element.mucdich
              hinhthucthanhtoan = element.hinhthucthanhtoan
            });
            this.datachiedit.push({ 'ngaytao': element.ngaytao, 'tienchi': tienchi, 'mucdich': mucdich, 'hinhthucthanhtoan': hinhthucthanhtoan })

          }
          else {
            this.datachiedit.push({ 'ngaytao': element.ngaytao, 'tienchi': element.sotien, 'mucdich': element.mucdich, 'hinhthucthanhtoan': element.hinhthucthanhtoan })
          }

        });
        this.datachiedit = this.datachiedit.filter((value, index, self) =>
          index === self.findIndex((t) => (
            t.ngaytao === value.ngaytao
          ))
        )
        console.log('datachiedit', this.datachiedit,)


        this.daterange = this.daterange.filter((value, index, self) =>
          index === self.findIndex((t) => (
            t === value
          ))
        )
        console.log('this.daterange', this.daterange)




        //data tong
        this.datachiedit.forEach(element => {
          if (element.hinhthucthanhtoan == "tienmat") {
            if (this.daterange.includes(element.ngaytao)) {
              this.datatong.push({ "ngaytao": element.ngaytao, "tienchi": element.tienchi, "mucdichchi": element.mucdich })
            }
          }
        });
        this.datathuedit.forEach(element => {
          if (this.daterange.includes(element.ngaytao)) {
            this.datatong.push({ "ngaytao": element.ngaytao, "tienthu": element.tienthu, "mucdichthu": element.mucdich })
          }
        });


        let resdatatong
        resdatatong = this.datatong.reduce((acc, curr) => {
          if (!acc[curr.ngaytao]) acc[curr.ngaytao] = []; //If this type wasn't previously stored
          acc[curr.ngaytao].push(curr);
          return acc;
        }, {});

        console.log('this.datatong', this.datatong)
        console.log('resdatatong', resdatatong)
        this.datatong.forEach(element => {
          if (resdatatong[element.ngaytao].length > 1) {
            console.log("resdatatong[element.ngaytao]", resdatatong[element.ngaytao])
            this.datatongedit.push({
              "ngaytao": element.ngaytao, "tienthu": resdatatong[element.ngaytao][1].tienthu,
              "mucdichthu": resdatatong[element.ngaytao][1].mucdichthu, "tienchi": resdatatong[element.ngaytao][0].tienchi, "mucdichchi": resdatatong[element.ngaytao][0].mucdichchi
            })
          }
          {
            if (element.mucdichthu != null && element.mucdichthu != "") {
              this.datatongedit.push({
                "ngaytao": element.ngaytao, "tienthu": element.tienthu,
                "mucdichthu": element.mucdichthu, "tienchi": "", "mucdichchi": ""
              })
            }
            else {
              this.datatongedit.push({
                "ngaytao": element.ngaytao, "tienthu": "",
                "mucdichthu": "", "tienchi": element.tienchi, "mucdichchi": element.mucdichchi
              })
            }
          }
        });
        this.datatongedit = this.datatongedit.filter((value, index, self) =>
          index === self.findIndex((t) => (
            t.ngaytao === value.ngaytao
          ))
        )
        // this.datatongedit.forEach(element => {
        //   this.service.getdanhsachdonhangquanlymobiletransaction([element.mucdichthu]).subscribe(data => {
        //     element.mucdichthu = 'Mã ĐH: ' + data[0].madonhang

        //   })
        // });
        this.datatemp = this.datatongedit
        console.log('datatongedit', this.datatongedit)
      });


    });




  }
  fileName = "DanhSachThuChi"
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
    this.totalchitheothang = 0
    this.totalthutheothang = 0
    if (this.date2 == "") {
      this.datatongedit = []
      console.log(this.date1, this.date2)
      this.datatemp.forEach(element => {
        console.log('element.ngaytao', element.ngaytao)
        if (this.date1 == element.ngaytao) {
          this.datatongedit.push(element)
        }
      });
    }
    if (this.date2 != "") {
      this.datatongedit = []
      this.daterangefilter = []
      console.log(this.date1, this.date2)
      var currentDate = new Date(this.date1);
      while (currentDate <= new Date(this.date2)) {
        this.daterangefilter.push(currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1).toString().padStart(2, '0') + '-' + currentDate.getDate().toString().padStart(2, '0'));
        currentDate.setDate(currentDate.getDate() + 1)
      }

      this.datatemp.forEach(element1 => {
        console.log('element.ngaytao', element1.ngaytao)
        this.daterange.forEach(element2 => {
          if (element2 == element1.ngaytao) {
            this.datatongedit.push(element1)
          }
        });

      });
      console.log(this.daterangefilter)
    }
    this.datatongedit.forEach(element => {
      if (element.tienchi != "") {
        this.totalchitheothang += parseInt(element.tienchi)
      }
      if (element.tienthu != "") {
        this.totalthutheothang += parseInt(element.tienthu)
      }
    });
  }
  change2() {
    this.totalchitheothang = 0
    this.totalthutheothang = 0
    this.datatongedit = []
    this.daterangefilter = []
    console.log(this.date1, this.date2)
    var currentDate = new Date(this.date1);
    while (currentDate <= new Date(this.date2)) {
      this.daterangefilter.push(currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1).toString().padStart(2, '0') + '-' + currentDate.getDate().toString().padStart(2, '0'));
      currentDate.setDate(currentDate.getDate() + 1)
    }

    this.datatemp.forEach(element1 => {
      console.log('element.ngaytao', element1.ngaytao)
      this.daterangefilter.forEach(element2 => {
        if (element2 == element1.ngaytao) {
          this.datatongedit.push(element1)
        }
      });

    });
    console.log(this.daterangefilter)
    this.datatongedit.forEach(element => {
      console.log(parseInt(element.tienchi), parseInt(element.tienthu))
      if (element.tienchi != "") {
        this.totalchitheothang += parseInt(element.tienchi)
      }
      if (element.tienthu != "") {
        this.totalthutheothang += parseInt(element.tienthu)
      }
    });
  }
  refresh(){
    window.location.reload()
  }
}
