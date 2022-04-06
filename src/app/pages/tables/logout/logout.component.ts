import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { windowCount } from 'rxjs-compat/operator/windowCount';

@Component({
  selector: 'ngx-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') == null) {
      this.router.navigateByUrl('/')
    }
    else {
      localStorage.clear()
      window.location.reload()
    }

  }

}
