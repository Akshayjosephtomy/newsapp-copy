import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewslistComponent } from './newslist/newslist.component';
import { HttpClientModule } from '@angular/common/http'

const link:Routes=[
  {
    path:"",component:NewslistComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(link),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
