import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NetworkserviceService } from '../../../services/networkservice.service';
import * as XLSX from 'xlsx';
import { ActivatedRoute, Router } from '@angular/router';
import { GENERAL_PAGES } from '../../../@core/constant/pages.constant';
import { PRODUCT_COLORS, PRODUCT_STATUSES } from '../../../@core/constant/common';
import { KaiService } from '../../../services/kai.service';

@Component({
  selector: 'ngx-danhsachsanpham',
  templateUrl: './danhsachsanpham.component.html',
  styleUrls: ['./danhsachsanpham.component.scss']
})
export class DanhsachsanphamComponent implements OnInit {
  position = 'WAREHOUSE'
  fileName = 'DanhSachSanPham.xlsx';
  source: LocalDataSource = new LocalDataSource();
  data = []
  datadungluong = []
  datanhomsanpham = []
  datatensanpham = []
  datamau = []
  dataloaisanpham = []
  dataphienban = []
  danhsachidsanpham = []
  taomoisanpham = false
  role


  datanhomsanphamselect = [
    { value: '', title: '' },
  ];


  datamauselect = PRODUCT_COLORS.map(x => {
    return {
      value: x.value.toString(),
      title: x.label,
    };
  });

  datatrangthaiselect = PRODUCT_STATUSES.map(x => {
    return {
      value: x.value.toString(),
      title: x.label,
    };
  });

  isAscendingOrder: boolean;
  orderIcon = 'arrow-downward-outline';


  // datanhomsanphamtaomoi = ""
  // datatensanphamtaomoi = ""
  // datadungluongtaomoi = ""
  // dataloaisanphamtaomoi = ""
  // dataphienbantaomoi = ""
  // dataimeitaomoi = ""

  dataselectnhomsanpham = ""
  dataselecttensanpham = ""
  dataselectdungluong = ""
  dataselectloaisanpham = ""
  dataselectphienban = ""

  datafilter = []

  tensp = ""
  imeisp = ""
  mausacsp = ""
  tinhtrangsp = ""
  nhomsp = ""

  datadaxuly
  transferProductPage = GENERAL_PAGES.TRANSFER_PRODUCTS;

  danhsachidsanphamfull=[]
  constructor(private service: NetworkserviceService,
    private kaiService: KaiService,
    private router: Router) {


    this.datamauselect.unshift({ value: '', title: '' });
    this.datatrangthaiselect.unshift({ value: '', title: '' });

    this.kaiService.getProductGroups().subscribe((productGroups) => {
      this.datanhomsanphamselect = productGroups.map(x => {
        return {
          value: x.name,
          title: x.name,
        };
      });
      this.datanhomsanphamselect.unshift({ value: '', title: '' });
    });


    this.service.getsanphamtonkhokhohang().subscribe(val => {
      this.source.load(val);
      this.data = val
      val.forEach(element => {
        this.danhsachidsanphamfull.push(element.id)
        // element.imei = element.imei.replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",")
        // this.data.push(element)
        // if (element.nhomsanpham != '' && element.nhomsanpham != null && !this.datanhomsanpham.some(val => val.value == element.nhomsanpham)) {
        //   this.datanhomsanpham.push({ "value": element.nhomsanpham, "title": element.nhomsanpham })
        //   // this.datanhomsanpham = [...new Set(this.datanhomsanpham)];
        // }

        if (element.name != '' && element.name != null && !this.datatensanpham.some(val => val.value == element.name)) {
          this.datatensanpham.push({ "value": element.name, "title": element.name })
          // this.datatensanpham = [...new Set(this.datatensanpham)];
        }

        if (element.dungluong != '' && element.dungluong != null && !this.datadungluong.some(val => val.value == element.dungluong)) {
          this.datadungluong.push({ "value": element.dungluong, "title": element.dungluong })
          // this.datadungluong = [...new Set(this.datadungluong)];
        }

        if (element.loaisanpham != '' && element.loaisanpham != null && !this.dataloaisanpham.some(val => val.value == element.loaisanpham)) {
          this.dataloaisanpham.push({ "value": element.loaisanpham, "title": element.loaisanpham })
          // this.dataloaisanpham = [...new Set(this.dataloaisanpham)];
        }

        if (element.phienban != '' && element.phienban != null && !this.dataphienban.some(val => val.value == element.phienban)) {
          this.dataphienban.push({ "value": element.phienban, "title": element.phienban })
          // this.dataphienban = [...new Set(this.dataphienban)];
        }

      });
      this.datafilter = this.data
    });

  

  }



  ngOnInit(): void {
    this.role = localStorage.getItem('role')
    if (!(this.role == 'admin' || this.role == 'kho')) {
      console.log("test")
      this.router.navigateByUrl('/pages/tables/login')
    }

  }


  onSortData(event) {
    event.preventDefault();
    this.isAscendingOrder = !this.isAscendingOrder;
    if (this.isAscendingOrder) {
      this.orderIcon = 'arrow-upward-outline';
    } else {
      this.orderIcon = 'arrow-downward-outline';
    }
    this.data.sort((a, b) => {
      if (this.isAscendingOrder) {
        if (a.quantity < b.quantity) {
          return 1;
        }
        if (a.quantity > b.quantity) {
          return -1;
        }
        return 0;
      } else {
        if (a.quantity > b.quantity) {
          return 1;
        }
        if (a.quantity < b.quantity) {
          return -1;
        }
        return 0;
      }
    });
    this.datafilter = this.data;
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

  selectLoaiMay(value) { }

  delete(value) {
    console.log(value)
    if (window.confirm('Bạn có chắc muốn xóa không ????')) {
      this.service.deletesanphamtonkho(
        [
          value
        ]
      )
        .subscribe(data => {

          this.service.getsanphamtonkhokhohang().subscribe(val => {
            // this.source.load(val);
            this.data = val
          });
          console.log("POST Request is successful ", data);
        },
          error => {
            console.log("Error", error);

          })
    }
  }

  edit(value) {
    this.router.navigate(["/pages/tables/sanpham", value]);
  }

  select(value) {
    if (this.danhsachidsanpham.length == 0) {
      this.danhsachidsanpham.push(value)
    }
    else {
      if (this.danhsachidsanpham.includes(value)) {
        this.danhsachidsanpham = this.danhsachidsanpham.filter(item => item !== value);
      }
      else {
        this.danhsachidsanpham.push(value)
      }
    }
    console.log(this.danhsachidsanpham)
  }


  taomoi() {
    this.taomoisanpham = true
  }
  canceltaomoi() {
    this.taomoisanpham = false
  }


  // selectnhomsanpham(event) {
  //   console.log('event.target.value', event.target.value)
  //   this.dataselectnhomsanpham = event.target.value
  //   this.data = this.datafilter
  //   if (this.dataselectnhomsanpham != '' && this.dataselectnhomsanpham != 'default') {
  //     this.data = this.data.filter(val => val.nhomsanpham == this.dataselectnhomsanpham)
  //   }
  //   if (this.dataselecttensanpham != '' && this.dataselecttensanpham != 'default') {
  //     this.data = this.data.filter(val => val.tensanpham == this.dataselecttensanpham)
  //   }
  //   if (this.dataselectdungluong != '' && this.dataselectdungluong != 'default') {
  //     this.data = this.data.filter(val => val.dungluong == this.dataselectdungluong)
  //   }
  //   if (this.dataselectloaisanpham != '' && this.dataselectloaisanpham != 'default') {
  //     this.data = this.data.filter(val => val.loaisanpham == this.dataselectloaisanpham)
  //   }
  //   if (this.dataselectphienban != '' && this.dataselectphienban != 'default') {
  //     this.data = this.data.filter(val => val.phienban == this.dataselectphienban)
  //   }
  // }
  // selecttensanpham(event) {
  //   console.log('event.target.value', event.target.value)
  //   this.dataselecttensanpham = event.target.value
  //   this.data = this.datafilter
  //   if (this.dataselectnhomsanpham != '' && this.dataselectnhomsanpham != 'default') {
  //     this.data = this.data.filter(val => val.nhomsanpham == this.dataselectnhomsanpham)
  //   }
  //   if (this.dataselecttensanpham != '' && this.dataselecttensanpham != 'default') {
  //     this.data = this.data.filter(val => val.tensanpham == this.dataselecttensanpham)
  //   }
  //   if (this.dataselectdungluong != '' && this.dataselectdungluong != 'default') {
  //     this.data = this.data.filter(val => val.dungluong == this.dataselectdungluong)
  //   }
  //   if (this.dataselectloaisanpham != '' && this.dataselectloaisanpham != 'default') {
  //     this.data = this.data.filter(val => val.loaisanpham == this.dataselectloaisanpham)
  //   }
  //   if (this.dataselectphienban != '' && this.dataselectphienban != 'default') {
  //     this.data = this.data.filter(val => val.phienban == this.dataselectphienban)
  //   }
  // }
  // selectdungluong(event) {
  //   console.log('event.target.value', event.target.value)
  //   this.dataselectdungluong = event.target.value
  //   this.data = this.datafilter
  //   if (this.dataselectnhomsanpham != '' && this.dataselectnhomsanpham != 'default') {
  //     this.data = this.data.filter(val => val.nhomsanpham == this.dataselectnhomsanpham)
  //   }
  //   if (this.dataselecttensanpham != '' && this.dataselecttensanpham != 'default') {
  //     this.data = this.data.filter(val => val.tensanpham == this.dataselecttensanpham)
  //   }
  //   if (this.dataselectdungluong != '' && this.dataselectdungluong != 'default') {
  //     this.data = this.data.filter(val => val.dungluong == this.dataselectdungluong)
  //   }
  //   if (this.dataselectloaisanpham != '' && this.dataselectloaisanpham != 'default') {
  //     this.data = this.data.filter(val => val.loaisanpham == this.dataselectloaisanpham)
  //   }
  //   if (this.dataselectphienban != '' && this.dataselectphienban != 'default') {
  //     this.data = this.data.filter(val => val.phienban == this.dataselectphienban)
  //   }
  // }
  // selectloaisanpham(event) {
  //   console.log('event.target.value', event.target.value)
  //   this.dataselectloaisanpham = event.target.value
  //   this.data = this.datafilter
  //   if (this.dataselectnhomsanpham != '' && this.dataselectnhomsanpham != 'default') {
  //     this.data = this.data.filter(val => val.nhomsanpham == this.dataselectnhomsanpham)
  //   }
  //   if (this.dataselecttensanpham != '' && this.dataselecttensanpham != 'default') {
  //     this.data = this.data.filter(val => val.tensanpham == this.dataselecttensanpham)
  //   }
  //   if (this.dataselectdungluong != '' && this.dataselectdungluong != 'default') {
  //     this.data = this.data.filter(val => val.dungluong == this.dataselectdungluong)
  //   }
  //   if (this.dataselectloaisanpham != '' && this.dataselectloaisanpham != 'default') {
  //     this.data = this.data.filter(val => val.loaisanpham == this.dataselectloaisanpham)
  //   }
  //   if (this.dataselectphienban != '' && this.dataselectphienban != 'default') {
  //     this.data = this.data.filter(val => val.phienban == this.dataselectphienban)
  //   }
  // }
  // selectphienban(event) {
  //   console.log('event.target.value', event.target.value)
  //   this.dataselectphienban = event.target.value
  //   this.data = this.datafilter
  //   if (this.dataselectnhomsanpham != '' && this.dataselectnhomsanpham != 'default') {
  //     this.data = this.data.filter(val => val.nhomsanpham == this.dataselectnhomsanpham)
  //   }
  //   if (this.dataselecttensanpham != '' && this.dataselecttensanpham != 'default') {
  //     this.data = this.data.filter(val => val.tensanpham == this.dataselecttensanpham)
  //   }
  //   if (this.dataselectdungluong != '' && this.dataselectdungluong != 'default') {
  //     this.data = this.data.filter(val => val.dungluong == this.dataselectdungluong)
  //   }
  //   if (this.dataselectloaisanpham != '' && this.dataselectloaisanpham != 'default') {
  //     this.data = this.data.filter(val => val.loaisanpham == this.dataselectloaisanpham)
  //   }
  //   if (this.dataselectphienban != '' && this.dataselectphienban != 'default') {
  //     this.data = this.data.filter(val => val.phienban == this.dataselectphienban)
  //   }
  // }


  filterdanhsachsanpham() {
    console.log('this.datafilter',this.datafilter)
    console.log('this.nhomsp', this.nhomsp)
    console.log('this.mausacsp', this.mausacsp)
    console.log('this.tinhtrangsp', this.tinhtrangsp)
    console.log('this.data',this.data)
    this.data = this.datafilter
    if (this.nhomsp != "") {
      this.data = this.data.filter(data => data.group_name.toLowerCase().includes(this.nhomsp.toLowerCase()))
    }
    if (this.tensp != "") {
      this.data = this.data.filter(data => data.name.toLowerCase().includes(this.tensp.toLowerCase()))
    }
    if (this.imeisp != "") {
      this.data = this.data.filter(data => data.imei.toLowerCase().includes(this.imeisp.toLowerCase()))
    }
    if (this.mausacsp != "") {
      this.data = this.data.filter(data => data.color.toLowerCase().includes(this.mausacsp.toLowerCase()))
    }
    if (this.tinhtrangsp != "") {
      this.data = this.data.filter(data => data.status.toLowerCase().includes(this.tinhtrangsp.toLowerCase()))
    }
    if (this.tinhtrangsp == "NEW") {
      this.data = this.data.filter(data => data.status.toLowerCase() == this.tinhtrangsp.toLowerCase())
    }
    if (this.tensp == "" && this.imeisp == "" && this.mausacsp == "" && this.tinhtrangsp == "" && this.nhomsp == "") {
      this.data = this.datafilter
    }
  }







  taosanpham() { }

  selectall(event){
    this.danhsachidsanpham = this.danhsachidsanphamfull
    console.log('event',event.target.value)
    console.log('danhsachidsanpham',this.danhsachidsanpham)
  }
}
