import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './auth.guard';
import { UseroneComponent } from './userone/userone.component';
import { AddressComponent } from './address/address.component';
import { AboutuserComponent } from './aboutuser/aboutuser.component';
import { AboutuseroneComponent } from './aboutuserone/aboutuserone.component';
import { UserdataComponent } from './userdata/userdata.component';
import {HttpClientModule} from '@angular/common/http';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { DashboardStatisticsComponent } from './dashboard-statistics/dashboard-statistics.component';
import { PosComponent } from './pos/pos.component';
import { CartItemsComponent } from './cart-items/cart-items.component'



@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    DashboardComponent,
    NavbarComponent,
    UseroneComponent,
    AddressComponent,
    AboutuserComponent,
    AboutuseroneComponent,
    // UserdataComponent,
    OneComponent,
    TwoComponent,
    DashboardStatisticsComponent,
    PosComponent,
    CartItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FeatmodModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
   ],

  providers: [AuthGuard, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
