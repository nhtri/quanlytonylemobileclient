import { Component, OnInit } from '@angular/core';
import { NetworkserviceService } from '../../../services/networkservice.service';

@Component({
  selector: 'ngx-smart-table-da-xu-ly-nguoi-mua',
  templateUrl: './smart-table-da-xu-ly-nguoi-mua.component.html',
  styleUrls: ['./smart-table-da-xu-ly-nguoi-mua.component.scss']
})
export class SmartTableDaXuLyNguoiMuaComponent implements OnInit {

  sanphams = []
  constructor(private service: NetworkserviceService) {
    this.service.getdanhsachdonhangtheonguoimuareal([localStorage.getItem('sodienthoai')]).subscribe(val => {
  
      this.sanphams = [...new Map(val.map(item => [item.madonhang, item])).values()].reverse()

      for(let i=0;i<this.sanphams.length;i++){
        this.service.gettonggiatienreal([this.sanphams[i].madonhang]).subscribe(val => {
          // this.tongtiens.push(val)
          console.log('val',val)
          this.sanphams[i] = {...this.sanphams[i],...{'tongtien':val[0]['total']}}
          this.sanphams[i] = {...this.sanphams[i],...{'tongsanpham':val[0]['totalitem']}}
          // console.log(this.tongtiens,val)
        })}
        
    });
  
  }

  ngOnInit(): void {
  }

}