import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
// import { NgoFormGuard } from './common/guard/ngo-form.guard';
// import { AuthGuard } from './common/guard/auth.guard';
// import { Step1Component } from './signup-form/step1/step1.component';
// import { Step2Component } from './signup-form/step2/step2.component';
// import { Step3Component } from './signup-form/step3/step3.component';
// import { Step4Component } from './signup-form/step4/step4.component';
// import { NotfoundComponent } from '@public/global-components/notfound/notfound.component';

const routes: Routes = [
  { path: '', component:DemoComponent },
  // { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  // { path: 'ngobackend', loadChildren: () => import('./ngo/ngo.module').then(m => m.NgoModule) },
  { path: 'ngo', loadChildren: () => import('./qause/qause.module').then(m => m.qauseModule) },
  // { path: 'volunteer', loadChildren: () => import('./volunteer/volunteer.module').then(m => m.VolunteerModule) },
  // { path: 'signupform/step1', component: Step1Component, canActivate: [AuthGuard, NgoFormGuard] },
  // { path: 'signupform/step2', component: Step2Component, canActivate: [AuthGuard, NgoFormGuard] },
  // { path: 'signupform/step3', component: Step3Component, canActivate: [AuthGuard, NgoFormGuard] },
  // { path: 'signupform/step4', component: Step4Component, canActivate: [AuthGuard, NgoFormGuard] },
  // { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
