import { GoogleLoginProvider, SocialAuthService } from "@abacritt/angularx-social-login";
import { FacebookLoginProvider } from "@abacritt/angularx-social-login";
import { Component, OnInit } from "@angular/core";

import { SocialUser } from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  constructor(private authService: SocialAuthService) { }

  user: SocialUser | undefined
  loggedIn: boolean | undefined

  //Google works in another way,
  // without  see documentation:
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

      console.log(this.user);

        // TODO: Implements the logic to login here, and redirection calling the backend
        // and remove parts of the backend that are not necessary because are calling to take a token
        

    });
  }

 

}
