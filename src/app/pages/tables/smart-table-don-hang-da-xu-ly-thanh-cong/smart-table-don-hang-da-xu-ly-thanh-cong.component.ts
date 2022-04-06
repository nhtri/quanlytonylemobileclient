import { Component, OnInit } from '@angular/core';
import { NetworkserviceService } from '../../../services/networkservice.service';

@Component({
  selector: 'ngx-smart-table-don-hang-da-xu-ly-thanh-cong',
  templateUrl: './smart-table-don-hang-da-xu-ly-thanh-cong.component.html',
  styleUrls: ['./smart-table-don-hang-da-xu-ly-thanh-cong.component.scss']
})
export class SmartTableDonHangDaXuLyThanhCongComponent implements OnInit {
  show = false
    sanphams = []
    sanphamsdangxuly
    chitietdonhang
    users
    sodienthoaikhachhangselect
    madonhangfilter
    sanphamsdangxulytemp
    constructor(private service: NetworkserviceService) {
      this.service.getdanhsachdonhang().subscribe(val => {
    
        this.sanphams = [...new Map(val.map(item => [item.madonhang, item])).values()]
        this.sanphamsdangxuly = this.sanphams.filter(val=>val.trangthaidonhang == 'thanhcong').reverse()
        this.sanphamsdangxulytemp = this.sanphamsdangxuly
        for(let i=0;i<this.sanphamsdangxuly.length;i++){
          this.service.gettonggiatienreal([this.sanphamsdangxuly[i].madonhang]).subscribe(val => {
            // this.tongtiens.push(val)
            console.log('val',val)
            this.sanphamsdangxuly[i] = {...this.sanphamsdangxuly[i],...{'tongtien':val[0]['total']}}
            this.sanphamsdangxuly[i] = {...this.sanphamsdangxuly[i],...{'tongsanpham':val[0]['totalitem']}}
            // console.log(this.tongtiens,val)
          })
         }
      });
    
      this.service.getalluser().subscribe(val => {

        this.users = val.filter(val => val.hoten != 'admin')
      });
    }
  
    ngOnInit(): void {
    }
  
   
  
    click(sanpham){
      console.log('aaaa',sanpham)
      this.service.getdanhsachdonhangtheomadonhang([sanpham.madonhang]).subscribe(val => {
    
        this.chitietdonhang = val
        this.show=true
      });
    }

    selectOption(event) {
      this.sanphamsdangxuly = this.sanphamsdangxulytemp
      console.log(event.target.value)
      this.sodienthoaikhachhangselect = event.target.value
      this.sanphamsdangxuly = this.sanphamsdangxuly.filter(data=>data.tenkhachhang == this.sodienthoaikhachhangselect)
      for(let i=0;i<this.sanphamsdangxuly.length;i++){
        this.service.gettonggiatienreal([this.sanphamsdangxuly[i].madonhang]).subscribe(val => {
          // this.tongtiens.push(val)
          console.log('val',val)
          this.sanphamsdangxuly[i] = {...this.sanphamsdangxuly[i],...{'tongtien':val[0]['total']}}
          this.sanphamsdangxuly[i] = {...this.sanphamsdangxuly[i],...{'tongsanpham':val[0]['totalitem']}}
          // console.log(this.tongtiens,val)
        })
       }
       if(event.target.value == 'default'){
        this.sanphamsdangxuly = this.sanphamsdangxulytemp
        console.log(event.target.value)
        this.sodienthoaikhachhangselect = event.target.value
        for(let i=0;i<this.sanphamsdangxuly.length;i++){
          this.service.gettonggiatienreal([this.sanphamsdangxuly[i].madonhang]).subscribe(val => {
            // this.tongtiens.push(val)
            console.log('val',val)
            this.sanphamsdangxuly[i] = {...this.sanphamsdangxuly[i],...{'tongtien':val[0]['total']}}
            this.sanphamsdangxuly[i] = {...this.sanphamsdangxuly[i],...{'tongsanpham':val[0]['totalitem']}}
            // console.log(this.tongtiens,val)
          })
         }
       }
    }
    filtermadonhang(){
      console.log(this.madonhangfilter)
      this.sanphamsdangxuly = this.sanphamsdangxulytemp
      // console.log(event.target.value)
      // this.sodienthoaikhachhangselect = event.target.value
      this.sanphamsdangxuly = this.sanphamsdangxuly.filter(data=>data.madonhang.includes(this.madonhangfilter))
      for(let i=0;i<this.sanphamsdangxuly.length;i++){
        this.service.gettonggiatienreal([this.sanphamsdangxuly[i].madonhang]).subscribe(val => {
          // this.tongtiens.push(val)
          console.log('val',val)
          this.sanphamsdangxuly[i] = {...this.sanphamsdangxuly[i],...{'tongtien':val[0]['total']}}
          this.sanphamsdangxuly[i] = {...this.sanphamsdangxuly[i],...{'tongsanpham':val[0]['totalitem']}}
          // console.log(this.tongtiens,val)
        })
       }
       if(this.madonhangfilter == ''){
        this.sanphamsdangxuly = this.sanphamsdangxulytemp
        // console.log(event.target.value)
        // this.sodienthoaikhachhangselect = event.target.value
        for(let i=0;i<this.sanphamsdangxuly.length;i++){
          this.service.gettonggiatienreal([this.sanphamsdangxuly[i].madonhang]).subscribe(val => {
            // this.tongtiens.push(val)
            console.log('val',val)
            this.sanphamsdangxuly[i] = {...this.sanphamsdangxuly[i],...{'tongtien':val[0]['total']}}
            this.sanphamsdangxuly[i] = {...this.sanphamsdangxuly[i],...{'tongsanpham':val[0]['totalitem']}}
            // console.log(this.tongtiens,val)
          })
         }
        }
    }
  }