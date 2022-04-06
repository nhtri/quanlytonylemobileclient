import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { NetworkserviceService } from '../../../services/networkservice.service';

@Component({
  selector: 'ngx-d3-advanced-pie',
  template: `
    <ngx-charts-advanced-pie-chart
      [scheme]="colorScheme"
      [results]="single">
    </ngx-charts-advanced-pie-chart>
  `,
})
export class D3AdvancedPieComponent implements OnDestroy {
  single = [
    // {
    //   name: 'Germany',
    //   value: 8940000,
    // },
    // {
    //   name: 'USA',
    //   value: 5000000,
    // },
    // {
    //   name: 'France',
    //   value: 7200000,
    // },
  ];
  nhomsanpham = []
  tennhomsanpham = []
  colorScheme: any;
  themeSubscription: any;
  data = []

  constructor(private theme: NbThemeService, private service: NetworkserviceService) {

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
      this.service.getdanhsachsanphamdabanquanlymobile().subscribe(value => {
        console.log(value)
        value.forEach(element => {
          if (!this.tennhomsanpham.includes(element.nhomsanpham)) {
            this.tennhomsanpham.push(element.nhomsanpham)
          }
        });
        this.nhomsanpham = value.reduce(function (r, a) {
          r[a.nhomsanpham] = r[a.nhomsanpham] || [];
          r[a.nhomsanpham].push(a);
          return r;
        }, Object.create(null));
        console.log(this.nhomsanpham, this.tennhomsanpham)
        this.tennhomsanpham.forEach(value => {
          this.data.push({ "name": value, "value": this.nhomsanpham[value].length })
        })
        console.log(this.data)
        this.single=this.data
      })
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
