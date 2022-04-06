import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { NetworkserviceService } from '../../../services/networkservice.service';
import * as XLSX from 'xlsx';

@Component({
    selector: 'ngx-smart-table-san-pham',
    templateUrl: './smart-table-san-pham.component.html',
    styleUrls: ['./smart-table-san-pham.component.scss']
})
export class SmartTableSanPhamComponent implements OnInit {
    fileName = 'DanhSachSanPham.xlsx';
    source: LocalDataSource = new LocalDataSource();
    datachip = []
    datadoimay = []
    dataloaimay = []
    datamanhinh = []
    dataram = []
    dataocung = []
    sanphams = []
    role = ''
    gia = ''
    danhsachdonhangtam = []

    loaimaysearch = ''
    doimaysearch = ''
    nhomsearch = ''
    datatemp = []
    multiselectData = []
    firstselect = 0

    loaimays
    doimays
    manhinhs
    chips
    tansos
    rams
    ocungs
    nhoms

    datatempfilter

    selectLoaiMaydata
    selectDoiMaydata
    selectManHinhdata
    selectTansodata
    selectRamdata
    selectOcungdata
    selectNhomdata
    selectChipdata
    selectMaSanPhamdata

    constructor(private service: NetworkserviceService, private router: Router) {
        this.role = localStorage.getItem('role')


        this.service.getquanlymay().subscribe(val => {


            // this.source.load(val)
            if (localStorage.getItem('role') == 'dailycap1') {
                const newArray = val.map(({gia2, gia3, ...keepAttrs}) => keepAttrs)
                this.sanphams = newArray.filter(val => val.trangthai == '')
                this.datatemp = this.sanphams
                this.source.load(this.sanphams)
                console.log(this.sanphams)
                this.datatempfilter = this.sanphams
                this.loaimays = [...new Set(this.sanphams.map(({loaimay}) => loaimay))].filter(n => n)
                this.doimays = [...new Set(this.sanphams.map(({doimay}) => doimay))].filter(n => n)
                this.manhinhs = [...new Set(this.sanphams.map(({manhinh}) => manhinh))].filter(n => n)
                this.chips = [...new Set(this.sanphams.map(({chip}) => chip))].filter(n => n)
                this.tansos = [...new Set(this.sanphams.map(({tanso}) => tanso))].filter(n => n)
                this.rams = [...new Set(this.sanphams.map(({ram}) => ram))].filter(n => n)
                this.ocungs = [...new Set(this.sanphams.map(({ocung}) => ocung))].filter(n => n)
                this.nhoms = [...new Set(this.sanphams.map(({nhom}) => nhom))].filter(n => n)
                console.log(this.loaimays, 'this.loaimays')


            }
            if (localStorage.getItem('role') == 'dailycap2') {
                const newArray = val.map(({gia1, gia3, ...keepAttrs}) => keepAttrs)
                this.sanphams = newArray.filter(val => val.trangthai == '')
                this.datatemp = this.sanphams
                console.log(this.sanphams)
                this.source.load(this.sanphams)
                this.datatempfilter = this.sanphams
                this.loaimays = [...new Set(this.sanphams.map(({loaimay}) => loaimay))].filter(n => n)
                this.doimays = [...new Set(this.sanphams.map(({doimay}) => doimay))].filter(n => n)
                this.manhinhs = [...new Set(this.sanphams.map(({manhinh}) => manhinh))].filter(n => n)
                this.chips = [...new Set(this.sanphams.map(({chip}) => chip))].filter(n => n)
                this.tansos = [...new Set(this.sanphams.map(({tanso}) => tanso))].filter(n => n)
                this.rams = [...new Set(this.sanphams.map(({ram}) => ram))].filter(n => n)
                this.ocungs = [...new Set(this.sanphams.map(({ocung}) => ocung))].filter(n => n)
                this.nhoms = [...new Set(this.sanphams.map(({nhom}) => nhom))].filter(n => n)
                console.log(this.loaimays, 'this.loaimays')
            }
            if (localStorage.getItem('role') == null || localStorage.getItem('role') == 'khachle') {
                const newArray = val.map(({gia1, gia2, ...keepAttrs}) => keepAttrs)
                this.sanphams = newArray.filter(val => val.trangthai == '')
                this.datatemp = this.sanphams
                console.log(this.sanphams)
                this.source.load(this.sanphams)
                this.datatempfilter = this.sanphams
                this.loaimays = [...new Set(this.sanphams.map(({loaimay}) => loaimay))].filter(n => n)
                this.doimays = [...new Set(this.sanphams.map(({doimay}) => doimay))].filter(n => n)
                this.manhinhs = [...new Set(this.sanphams.map(({manhinh}) => manhinh))].filter(n => n)
                this.chips = [...new Set(this.sanphams.map(({chip}) => chip))].filter(n => n)
                this.tansos = [...new Set(this.sanphams.map(({tanso}) => tanso))].filter(n => n)
                this.rams = [...new Set(this.sanphams.map(({ram}) => ram))].filter(n => n)
                this.ocungs = [...new Set(this.sanphams.map(({ocung}) => ocung))].filter(n => n)
                this.nhoms = [...new Set(this.sanphams.map(({nhom}) => nhom))].filter(n => n)
                console.log(this.loaimays, 'this.loaimays')
            }
            if (localStorage.getItem('role') == 'admin') {

                this.sanphams = val
                console.log(this.sanphams)
                this.source.load(this.sanphams)
                this.datatempfilter = this.sanphams
                this.loaimays = [...new Set(this.sanphams.map(({loaimay}) => loaimay))].filter(n => n)
                this.doimays = [...new Set(this.sanphams.map(({doimay}) => doimay))].filter(n => n)
                this.manhinhs = [...new Set(this.sanphams.map(({manhinh}) => manhinh))].filter(n => n)
                this.chips = [...new Set(this.sanphams.map(({chip}) => chip))].filter(n => n)
                this.tansos = [...new Set(this.sanphams.map(({tanso}) => tanso))].filter(n => n)
                this.rams = [...new Set(this.sanphams.map(({ram}) => ram))].filter(n => n)
                this.ocungs = [...new Set(this.sanphams.map(({ocung}) => ocung))].filter(n => n)
                this.nhoms = [...new Set(this.sanphams.map(({nhom}) => nhom))].filter(n => n)
                console.log(this.loaimays, 'this.loaimays')
            }

        });
        this.service.getdanhsachdonhangtheonguoimua([localStorage.getItem('sodienthoai')]).subscribe(val => {
            if (val.length > 0) {
                for (let i = 0; i < val.length; i++) {
                    this.danhsachdonhangtam.push(val[i].masanpham)
                }

                console.log(this.danhsachdonhangtam)
            }

        })
    }


    ngOnInit(): void {
        if (this.role == 'admin') {
            this.router.navigateByUrl('/pages/tables/smart-table-don-hang-dang-xu-ly-admin')
        }
    }


    click(item) {

        if (localStorage.getItem('role') == 'dailycap1') {
            this.gia = item.gia1
        }
        if (localStorage.getItem('role') == 'dailycap2') {
            this.gia = item.gia2
        }
        if (!this.danhsachdonhangtam.includes(item.masanpham)) {
            this.danhsachdonhangtam.push(item.masanpham)
            this.service.danhsachdonhangtemp(
                [
                    item.loaimay, item.doimay, item.manhinh, item.chip, item.tanso, item.ram, item.ocung, item.nhom, this.gia, '0',
                    localStorage.getItem('sodienthoai'), localStorage.getItem('hoten'), '',
                    new Date(), item.masanpham, item.imei, item.mausac, item.chitiet, item.chitietdacbiet
                ]
            )
                .subscribe(data => {
                        alert("Sản phẩm đã được thêm vào giỏ hàng của bạn")
                        console.log("POST Request is successful ", data);
                    },
                    error => {
                        console.log("Error", error);

                    })
        } else {
            alert("Sản phẩm vừa rồi đã được chọn")
        }
    }

    // searchdatachange() {
    //   this.sanphams = this.datatemp
    //   console.log('sanpham',this.sanphams)
    //   console.log(this.loaimaysearch, this.doimaysearch, this.nhomsearch)
    //   if (this.loaimaysearch && this.doimaysearch && this.nhomsearch) {
    //     this.sanphams = this.sanphams.filter(data => data.loaimay.includes(this.loaimaysearch))
    //       .filter(data => data.doimay.includes(this.doimaysearch))
    //       .filter(data => data.nhom.includes(this.nhomsearch))
    //   }
    //   if (!this.loaimaysearch) {
    //     if (!this.doimaysearch) {
    //       if (!this.nhomsearch) {
    //         this.ngOnInit()
    //       }
    //     }
    //   }
    //   if (this.loaimaysearch) {
    //     if (!this.doimaysearch) {
    //       if (!this.nhomsearch) {
    //         this.sanphams = this.sanphams.filter(data => data.loaimay.includes(this.loaimaysearch))
    //       }
    //     }
    //   }
    //   if (this.loaimaysearch) {
    //     if (this.doimaysearch) {
    //       if (!this.nhomsearch) {
    //         this.sanphams = this.sanphams.filter(data => data.loaimay.includes(this.loaimaysearch))
    //           .filter(data => data.doimay.includes(this.doimaysearch))
    //       }
    //     }
    //   }
    //   if (this.loaimaysearch) {
    //     if (!this.doimaysearch) {
    //       if (this.nhomsearch) {
    //         this.sanphams = this.sanphams.filter(data => data.loaimay.includes(this.loaimaysearch))
    //           .filter(data => data.nhom.includes(this.nhomsearch))
    //       }
    //     }
    //   }
    //   if (!this.loaimaysearch) {
    //     if (this.doimaysearch) {
    //       if (!this.nhomsearch) {
    //         this.sanphams = this.sanphams.filter(data => data.doimay.includes(this.doimaysearch))

    //       }
    //     }
    //   }
    //   if (!this.loaimaysearch) {
    //     if (this.doimaysearch) {
    //       if (this.nhomsearch) {
    //         this.sanphams = this.sanphams.filter(data => data.doimay.includes(this.doimaysearch))
    //           .filter(data => data.nhom.includes(this.nhomsearch))
    //       }
    //     }
    //   }
    //   if (!this.loaimaysearch) {
    //     if (!this.doimaysearch) {
    //       if (this.nhomsearch) {
    //         this.sanphams = this.sanphams
    //           .filter(data => data.nhom.includes(this.nhomsearch))
    //       }
    //     }
    //   }
    // }


    onClick(val) {
        this.firstselect += 1
        console.log(val)
        if (this.firstselect == 1) {
            this.multiselectData.push(val)
        } else {
            if (!this.multiselectData.some(e => e.masanpham === val.masanpham)) {
                this.multiselectData.push(val)
                console.log('thêm')
            } else {
                this.multiselectData = this.multiselectData.filter(function (el) {
                    return el.masanpham != val.masanpham;
                });
                console.log('bớt')
            }
        }

        console.log(this.multiselectData)
    }

    muahang() {
        console.log('this.donhangtam', this.danhsachdonhangtam)
        alert("Sản phẩm đang được thêm vào giỏ hàng của bạn")
        this.multiselectData.forEach(element => {
            if (localStorage.getItem('role') == 'dailycap1') {
                this.gia = element.gia1
            }
            if (localStorage.getItem('role') == 'dailycap2') {
                this.gia = element.gia2
            }
            if (!this.danhsachdonhangtam.includes(element.masanpham)) {
                this.danhsachdonhangtam.push(element.masanpham)
                this.service.danhsachdonhangtemp(
                    [
                        element.loaimay, element.doimay, element.manhinh, element.chip, element.tanso, element.ram,
                        element.ocung, element.nhom, this.gia, '0',
                        localStorage.getItem('sodienthoai'), localStorage.getItem('hoten'), '',
                        new Date(), element.masanpham, element.imei, element.mausac, element.chitiet, element.chitietdacbiet
                    ]
                )
                    .subscribe(data => {

                            console.log("POST Request is successful ", data);
                        },
                        error => {
                            console.log("Error", error);

                        })

            } else {
                alert("Sản phẩm " + element.masanpham + " đã được chọn")
            }
        });

    }


    selectLoaiMay(event) {
        this.selectLoaiMaydata = event.target.value
        console.log('this.selectLoaiMaydata', this.selectLoaiMaydata)
        this.sanphams = this.datatempfilter
        if (this.selectLoaiMaydata != null && this.selectLoaiMaydata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.loaimay == this.selectLoaiMaydata)
            console.log(this.sanphams)
        }
        if (this.selectDoiMaydata != null && this.selectDoiMaydata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.doimay == this.selectDoiMaydata)
        }
        if (this.selectManHinhdata != null && this.selectManHinhdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.manhinh == this.selectManHinhdata)
        }
        if (this.selectTansodata != null && this.selectTansodata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.tanso == this.selectTansodata)
        }
        if (this.selectChipdata != null && this.selectChipdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.chip == this.selectChipdata)
        }
        if (this.selectRamdata != null && this.selectRamdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.ram == this.selectRamdata)
        }
        if (this.selectOcungdata != null && this.selectOcungdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.ocung == this.selectOcungdata)
        }
        if (this.selectNhomdata != null && this.selectNhomdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.nhom == this.selectNhomdata)
        }
        if (this.selectMaSanPhamdata != null && this.selectLoaiMaydata != '') {
            this.sanphams = this.sanphams.filter(data => data.masanpham.includes(this.selectMaSanPhamdata))
            console.log(this.sanphams)
        }
    }

    selectDoiMay(event) {
        this.selectDoiMaydata = event.target.value
        this.sanphams = this.datatempfilter
        if (this.selectLoaiMaydata != null && this.selectLoaiMaydata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.loaimay == this.selectLoaiMaydata)
        }
        if (this.selectDoiMaydata != null && this.selectDoiMaydata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.doimay == this.selectDoiMaydata)
        }
        if (this.selectManHinhdata != null && this.selectManHinhdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.manhinh == this.selectManHinhdata)
        }
        if (this.selectTansodata != null && this.selectTansodata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.tanso == this.selectTansodata)
        }
        if (this.selectChipdata != null && this.selectChipdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.chip == this.selectChipdata)
        }
        if (this.selectRamdata != null && this.selectRamdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.ram == this.selectRamdata)
        }
        if (this.selectOcungdata != null && this.selectOcungdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.ocung == this.selectOcungdata)
        }
        if (this.selectNhomdata != null && this.selectNhomdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.nhom == this.selectNhomdata)
        }
        if (this.selectMaSanPhamdata != null && this.selectLoaiMaydata != '') {
            this.sanphams = this.sanphams.filter(data => data.masanpham.includes(this.selectMaSanPhamdata))
            console.log(this.sanphams)
        }
    }

    selectManHinh(event) {
        this.selectManHinhdata = event.target.value
        this.sanphams = this.datatempfilter
        if (this.selectLoaiMaydata != null && this.selectLoaiMaydata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.loaimay == this.selectLoaiMaydata)
        }
        if (this.selectDoiMaydata != null && this.selectDoiMaydata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.doimay == this.selectDoiMaydata)
        }
        if (this.selectManHinhdata != null && this.selectManHinhdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.manhinh == this.selectManHinhdata)
        }
        if (this.selectTansodata != null && this.selectTansodata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.tanso == this.selectTansodata)
        }
        if (this.selectChipdata != null && this.selectChipdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.chip == this.selectChipdata)
        }
        if (this.selectRamdata != null && this.selectRamdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.ram == this.selectRamdata)
        }
        if (this.selectOcungdata != null && this.selectOcungdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.ocung == this.selectOcungdata)
        }
        if (this.selectNhomdata != null && this.selectNhomdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.nhom == this.selectNhomdata)
        }
        if (this.selectMaSanPhamdata != null && this.selectLoaiMaydata != '') {
            this.sanphams = this.sanphams.filter(data => data.masanpham.includes(this.selectMaSanPhamdata))
            console.log(this.sanphams)
        }
    }

    selectTanso(event) {
        this.selectTansodata = event.target.value
        this.sanphams = this.datatempfilter
        if (this.selectLoaiMaydata != null && this.selectLoaiMaydata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.loaimay == this.selectLoaiMaydata)
        }
        if (this.selectDoiMaydata != null && this.selectDoiMaydata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.doimay == this.selectDoiMaydata)
        }
        if (this.selectManHinhdata != null && this.selectManHinhdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.manhinh == this.selectManHinhdata)
        }
        if (this.selectTansodata != null && this.selectTansodata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.tanso == this.selectTansodata)
        }
        if (this.selectChipdata != null && this.selectChipdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.chip == this.selectChipdata)
        }
        if (this.selectRamdata != null && this.selectRamdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.ram == this.selectRamdata)
        }
        if (this.selectOcungdata != null && this.selectOcungdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.ocung == this.selectOcungdata)
        }
        if (this.selectNhomdata != null && this.selectNhomdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.nhom == this.selectNhomdata)
        }
        if (this.selectMaSanPhamdata != null && this.selectLoaiMaydata != '') {
            this.sanphams = this.sanphams.filter(data => data.masanpham.includes(this.selectMaSanPhamdata))
            console.log(this.sanphams)
        }
    }

    selectRam(event) {
        this.selectRamdata = event.target.value
        this.sanphams = this.datatempfilter
        if (this.selectLoaiMaydata != null && this.selectLoaiMaydata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.loaimay == this.selectLoaiMaydata)
        }
        if (this.selectDoiMaydata != null && this.selectDoiMaydata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.doimay == this.selectDoiMaydata)
        }
        if (this.selectManHinhdata != null && this.selectManHinhdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.manhinh == this.selectManHinhdata)
        }
        if (this.selectTansodata != null && this.selectTansodata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.tanso == this.selectTansodata)
        }
        if (this.selectChipdata != null && this.selectChipdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.chip == this.selectChipdata)
        }
        if (this.selectRamdata != null && this.selectRamdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.ram == this.selectRamdata)
        }
        if (this.selectOcungdata != null && this.selectOcungdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.ocung == this.selectOcungdata)
        }
        if (this.selectNhomdata != null && this.selectNhomdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.nhom == this.selectNhomdata)
        }
        if (this.selectMaSanPhamdata != null && this.selectLoaiMaydata != '') {
            this.sanphams = this.sanphams.filter(data => data.masanpham.includes(this.selectMaSanPhamdata))
            console.log(this.sanphams)
        }
    }

    selectOcung(event) {
        this.selectOcungdata = event.target.value
        this.sanphams = this.datatempfilter
        if (this.selectLoaiMaydata != null && this.selectLoaiMaydata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.loaimay == this.selectLoaiMaydata)
        }
        if (this.selectDoiMaydata != null && this.selectDoiMaydata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.doimay == this.selectDoiMaydata)
        }
        if (this.selectManHinhdata != null && this.selectManHinhdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.manhinh == this.selectManHinhdata)
        }
        if (this.selectTansodata != null && this.selectTansodata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.tanso == this.selectTansodata)
        }
        if (this.selectChipdata != null && this.selectChipdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.chip == this.selectChipdata)
        }
        if (this.selectRamdata != null && this.selectRamdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.ram == this.selectRamdata)
        }
        if (this.selectOcungdata != null && this.selectOcungdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.ocung == this.selectOcungdata)
        }
        if (this.selectNhomdata != null && this.selectNhomdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.nhom == this.selectNhomdata)
        }
        if (this.selectMaSanPhamdata != null && this.selectLoaiMaydata != '') {
            this.sanphams = this.sanphams.filter(data => data.masanpham.includes(this.selectMaSanPhamdata))
            console.log(this.sanphams)
        }
    }

    selectNhom(event) {
        this.selectNhomdata = event.target.value
        this.sanphams = this.datatempfilter
        if (this.selectLoaiMaydata != null && this.selectLoaiMaydata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.loaimay == this.selectLoaiMaydata)
        }
        if (this.selectDoiMaydata != null && this.selectDoiMaydata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.doimay == this.selectDoiMaydata)
        }
        if (this.selectManHinhdata != null && this.selectManHinhdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.manhinh == this.selectManHinhdata)
        }
        if (this.selectTansodata != null && this.selectTansodata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.tanso == this.selectTansodata)
        }
        if (this.selectChipdata != null && this.selectChipdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.chip == this.selectChipdata)
        }
        if (this.selectRamdata != null && this.selectRamdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.ram == this.selectRamdata)
        }
        if (this.selectOcungdata != null && this.selectOcungdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.ocung == this.selectOcungdata)
        }
        if (this.selectNhomdata != null && this.selectNhomdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.nhom == this.selectNhomdata)
        }
        if (this.selectMaSanPhamdata != null && this.selectLoaiMaydata != '') {
            this.sanphams = this.sanphams.filter(data => data.masanpham.includes(this.selectMaSanPhamdata))
            console.log(this.sanphams)
        }
    }

    selectChip(event) {
        this.selectChipdata = event.target.value
        this.sanphams = this.datatempfilter
        if (this.selectLoaiMaydata != null && this.selectLoaiMaydata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.loaimay == this.selectLoaiMaydata)
        }
        if (this.selectDoiMaydata != null && this.selectDoiMaydata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.doimay == this.selectDoiMaydata)
        }
        if (this.selectManHinhdata != null && this.selectManHinhdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.manhinh == this.selectManHinhdata)
        }
        if (this.selectTansodata != null && this.selectTansodata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.tanso == this.selectTansodata)
        }
        if (this.selectChipdata != null && this.selectChipdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.chip == this.selectChipdata)
        }
        if (this.selectRamdata != null && this.selectRamdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.ram == this.selectRamdata)
        }
        if (this.selectOcungdata != null && this.selectOcungdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.ocung == this.selectOcungdata)
        }
        if (this.selectNhomdata != null && this.selectNhomdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.nhom == this.selectNhomdata)
        }
        if (this.selectMaSanPhamdata != null && this.selectLoaiMaydata != '') {
            this.sanphams = this.sanphams.filter(data => data.masanpham.includes(this.selectMaSanPhamdata))
            console.log(this.sanphams)
        }
    }

    selectMaSanPham(event) {
        this.selectMaSanPhamdata = event.target.value
        console.log('this.selectMaSanPhamdata ', this.selectMaSanPhamdata)
        this.sanphams = this.datatempfilter
        if (this.selectLoaiMaydata != null && this.selectLoaiMaydata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.loaimay == this.selectLoaiMaydata)
        }
        if (this.selectDoiMaydata != null && this.selectDoiMaydata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.doimay == this.selectDoiMaydata)
        }
        if (this.selectManHinhdata != null && this.selectManHinhdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.manhinh == this.selectManHinhdata)
        }
        if (this.selectTansodata != null && this.selectTansodata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.tanso == this.selectTansodata)
        }
        if (this.selectChipdata != null && this.selectChipdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.chip == this.selectChipdata)
        }
        if (this.selectRamdata != null && this.selectRamdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.ram == this.selectRamdata)
        }
        if (this.selectOcungdata != null && this.selectOcungdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.ocung == this.selectOcungdata)
        }
        if (this.selectNhomdata != null && this.selectNhomdata != 'default') {
            this.sanphams = this.sanphams.filter(data => data.nhom == this.selectNhomdata)
        }
        if (this.selectMaSanPhamdata != null && this.selectLoaiMaydata != '') {
            this.sanphams = this.sanphams.filter(data => data.masanpham.includes(this.selectMaSanPhamdata))
            console.log(this.sanphams)
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
}
