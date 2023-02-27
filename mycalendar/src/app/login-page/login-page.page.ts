import { GoogleLoginProvider, SocialAuthService } from "@abacritt/angularx-social-login";
import { FacebookLoginProvider } from "@abacritt/angularx-social-login";
import { Component, OnInit } from "@angular/core";

import { SocialUser } from "@abacritt/angularx-social-login";
import { HttpClient } from "@angular/common/http";
import { LoginGoogleService } from "./login-google.service";

import { LocalStorageService } from 'ngx-webstorage';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  constructor(
    private authService: SocialAuthService,    
    private _http: HttpClient,    
    private _router: Router

  ) { }

  user: SocialUser | undefined
  loggedIn: boolean | undefined

  //Google works in another way,
  // without this method
  // see documentation:
  //https://www.npmjs.com/package/@abacritt/angularx-social-login

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);

      console.log("thisuser", this.user);

      // TODO: Implements the logic to login here, and redirection calling the backend
      // and remove parts of the backend that are not necessary because are calling to take a token

      let idToken = this.user.idToken

      //TODO: Separate this in a detached function
      this._http.post('http://localhost:3000/google-tojwt', { idToken }).subscribe((data : any) => {
       
      console.log("data", data)
           
      // Set the token in the local storage
      localStorage.setItem('token', JSON.stringify(data['accessToken']));

      
      // Redirect to the home page
      this._router.navigate(['month']);
      
      })
    });
  }





}
