import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../auth/login/login';

@Component({
  selector: 'app-header',
  imports: [Login],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  constructor(private router: Router) {}

  goToLogin() {
    console.log('Navigating to login page...');
    this.router.navigate(['login']);
  }

}

