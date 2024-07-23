import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UserspageComponent } from './userspage/userspage.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'users', component:UserspageComponent},
  {path:'login', component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
