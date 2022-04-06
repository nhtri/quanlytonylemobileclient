import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetworkserviceService } from '../../../services/networkservice.service';

@Component({
  selector: 'ngx-smart-table-danh-sach-don-hang-moi',
  templateUrl: './smart-table-danh-sach-don-hang-moi.component.html',
  styleUrls: ['./smart-table-danh-sach-don-hang-moi.component.scss']
})
export class SmartTableDanhSachDonHangMoiComponent implements OnInit {

  gia
  sanphams = []
  constructor(private service: NetworkserviceService,private router:Router) {
    this.service.getdanhsachdonhangtheonguoimua([localStorage.getItem('sodienthoai')]).subscribe(val => {

      this.sanphams = [...new Map(val.map(item => [item.masanpham, item])).values()]
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
  clickmuahang() {
    const madh = 'DH' + Math.floor(Math.random() * 100000000)
    this.sanphams.forEach(element => {
      // if (localStorage.getItem('role') == 'dailycap1') {
      //   this.gia = element.gia1
      // }
      // if (localStorage.getItem('role') == 'dailycap2') {
      //   this.gia = element.gia2
      // }
      this.service.danhsachdonhang(
        [
          element.loaimay, element.doimay, element.manhinh, element.chip, element.tanso, element.ram, element.ocung, element.nhom, element.gia, '0',
          localStorage.getItem('sodienthoai'), localStorage.getItem('hoten'), 'dangxuly',
          new Date(), element.masanpham, madh,element.imei,element.mausac,element.chitiet,element.chitietdacbiet
        ]
      )
        .subscribe(data => {


          this.service.deletedanhsachdonhang([element.madonhang]
          )
            .subscribe(data => {

              console.log("POST Request is successful ", data);
            },
              error => {
                console.log("Error", error);

              })

          console.log("POST Request is successful ", data);
        },
          error => {
            console.log("Error", error);

          })
     
    })
    alert("Đơn Hàng Đang Được Xử lý. Vui Lòng Đợi Kết Quả")
    this.router.navigateByUrl('/pages/tables/smart-table-don-hang-dang-xu-ly-nguoi-mua')
  }
}