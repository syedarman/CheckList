import { Component, OnInit } from '@angular/core';

import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  socialUser!: SocialUser;
  isLoggedin?: boolean = false;

  constructor(private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log(this.socialUser);
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then((value) =>{
      console.log('Logged in successfully ', this.socialUser.email);
    })
    .catch((error)=>{
      console.log('Loggin failed');
    });
  }
  logOut(): void {
    this.socialAuthService.signOut();
  }

}
