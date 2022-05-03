import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './sharedPages/navbar/navbar.component';
import { FooterComponent } from './sharedPages/footer/footer.component';
import { TableComponent } from './sharedPages/table/table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    TableComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
