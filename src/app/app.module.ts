import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { TshirtCustomizerComponent } from './tshirt-customizer/tshirt-customizer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TshirtComponent } from './tshirt/tshirt.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TshirtCustomizerComponent,
    NavbarComponent,
    CardComponent,
    ContactComponent,
    TshirtComponent,
    UsersPageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
