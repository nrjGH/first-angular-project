import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TshirtCustomizerComponent } from './tshirt-customizer/tshirt-customizer.component';
import { ContactComponent } from './contact/contact.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';  
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'customizer', component: TshirtCustomizerComponent},
  {path:'contact', component: ContactComponent},
  {path:'users', component: UsersPageComponent},
  {path: 'profile', component:ProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
