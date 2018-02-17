import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'

import { WelcomeComponent } from './home/welcome.component';
import {RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductModule } from './products/product.module';
import { ProductService } from './products/product.service';
import { ProductGuardService } from './products/product-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
 
    HttpClientModule,
    RouterModule.forRoot([
     
      {path:'welcome',component:WelcomeComponent},
      {path:'about',component:AboutComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
    ]),
    
    ProductModule
  ],
  providers:[ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
