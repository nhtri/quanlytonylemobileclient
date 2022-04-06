import { Component, OnInit } from '@angular/core';
import { NetworkserviceService } from '../../../services/networkservice.service';

@Component({
  selector: 'ngx-smart-table-don-hang-dang-xu-ly',
  templateUrl: './smart-table-don-hang-dang-xu-ly.component.html',
  styleUrls: ['./smart-table-don-hang-dang-xu-ly.component.scss']
})
export class SmartTableDonHangDangXuLyComponent implements OnInit {

  sanphams = []
  constructor(private service: NetworkserviceService) {
    this.service.getdanhsachdonhang().subscribe(val => {
  
      this.sanphams = val.filter(val=>val.trangthaidonhang == 'dangxuly')
    });
  
  }
  ngOnInit(): void {

  }
  click(item) {
   
    this.service.deletedanhsachdonhang([item.madonhang]
    )
      .subscribe(data => {
        this.service.getdanhsachdonhangtheonguoimua([localStorage.getItem('sodienthoai')]).subscribe(val => {
  
          this.sanphams = val
        });
        console.log("POST Request is successful ", data);
      },
        error => {
          console.log("Error", error);

        })
  }
  clickmuahang(item){

 
      this.service.updatetrangthaidonhang(['thanhcong',item.madonhang]
      )
        .subscribe(data => {
        
          console.log("POST Request is successful ", data);
        },
          error => {
            console.log("Error", error);
  
          })
  }

}
