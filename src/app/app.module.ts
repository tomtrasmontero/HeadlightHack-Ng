import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// enable two way binding
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { BroadcastComponent } from './broadcast/broadcast.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListComponent,
    BroadcastComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
