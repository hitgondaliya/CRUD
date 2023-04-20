import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DurationComponent } from './components/duration/duration.component';
import { MembershipComponent } from './components/membership/membership.component';
import { CategoryComponent } from './components/category/category.component';
import { MemberComponent } from './components/member/member.component';


const routes: Routes = [
  {
    path : 'category',
    component : CategoryComponent
  },
  {
    path : 'duration',
    component : DurationComponent
  },
  {
    path : 'membership',
    component : MembershipComponent
  },
  {
    path : 'member',
    component : MemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
