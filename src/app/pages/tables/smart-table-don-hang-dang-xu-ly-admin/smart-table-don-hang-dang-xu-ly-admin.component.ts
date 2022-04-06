import { Component, OnInit } from '@angular/core';
import { NetworkserviceService } from '../../../services/networkservice.service';

@Component({
  selector: 'ngx-smart-table-don-hang-dang-xu-ly-admin',
  templateUrl: './smart-table-don-hang-dang-xu-ly-admin.component.html',
  styleUrls: ['./smart-table-don-hang-dang-xu-ly-admin.component.scss']
})
export class SmartTableDonHangDangXuLyAdminComponent implements OnInit {
  show = false
  sanphams = []
  sanphamsdangxuly
  chitietdonhang
  tongtiens=[]
  constructor(private service: NetworkserviceService) {
    this.service.getdanhsachdonhang().subscribe(val => {

      this.sanphams = [...new Map(val.map(item => [item.madonhang, item])).values()]
      this.sanphamsdangxuly = this.sanphams.filter(val => val.trangthaidonhang == 'dangxuly').reverse()
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
      console.log(this.sanphamsdangxuly)

  }

  ngOnInit(): void {
  }

  // settings = {
  //   actions: { columnTitle: '', position: 'right' },
  //   // add: {
  //   //   addButtonContent: '<i class="nb-plus"></i>',
  //   //   createButtonContent: '<i class="nb-checkmark" (click)="onClick()"></i>',
  //   //   cancelButtonContent: '<i class="nb-close"></i>',
  //   //   confirmCreate: true,
  //   // },

  //   columns: {
  //     masanpham: {
  //       title: 'Mã Sản Phẩm',
  //       type: 'string',
  //       width: '300px'
  //     },
  //     loaimay: {
  //       title: 'Loại Máy',
  //       editor: {
  //         type: 'list',
  //         config: {
  //           selectText: 'Select',
  //           list: []
  //         }
  //       }
  //       ,
  //       width: '200px'
  //     },
  //     doimay: {
  //       title: 'Đời Máy',
  //       editor: {
  //         type: 'list',
  //         config: {
  //           selectText: 'Select',
  //           list: [
  //           ]
  //         }
  //       }
  //       ,
  //       width: '200px'
  //     },
  //     manhinh: {
  //       title: 'Màn Hình',
  //       editor: {
  //         type: 'list',
  //         config: {
  //           selectText: 'Select',
  //           list: [
  //           ]
  //         }
  //       }
  //     },
  //     chip: {
  //       title: 'Chip',
  //       editor: {
  //         type: 'list',
  //         config: {
  //           selectText: 'Select',
  //           list: [
  //           ]
  //         }
  //       },
  //     },
  //     tanso: {
  //       title: 'Tần số',
  //       type: 'string'
  //     },
  //     ram: {
  //       title: 'Ram',
  //       editor: {
  //         type: 'list',
  //         config: {
  //           selectText: 'Select',
  //           list: [
  //           ]
  //         }
  //       },
  //     },
  //     ocung: {
  //       title: 'Ổ cứng',
  //       editor: {
  //         type: 'list',
  //         config: {
  //           selectText: 'Select',
  //           list: [
  //           ]
  //         }
  //       },
  //     },
  //     nhom: {
  //       title: 'Nhóm',
  //       editor: {
  //         type: 'list',
  //         config: {
  //           selectText: 'Select',
  //           list: [
  //             { value: 'A', title: 'A' },
  //             { value: 'B', title: 'B' },
  //             { value: 'C', title: 'C' },
  //             { value: 'D', title: 'D' },
  //           ]
  //         }
  //       },
  //     },
  //     imei: {
  //       title: 'IMEI',
  //       type: 'string'
  //     },
  //     gia1: {
  //       title: 'Giá 1',
  //       type: 'string'
  //     },
  //     gia2: {
  //       title: 'Giá 2',
  //       type: 'string'
  //     },
  //     gia3: {
  //       title: 'Khách lẻ',
  //       type: 'string'
  //     },
  //     chitiet: {
  //       title: 'Chi Tiết',
  //       type: 'string'
  //     },
  //   },

  //   // edit: {
  //   //   editButtonContent: '<i class="nb-edit"></i>',
  //   //   saveButtonContent: '<i class="nb-checkmark"></i>',
  //   //   cancelButtonContent: '<i class="nb-close"></i>',
  //   //   confirmSave: true,
  //   // },
  //   delete: {
  //     deleteButtonContent: '<i class="nb-trash"></i>',
  //     confirmDelete: true,
  //   },
  // };

  click(sanpham) {
    console.log('aaaa', sanpham)
    this.service.getdanhsachdonhangtheomadonhang([sanpham.madonhang]).subscribe(val => {

      this.chitietdonhang = val
      this.show = true
    });
  }
}
