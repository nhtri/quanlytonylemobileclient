import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Console } from 'console';
import { NetworkserviceService } from '../../../services/networkservice.service';

@Component({
  selector: 'ngx-d3',
  styleUrls: ['./d3.component.scss'],
  templateUrl: './d3.component.html',
})
export class D3Component implements OnDestroy {
  thongkehinhthucthanhtoan = []
  thongkehinhthucthanhtoanconver = []
  hinhthucthanhtoan = []
  nhomsanpham = []
  thongkenhomsanpham = []
  thongkenhomsanphamconver = []
  colorScheme: any;
  themeSubscription: any;


  single = [
  ];
  singlenhomsanpham = [
  ];
  showLegend = false;
  showLabels = true;
  date1 = ""
  date2 = ""

  data = []
  datatemp = []
  daterange = []

  constructor(private theme: NbThemeService, private service: NetworkserviceService) {

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
      this.service.getdanhsachsanphamdabanquanlymobile().subscribe(value => {
        this.data = value
        this.datatemp = value
        console.log(value)
        value.forEach(element => {
          if (!this.hinhthucthanhtoan.includes(element.hinhthucthanhtoan)) {
            this.hinhthucthanhtoan.push(element.hinhthucthanhtoan)
          }
          if (!this.nhomsanpham.includes(element.nhomsanpham)) {
            this.nhomsanpham.push(element.nhomsanpham)
          }
        });
        this.thongkehinhthucthanhtoan = value.reduce(function (r, a) {
          r[a.hinhthucthanhtoan] = r[a.hinhthucthanhtoan] || [];
          r[a.hinhthucthanhtoan].push(a);
          return r;
        }, Object.create(null));
        console.log('this.thongkehinhthucthanhtoan', this.thongkehinhthucthanhtoan)
        this.hinhthucthanhtoan.forEach(element => {
          let hinhthuc
          if (element == 'chuyenkhoan')
            hinhthuc = 'Chuyển khoản'
          if (element == 'daibiki')
            hinhthuc = 'Daibiki'
          if (element == 'tienmat')
            hinhthuc = 'Tiền Mặt'
          this.thongkehinhthucthanhtoanconver.push({
            "name": hinhthuc,
            "value": this.thongkehinhthucthanhtoan[element].length,
          })
        });
        this.single = this.thongkehinhthucthanhtoanconver


        this.thongkenhomsanpham = value.reduce(function (r, a) {
          r[a.nhomsanpham] = r[a.nhomsanpham] || [];
          r[a.nhomsanpham].push(a);
          return r;
        }, Object.create(null));
        console.log('this.thongkenhomsanpham', this.thongkenhomsanpham)
        this.nhomsanpham.forEach(element => {

          this.thongkenhomsanphamconver.push({
            "name": element,
            "value": this.thongkenhomsanpham[element].length,
          })
        });
        this.singlenhomsanpham = this.thongkenhomsanphamconver

      })
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }



  change1(event) {
    this.thongkehinhthucthanhtoan = []
    this.thongkehinhthucthanhtoanconver = []
    this.hinhthucthanhtoan = []
    this.nhomsanpham = []
    this.thongkenhomsanpham = []
    this.thongkenhomsanphamconver = []
    this.single = [];
    this.singlenhomsanpham = [];


    this.date1 = event.target.value
    console.log(event.target.value)


    let datatemp = this.data
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

    this.data.forEach(element => {
      if (!this.hinhthucthanhtoan.includes(element.hinhthucthanhtoan)) {
        this.hinhthucthanhtoan.push(element.hinhthucthanhtoan)
      }
      if (!this.nhomsanpham.includes(element.nhomsanpham)) {
        this.nhomsanpham.push(element.nhomsanpham)
      }
    });
    this.thongkehinhthucthanhtoan = this.data.reduce(function (r, a) {
      r[a.hinhthucthanhtoan] = r[a.hinhthucthanhtoan] || [];
      r[a.hinhthucthanhtoan].push(a);
      return r;
    }, Object.create(null));
    console.log('this.thongkehinhthucthanhtoan', this.thongkehinhthucthanhtoan)
    this.hinhthucthanhtoan.forEach(element => {
      let hinhthuc
      if (element == 'chuyenkhoan')
        hinhthuc = 'Chuyển khoản'
      if (element == 'daibiki')
        hinhthuc = 'Daibiki'
      if (element == 'tienmat')
        hinhthuc = 'Tiền Mặt'
      this.thongkehinhthucthanhtoanconver.push({
        "name": hinhthuc,
        "value": this.thongkehinhthucthanhtoan[element].length,
      })
    });
    this.single = this.thongkehinhthucthanhtoanconver
    console.log('this.single', this.single)

    this.thongkenhomsanpham = this.data.reduce(function (r, a) {
      r[a.nhomsanpham] = r[a.nhomsanpham] || [];
      r[a.nhomsanpham].push(a);
      return r;
    }, Object.create(null));
    console.log('this.thongkenhomsanpham', this.thongkenhomsanpham)
    this.nhomsanpham.forEach(element => {

      this.thongkenhomsanphamconver.push({
        "name": element,
        "value": this.thongkenhomsanpham[element].length,
      })
    });
    this.singlenhomsanpham = this.thongkenhomsanphamconver
  }

  change2(event) {
    this.date2 = event.target.value
    console.log(event.target.value)


    this.thongkehinhthucthanhtoan = []
    this.thongkehinhthucthanhtoanconver = []
    this.hinhthucthanhtoan = []
    this.nhomsanpham = []
    this.thongkenhomsanpham = []
    this.thongkenhomsanphamconver = []
    this.single = [];
    this.singlenhomsanpham = [];

this.daterange=[]

    let datatemp = this.datatemp


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



    this.data.forEach(element => {
      if (!this.hinhthucthanhtoan.includes(element.hinhthucthanhtoan)) {
        this.hinhthucthanhtoan.push(element.hinhthucthanhtoan)
      }
      if (!this.nhomsanpham.includes(element.nhomsanpham)) {
        this.nhomsanpham.push(element.nhomsanpham)
      }
    });
    this.thongkehinhthucthanhtoan = this.data.reduce(function (r, a) {
      r[a.hinhthucthanhtoan] = r[a.hinhthucthanhtoan] || [];
      r[a.hinhthucthanhtoan].push(a);
      return r;
    }, Object.create(null));
    console.log('this.thongkehinhthucthanhtoan', this.thongkehinhthucthanhtoan)
    this.hinhthucthanhtoan.forEach(element => {
      let hinhthuc
      if (element == 'chuyenkhoan')
        hinhthuc = 'Chuyển khoản'
      if (element == 'daibiki')
        hinhthuc = 'Daibiki'
      if (element == 'tienmat')
        hinhthuc = 'Tiền Mặt'
      this.thongkehinhthucthanhtoanconver.push({
        "name": hinhthuc,
        "value": this.thongkehinhthucthanhtoan[element].length,
      })
    });
    this.single = this.thongkehinhthucthanhtoanconver
    console.log('this.single', this.single)

    this.thongkenhomsanpham = this.data.reduce(function (r, a) {
      r[a.nhomsanpham] = r[a.nhomsanpham] || [];
      r[a.nhomsanpham].push(a);
      return r;
    }, Object.create(null));
    console.log('this.thongkenhomsanpham', this.thongkenhomsanpham)
    this.nhomsanpham.forEach(element => {

      this.thongkenhomsanphamconver.push({
        "name": element,
        "value": this.thongkenhomsanpham[element].length,
      })
    });
    this.singlenhomsanpham = this.thongkenhomsanphamconver
  }


}
