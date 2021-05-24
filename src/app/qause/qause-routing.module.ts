import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from '@common/guard/auth.guard';
import { QauseComponent } from './qause.component';
import { QauseHomeComponent } from './home/home.component';
import { NgoProfileComponent } from './ngo-profile/ngo-profile.component';

const routes: Routes = [
  {
    path: '',
    component: QauseComponent,
    children: [
      { path: '', component: QauseHomeComponent },
      { path: ':name' , component: NgoProfileComponent},
      { path: 'preview/:name' , component: NgoProfileComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers:[AuthGuard]
})
export class QauseRoutingModule { }
