import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NetworkserviceService } from '../../../services/networkservice.service';
import { KAI_PAGES } from '../../../@core/constant/pages.constant';

@Component({
    selector: 'ngx-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private router: Router, private service: NetworkserviceService) {
        this.loginForm = this.formBuilder.group({
            tendangnhap: '',
            matkhau: '',
        });
    }

    role: any

    ngOnInit(): void {
        this.role = localStorage.getItem('role')
        if (this.role == 'admin') {
            this.router.navigateByUrl('/pages/tables/danhsachsanpham')
        }
        if (this.role == 'kho') {
            this.router.navigateByUrl('/pages/tables/danhsachsanpham')
        }
        if (this.role == 'cuahangvietnam') {
            this.router.navigateByUrl('/pages/tables/danhsachsanphamvn')
        }
        if (this.role == 'cuahangnhat') {
            this.router.navigateByUrl('/pages/tables/danhsachsanphamjp')
        }
        if (this.role == 'congtacvien') {
            this.router.navigateByUrl('/pages/tables/product-storages')
        }
        if (this.role === 'kai') {
            this.router.navigateByUrl(KAI_PAGES.DATA_PRODUCTS).then(r => r);
        }
        // if(this.role!='admin' && this.role!=null)
        // {
        //   this.router.navigateByUrl('/')
        // }
    }

    onClick() {
        // if(this.loginForm.get('tendangnhap')?.value=="admin" && this.loginForm.get('matkhau')?.value=="123456"){
        //   localStorage.setItem("role","1")

        //   window.location.reload();
        //   this.router.navigate(['/']);
        // }
        // console.log(this.loginForm.get('tendangnhap')?.value)

        this.service.quyennhanvien([this.loginForm.get('tendangnhap')?.value, this.loginForm.get('matkhau')?.value]).subscribe(val => {
            console.log(val.length)
            if (val.length != 0) {
                alert("Đăng Nhập Thành Công!!!");
                this.service.role = val[0].quyenhan
                localStorage.setItem("role", val[0].quyenhan)
                localStorage.setItem("sodienthoai", this.loginForm.get('tendangnhap')?.value)
                localStorage.setItem("hoten", val[0].hoten)
                console.log(this.service.role)


                window.location.reload()
                // this.role = localStorage.getItem('role')
                // if (this.role == 'admin') {
                //     this.router.navigateByUrl('/pages/tables/danhsachsanpham')
                // }
                // if (this.role == 'khohang') {
                //     this.router.navigateByUrl('/pages/tables/danhsachsanpham')
                // }
                // if (this.role == 'cuahangvietnam') {
                //     console.log("test")
                //     this.router.navigateByUrl('/pages/tables/danhsachsanphamvn')
                // }
                // if (this.role == 'cuahangnhat') {
                //     this.router.navigateByUrl('/pages/tables/danhsachsanphamjp')
                // }

            } else {
                // localStorage.setItem("role", 'admin')
                // localStorage.setItem("sodienthoai", '0987654321')
                // localStorage.setItem("hoten", 'Nguyen Van Admin')


                window.location.reload()
                alert("Đăng Nhập Không Thành Công!!!");
            }


        },
            error => {
                alert("Đăng Nhập Không Thành Công!!!");
                console.log("Error", error);

            })
    }

}
