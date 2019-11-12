import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
model: any = {};

  constructor(public authService: AuthService,
  private aletrtService: AlertifyService,
   private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
       this.aletrtService.success('logged in successfully!');
    }, error => {
      this.aletrtService.error(error.title);
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  loggedIn(){
    // const token = localStorage.getItem('token');
    // return !!token;
    return this.authService.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
    this.aletrtService.message('logged out');
    this.router.navigate(['/home']);
  }

}
