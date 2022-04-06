import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetworkserviceService } from '../../../services/networkservice.service';

@Component({
  selector: 'ngx-smart-table-tao-don-hang-cho-dai-ly',
  templateUrl: './smart-table-tao-don-hang-cho-dai-ly.component.html',
  styleUrls: ['./smart-table-tao-don-hang-cho-dai-ly.component.scss']
})
export class SmartTableTaoDonHangChoDaiLyComponent implements OnInit {

  sanphams
  users
  masanphammoi = ''
  sodienthoaikhachhangselect = ''
  rolekhachhang
  gia
  tenkhachhang
  constructor(private service: NetworkserviceService, private router: Router) {
    this.service.getdanhsachdonhangtemp().subscribe(val => {

      this.sanphams = val.filter(val => val.trangthaidonhang == 'dangxuly' && val.soluong == '1')
    });
    this.service.getalluser().subscribe(val => {

      this.users = val.filter(val => val.hoten != 'admin')
    });
  }
  ngOnInit(): void {

  }
  click(item) {

    this.service.deletedanhsachdonhang([item.madonhang]
    )
      .subscribe(data => {
        // this.service.getdanhsachdonhangtheonguoimua([localStorage.getItem('sodienthoai')]).subscribe(val => {

        //   this.sanphams = val
        // });
        this.service.getdanhsachdonhangtemp().subscribe(val => {

          this.sanphams = val.filter(val => val.trangthaidonhang == 'dangxuly' && val.soluong == '1')
        });
        console.log("POST Request is successful ", data);
      },
        error => {
          console.log("Error", error);

        })
  }

  selectOption(event) {
    console.log(event.target.value)
    this.sodienthoaikhachhangselect = event.target.value
  }
  taodonhang() {
    this.rolekhachhang = this.users.filter(val => val.dienthoai == this.sodienthoaikhachhangselect)[0].quyenhan
    this.tenkhachhang = this.users.filter(val => val.dienthoai == this.sodienthoaikhachhangselect)[0].hoten
    if (this.sodienthoaikhachhangselect != '' && this.masanphammoi != '') {
      if (!this.sanphams.some(e => e.masanpham == this.masanphammoi)) {
        this.service.getquanlymaytheomasanpham([this.masanphammoi]).subscribe(val => {
          if (this.rolekhachhang == 'dailycap1') {
            this.gia = val[0].gia1
          }
          if (this.rolekhachhang == 'dailycap2') {
            this.gia = val[0].gia2
          }
          this.service.danhsachdonhangtemp([
            val[0].loaimay,
            val[0].doimay,
            val[0].manhinh,
            val[0].chip,
            val[0].tanso,
            val[0].ram,
            val[0].ocung,
            val[0].nhom,
            this.gia,
            '1',
            this.sodienthoaikhachhangselect,
            this.tenkhachhang,
            'dangxuly',
            new Date(),
            this.masanphammoi,
            val[0].imei,
            val[0].mausac,
            val[0].chitiet,
            val[0].chitietdacbiet
          ]).subscribe(data => {
            alert("Thêm mới sản phẩm cho đại lý thành công")
            this.service.getdanhsachdonhangtheonguoimua([this.sodienthoaikhachhangselect]).subscribe(val => {

              this.sanphams = val
            });
            console.log("POST Request is successful ", data);
          },
            error => {
              console.log("Error", error);

            })

          console.log("POST Request is successful ", val);
        },
          error => {
            console.log("Error", error);

          })
      }
      else{
        alert('Mã sản phẩm đã tồn tại')
      }
    }
  }
  // huydonhang() {
  //   if(window.confirm('Bạn có chắc hủy toàn bộ đơn hàng này không???')){
  //     this.service.deletedanhsachdonhang([this.sodienthoaikhachhangselect])
  //   }

  // }
  dongydonhang() {
    const madh = 'DH' + Math.floor(Math.random() * 100000000)
    this.service.getdanhsachdonhangtheonguoimua([this.sodienthoaikhachhangselect]).subscribe(data => {
      data.forEach(element => {
        this.service.danhsachdonhang([
          element.loaimay,
          element.doimay,
          element.manhinh,
          element.chip,
          element.tanso,
          element.ram,
          element.ocung,
          element.nhom,
          element.gia,
          '',
          element.sodienthoaikhachhang,
          element.tenkhachhang,
          'dangxuly',
          new Date(),
          element.masanpham,
          madh,
          element.imei,
          element.mausac,
          element.chitiet,
          element.chitietdacbiet
        ]).subscribe(data => {
          this.service.deletedanhsachdonhang([element.madonhang]).subscribe(data => {

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
      });
      alert("Tạo mới đơn hàng cho đại lý thành công")
      console.log("POST Request is successful ", data);
      this.router.navigateByUrl('/pages/tables/smart-table-don-hang-dang-xu-ly-admin')
    },
      error => {
        console.log("Error", error);

      })
  }
}
