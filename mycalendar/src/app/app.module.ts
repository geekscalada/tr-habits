import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { MonthViewPageModule } from './month-view/month-view.module';
import { LoginPagePageModule } from './login-page/login-page.module';
import { SocialLoginModule } from '@abacritt/angularx-social-login';






@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    MonthViewPageModule
    
   
    
    
  
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
