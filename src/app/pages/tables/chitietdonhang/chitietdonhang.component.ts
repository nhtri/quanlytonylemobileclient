import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NetworkserviceService } from '../../../services/networkservice.service';

@Component({
  selector: 'ngx-chitietdonhang',
  templateUrl: './chitietdonhang.component.html',
  styleUrls: ['./chitietdonhang.component.scss']
})
export class ChitietdonhangComponent implements OnInit {
  data
  madonhang
  role
  constructor(private service: NetworkserviceService, private route: ActivatedRoute) {
this.role = localStorage.getItem('role')
    this.route.queryParams
      .subscribe(params => {
        console.log("params.id[0]", params.id[0])
        this.madonhang = params.id[0]
        this.service.getdanhsachdonhangquanlymobileid([params.id[0]]).subscribe(value => {
          this.service.getdanhsachsanphamdabanquanlymobiletransaction([value[0].transactionkey]).subscribe(data =>
            this.data = data)
        })

      })
  }

  ngOnInit(): void {
  }

}
