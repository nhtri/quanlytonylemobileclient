import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { NetworkserviceService } from '../../../services/networkservice.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'ngx-smart-table-don-hang-cu-detail',
  templateUrl: './smart-table-don-hang-cu-detail.component.html',
  styleUrls: ['./smart-table-don-hang-cu-detail.component.scss']
})
export class SmartTableDonHangCuDetailComponent implements OnInit {
  fileName = '.xlsx';
  source: LocalDataSource = new LocalDataSource();
  data
  constructor(private route: ActivatedRoute, private service: NetworkserviceService, private router: Router) { }
  sanphams
  madonhangparam
  capnhatdanhsachdonhang
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params.id[0]); // { orderby: "price" }
        if (params.id[0] == 'D') {
          this.router.navigateByUrl('/')
        }
        this.service.getdanhsachdonhangtheomadonhang([params.id[0]]).subscribe(val => {
          this.sanphams = [...new Map(val.map(item => [item.madonhang, item])).values()]
          this.source.load(val)
          this.data = val
          this.madonhangparam = params.id[0]
          console.log(this.sanphams)
          for (let i = 0; i < this.sanphams.length; i++) {
            this.service.gettonggiatienreal([this.sanphams[i].madonhang]).subscribe(val => {
              // this.tongtiens.push(val)
              console.log('val', val)
              this.sanphams[i] = { ...this.sanphams[i], ...{ 'tongtien': val[0]['total'] } }
              this.sanphams[i] = { ...this.sanphams[i], ...{ 'tongsanpham': val[0]['totalitem'] } }
              // console.log(this.tongtiens,val)
            })
          }
        });
      }
      );
  }


  settings = {
    actions: false,
  
    pager: false,
    columns: {
      masanpham: {
        title: 'Mã Sản Phẩm',
        type: 'string',
        width: '300px'
      },
      loaimay: {
        title: 'Loại Máy',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: []
          }
        }
        ,
        width: '200px'
      },
      doimay: {
        title: 'Đời Máy',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
            ]
          }
        }
        ,
        width: '200px'
      },
      manhinh: {
        title: 'Màn Hình',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
            ]
          }
        }
      },
      chip: {
        title: 'Chip',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
            ]
          }
        },
      },
      tanso: {
        title: 'Tần số',
        type: 'string'
      },
      ram: {
        title: 'Ram',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
            ]
          }
        },
      },
      ocung: {
        title: 'Ổ cứng',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
            ]
          }
        },
      },
      nhom: {
        title: 'Nhóm',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              { value: 'A', title: 'A' },
              { value: 'B', title: 'B' },
              { value: 'C', title: 'C' },
              { value: 'D', title: 'D' },
            ]
          }
        },
      },
      imei: {
        title: 'IMEI',
        type: 'string'
      },
      gia: {
        title: 'Giá',
        type: 'string'
      },
      mausac: {
        title: 'Màu Sắc',
        type: 'string'
      },
      chitiet: {
        title: 'Chi Tiết',
        type: 'string'
      },
      chitietdacbiet: {
        title: 'Chi Tiết Đặc Biệt',
        type: 'string'
      },
    },


  };

  xuatdonhang(){
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb,'DonHang_'+this.madonhangparam +this.fileName);
  }








 
}
