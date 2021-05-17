import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// gaurds
import { LoginGuard } from '@common/guard/login.guard';
// components path
import { HomeComponent } from './home/home.component';
import { NgoSignupVerifyComponent } from './joinus/ngo-signup-verify/ngo-signup-verify.component';
import { NgoSignupComponent } from './joinus/ngo-signup/ngo-signup.component';
import { SelectionPageComponent } from './joinus/selection-page/selection-page.component';
import { NgoLoginComponent } from './joinus/ngo-login/ngo-login.component';
import { NgoLoginVerifyComponent } from './joinus/ngo-login-verify/ngo-login-verify.component';
import { LandingComponent } from './home/landing/landing.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'joinus/selection', component: SelectionPageComponent, canActivate: [LoginGuard] },
  { path: 'ngo-signup', component: NgoSignupComponent, canActivate: [LoginGuard] },
  { path: 'ngo-signup-verify', component: NgoSignupVerifyComponent, canActivate: [LoginGuard]},
  { path: 'ngo-login', component: NgoLoginComponent, canActivate: [LoginGuard]},
  { path: 'ngo-login-verify', component: NgoLoginVerifyComponent, canActivate: [LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    LoginGuard,
  ]
})
export class PublicRoutingModule { }
