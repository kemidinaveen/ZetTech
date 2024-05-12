import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from '../app/home/home.component';
import { AuthGuard } from './auth.guard';
import { AddressComponent } from './address/address.component';
import { AboutuserComponent } from './aboutuser/aboutuser.component';
import { UseroneComponent } from './userone/userone.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { UnsavedchangesGuard } from './unsavedchanges.guard';
import { UserdataComponent } from './userdata/userdata.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { PosComponent } from './pos/pos.component';

const routes: Routes = [
  { path: "register", component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'userone', component: UseroneComponent,
    children: [
      { path: 'one', outlet: 'onee', component: OneComponent },
      { path: 'two', outlet: 'twoo', component: TwoComponent}
    ]},
  { path: 'aboutuser', component: AboutuserComponent, canDeactivate: [UnsavedchangesGuard] },
  { path: '', component: LoginComponent },
  { path: 'userdata', component: UserdataComponent },
  { path: 'pos', component: PosComponent }

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

