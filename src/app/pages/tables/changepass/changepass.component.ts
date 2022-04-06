import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NetworkserviceService } from '../../../services/networkservice.service';

@Component({
  selector: 'ngx-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.scss']
})
export class ChangepassComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: NetworkserviceService) {
    this.loginForm = this.formBuilder.group({
      tendangnhap: '',
      matkhaucu: '',
      matkhaumoi: '',
    });
  }

  role: any

  ngOnInit(): void {
    this.role = localStorage.getItem('role')
  }

  onClick() {

    this.service.updatepass([this.loginForm.get('matkhaumoi')?.value,this.loginForm.get('tendangnhap')?.value, this.loginForm.get('matkhaucu')?.value]).subscribe(val => {
      console.log(val.length)
     
      alert("Thay Đổi Mật Khẩu Thành Công!!!");
        this.router.navigateByUrl('')
    


    },
      error => {
        alert("Thay Đổi Mật Khẩu Không Thành Công!!!");
        console.log("Error", error);

      })
  }

}
