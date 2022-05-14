import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NetworkserviceService } from '../../../services/networkservice.service';
import * as XLSX from 'xlsx';
import { ActivatedRoute, Router } from '@angular/router';
import { GENERAL_PAGES } from '../../../@core/constant/pages.constant';

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
  constructor(private service: NetworkserviceService, private router: Router) {

    // this.service.getsanphamtonkho().subscribe(val => {
    //   // this.source.load(val);
    //   val.forEach(element => {
    //     element.imei = element.imei.replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",").replace(",,", ",")
    //     this.data.push(element)
    //     if (element.nhomsanpham != '' && element.nhomsanpham != null && !this.datanhomsanpham.some(val => val.value == element.nhomsanpham)) {
    //       this.datanhomsanpham.push({ "value": element.nhomsanpham, "title": element.nhomsanpham })
    //       // this.datanhomsanpham = [...new Set(this.datanhomsanpham)];
    //     }

    //     if (element.tensanpham != '' && element.tensanpham != null && !this.datatensanpham.some(val => val.value == element.tensanpham)) {
    //       this.datatensanpham.push({ "value": element.tensanpham, "title": element.tensanpham })
    //       // this.datatensanpham = [...new Set(this.datatensanpham)];
    //     }

    //     if (element.dungluong != '' && element.dungluong != null && !this.datadungluong.some(val => val.value == element.dungluong)) {
    //       this.datadungluong.push({ "value": element.dungluong, "title": element.dungluong })
    //       // this.datadungluong = [...new Set(this.datadungluong)];
    //     }

    //     if (element.loaisanpham != '' && element.loaisanpham != null && !this.dataloaisanpham.some(val => val.value == element.loaisanpham)) {
    //       this.dataloaisanpham.push({ "value": element.loaisanpham, "title": element.loaisanpham })
    //       // this.dataloaisanpham = [...new Set(this.dataloaisanpham)];
    //     }

    //     if (element.phienban != '' && element.phienban != null && !this.dataphienban.some(val => val.value == element.phienban)) {
    //       this.dataphienban.push({ "value": element.phienban, "title": element.phienban })
    //       // this.dataphienban = [...new Set(this.dataphienban)];
    //     }

    //   });
    //   this.datafilter = this.data
    // });


    this.service.getsanphamtonkhokhohang().subscribe(val => {
      this.source.load(val);
      this.data = val
      val.forEach(element => {
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

    // this.service.getsanphamtonkho().subscribe(val => {
    //   let data = val.map(val => val.nhomsanpham)
    //   data.forEach(data => {
    //     if (data != '' || data != null)
    //       this.datanhomsanpham.push({ "value": data, "title": data })
    //   });
    //   console.log(this.datanhomsanpham)
    //   // this.settings.columns.nhomsanpham.editor.config.list = this.datanhomsanpham
    //   // this.settings = Object.assign({}, this.settings);

    // })

    // this.service.getsanphamtonkho().subscribe(val => {
    //   let data = val.map(val => val.tensanpham)
    //   data.forEach(data => {
    //     if (data != '' || data != null)
    //       this.datatensanpham.push({ "value": data, "title": data })
    //   });
    //   // this.settings.columns.tensanpham.editor.config.list = this.datatensanpham
    //   // this.settings = Object.assign({}, this.settings);

    // })

    // this.service.getsanphamtonkho().subscribe(val => {
    //   let data = val.map(val => val.dungluong)
    //   data.forEach(data => {
    //     if (data != '' || data != null)
    //       this.datadungluong.push({ "value": data, "title": data })
    //   });
    //   // this.settings.columns.dungluong.editor.config.list = this.datadungluong
    //   // this.settings = Object.assign({}, this.settings);

    // })

    // this.service.getsanphamtonkho().subscribe(val => {
    //   let data = val.map(val => val.mau)
    //   data.forEach(data => {
    //     if (data != '' || data != null)
    //       this.datamau.push({ "value": data, "title": data })
    //   });
    //   // this.settings.columns.mau.editor.config.list = this.datamau
    //   // this.settings = Object.assign({}, this.settings);

    // })

    // this.service.getsanphamtonkho().subscribe(val => {
    //   let data = val.map(val => val.loaisanpham)
    //   data.forEach(data => {
    //     if (data != '' || data != null)
    //       this.dataloaisanpham.push({ "value": data, "title": data })
    //   });
    //   // this.settings.columns.loaisanpham.editor.config.list = this.dataloaisanpham
    //   // this.settings = Object.assign({}, this.settings);

    // })

    // this.service.getsanphamtonkho().subscribe(val => {
    //   let data = val.map(val => val.phienban)
    //   data.forEach(data => {
    //     if (data != '' || data != null)
    //       this.dataphienban.push({ "value": data, "title": data })
    //   });
    //   // this.settings.columns.phienban.editor.config.list = this.dataphienban
    //   // this.settings = Object.assign({}, this.settings);

    // })

  }



  ngOnInit(): void {
    this.role = localStorage.getItem('role')
    if (!(this.role == 'admin' || this.role =='kho')) {
      console.log("test")
      this.router.navigateByUrl('/pages/tables/login')
    }

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

  // selecttaomoinhomsanpham(value) {
  //   this.datanhomsanphamtaomoi = value
  //   console.log('selecttaomoinhomsanpham', value)
  // }
  // selecttaomoitensanpham(value) {
  //   this.datatensanphamtaomoi = value
  // }
  // selecttaomoidungluong(value) {
  //   this.datadungluongtaomoi = value
  // }
  // selecttaomoiloaisanpham(value) {
  //   this.dataloaisanphamtaomoi = value
  // }
  // selecttaomoiphienban(value) {
  //   this.dataphienbantaomoi = value
  // }
  // taosanphammoi() {
  //   this.service.sanphamtonkho([
  //     this.datanhomsanphamtaomoi,
  //     this.datatensanphamtaomoi,
  //     this.datadungluongtaomoi,
  //     this.dataloaisanphamtaomoi,
  //     this.dataphienbantaomoi,
  //     this.dataimeitaomoi
  //   ]).subscribe(data => {
  //     this.taomoisanpham = false
  //     this.service.getsanphamtonkho().subscribe(val => {
  //       // this.source.load(val);
  //       this.data = val
  //     });
  //     console.log("POST Request is successful ", data);
  //   },
  //     error => {
  //       console.log("Error", error);

  //     })
  // }
  selectnhomsanpham(event) {
    console.log('event.target.value',event.target.value)
    this.dataselectnhomsanpham = event.target.value
    this.data = this.datafilter
    if (this.dataselectnhomsanpham != '' && this.dataselectnhomsanpham != 'default') {
      this.data = this.data.filter(val => val.nhomsanpham == this.dataselectnhomsanpham)
    }
    if (this.dataselecttensanpham != '' && this.dataselecttensanpham != 'default') {
      this.data = this.data.filter(val => val.tensanpham == this.dataselecttensanpham)
    }
    if (this.dataselectdungluong != '' && this.dataselectdungluong != 'default') {
      this.data = this.data.filter(val => val.dungluong == this.dataselectdungluong)
    }
    if (this.dataselectloaisanpham != '' && this.dataselectloaisanpham != 'default') {
      this.data = this.data.filter(val => val.loaisanpham == this.dataselectloaisanpham)
    }
    if (this.dataselectphienban != '' && this.dataselectphienban != 'default') {
      this.data = this.data.filter(val => val.phienban == this.dataselectphienban)
    }
  }
  selecttensanpham(event) {
    console.log('event.target.value',event.target.value)
    this.dataselecttensanpham = event.target.value
    this.data = this.datafilter
    if (this.dataselectnhomsanpham != '' && this.dataselectnhomsanpham != 'default') {
      this.data = this.data.filter(val => val.nhomsanpham == this.dataselectnhomsanpham)
    }
    if (this.dataselecttensanpham != '' && this.dataselecttensanpham != 'default') {
      this.data = this.data.filter(val => val.tensanpham == this.dataselecttensanpham)
    }
    if (this.dataselectdungluong != '' && this.dataselectdungluong != 'default') {
      this.data = this.data.filter(val => val.dungluong == this.dataselectdungluong)
    }
    if (this.dataselectloaisanpham != '' && this.dataselectloaisanpham != 'default') {
      this.data = this.data.filter(val => val.loaisanpham == this.dataselectloaisanpham)
    }
    if (this.dataselectphienban != '' && this.dataselectphienban != 'default') {
      this.data = this.data.filter(val => val.phienban == this.dataselectphienban)
    }
  }
  selectdungluong(event) {
    console.log('event.target.value',event.target.value)
    this.dataselectdungluong = event.target.value
    this.data = this.datafilter
    if (this.dataselectnhomsanpham != '' && this.dataselectnhomsanpham != 'default') {
      this.data = this.data.filter(val => val.nhomsanpham == this.dataselectnhomsanpham)
    }
    if (this.dataselecttensanpham != '' && this.dataselecttensanpham != 'default') {
      this.data = this.data.filter(val => val.tensanpham == this.dataselecttensanpham)
    }
    if (this.dataselectdungluong != '' && this.dataselectdungluong != 'default') {
      this.data = this.data.filter(val => val.dungluong == this.dataselectdungluong)
    }
    if (this.dataselectloaisanpham != '' && this.dataselectloaisanpham != 'default') {
      this.data = this.data.filter(val => val.loaisanpham == this.dataselectloaisanpham)
    }
    if (this.dataselectphienban != '' && this.dataselectphienban != 'default') {
      this.data = this.data.filter(val => val.phienban == this.dataselectphienban)
    }
  }
  selectloaisanpham(event) {
    console.log('event.target.value',event.target.value)
    this.dataselectloaisanpham = event.target.value
    this.data = this.datafilter
    if (this.dataselectnhomsanpham != '' && this.dataselectnhomsanpham != 'default') {
      this.data = this.data.filter(val => val.nhomsanpham == this.dataselectnhomsanpham)
    }
    if (this.dataselecttensanpham != '' && this.dataselecttensanpham != 'default') {
      this.data = this.data.filter(val => val.tensanpham == this.dataselecttensanpham)
    }
    if (this.dataselectdungluong != '' && this.dataselectdungluong != 'default') {
      this.data = this.data.filter(val => val.dungluong == this.dataselectdungluong)
    }
    if (this.dataselectloaisanpham != '' && this.dataselectloaisanpham != 'default') {
      this.data = this.data.filter(val => val.loaisanpham == this.dataselectloaisanpham)
    }
    if (this.dataselectphienban != '' && this.dataselectphienban != 'default') {
      this.data = this.data.filter(val => val.phienban == this.dataselectphienban)
    }
  }
  selectphienban(event) {
    console.log('event.target.value',event.target.value)
    this.dataselectphienban = event.target.value
    this.data = this.datafilter
    if (this.dataselectnhomsanpham != '' && this.dataselectnhomsanpham != 'default') {
      this.data = this.data.filter(val => val.nhomsanpham == this.dataselectnhomsanpham)
    }
    if (this.dataselecttensanpham != '' && this.dataselecttensanpham != 'default') {
      this.data = this.data.filter(val => val.tensanpham == this.dataselecttensanpham)
    }
    if (this.dataselectdungluong != '' && this.dataselectdungluong != 'default') {
      this.data = this.data.filter(val => val.dungluong == this.dataselectdungluong)
    }
    if (this.dataselectloaisanpham != '' && this.dataselectloaisanpham != 'default') {
      this.data = this.data.filter(val => val.loaisanpham == this.dataselectloaisanpham)
    }
    if (this.dataselectphienban != '' && this.dataselectphienban != 'default') {
      this.data = this.data.filter(val => val.phienban == this.dataselectphienban)
    }
  }


  filterdanhsachsanpham() {
    console.log(this.tensp,this.imeisp,this.mausacsp,this.tinhtrangsp)
    console.log(this.data)
    this.data = []
    if (this.nhomsp != "") {
      this.data = this.datafilter.filter(data => data.group_name.toLowerCase().includes(this.nhomsp.toLowerCase()))
    }
    if (this.tensp != "") {
      this.data = this.datafilter.filter(data => data.name.toLowerCase().includes(this.tensp.toLowerCase()))
    }
    if (this.imeisp != "") {
      this.data = this.datafilter.filter(data => data.imei.toLowerCase().includes(this.imeisp.toLowerCase()))
    }
    if (this.mausacsp != "") {
      this.data = this.datafilter.filter(data => data.color.toLowerCase().includes(this.mausacsp.toLowerCase()))
    }
    if (this.tinhtrangsp != "") {
      this.data = this.datafilter.filter(data => data.status.toLowerCase().includes(this.tinhtrangsp.toLowerCase()))
    }
    if(this.tensp==""&&this.imeisp==""&&this.mausacsp==""&&this.tinhtrangsp==""&&this.nhomsp==""){
      this.data = this.datafilter
    }
  }


  uploadExcel(e) {

    try {

      const fileName = e.target.files[0].name;

      import('xlsx').then(xlsx => {
        let workBook = null;
        let jsonData = null;
        const reader = new FileReader();
        // const file = ev.target.files[0];
        reader.onload = (event) => {
          const data = reader.result;
          workBook = xlsx.read(data, { type: 'binary' });
          jsonData = workBook.SheetNames.reduce((initial, name) => {
            const sheet = workBook.Sheets[name];
            initial[name] = xlsx.utils.sheet_to_json(sheet);
            return initial;
          }, {});

          console.log(this.getData(jsonData[Object.keys(jsonData)[0]]));
          this.datadaxuly = this.getData(jsonData[Object.keys(jsonData)[0]])
        };
        reader.readAsBinaryString(e.target.files[0]);
      });

    } catch (e) {
      console.log('error', e);
    }
  }


  getData(input) {
    var output = [];
    for (var i = 0; i < input.length; i++) {
      output.push({
        'masanpham': input[i]['Mã Sản Phẩm'],
        'loaimay': input[i]['Loại Máy'],
        'doimay': input[i]['Đời Máy'],
        'manhinh': input[i]['Màn Hình'],
        'chip': input[i]['Chip'],
        'tanso': input[i]['Tần số'],
        'ram': input[i]['Ram'],
        'ocung': input[i]['Ổ cứng'],
        'nhom': input[i]['Nhóm'],
        'imei': input[i]['IMEI'],
        'gia1': input[i]['Giá 1'],
        'gia2': input[i]['Giá 2'],
        'gia3': input[i]['Khách lẻ'],
        'chitiet': input[i]['Chi Tiết'],
        'mausac': input[i]['Màu Sắc'],
        'chitietdacbiet': input[i]['Chi Tiết Đặc Biệt'],
        'madonhang': '',
        'ngayban': '',
        'khohang': input[i]['Kho Hàng']
      });
    }
    return output;
  }

  taosanpham(){}
}
