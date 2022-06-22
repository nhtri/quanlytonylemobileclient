import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'ngx-danhsachsanphamkhachhangdamua',
  templateUrl: './danhsachsanphamkhachhangdamua.component.html',
  styleUrls: ['./danhsachsanphamkhachhangdamua.component.scss']
})
export class DanhsachsanphamkhachhangdamuaComponent implements OnInit {

  constructor(private router:Router) {
    console.log(this.router.getCurrentNavigation().extras.state['sodienthoai'])
   }

  ngOnInit(): void {
   
  }

}
