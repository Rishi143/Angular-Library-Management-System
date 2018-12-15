import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { IssuedComponent } from './issued/issued.component';
import { HistoryComponent } from './history/history.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { LibrarianhomeComponent } from './librarianhome/librarianhome.component';
import { AddbookComponent } from './addbook/addbook.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { ShowallbooksComponent } from './showallbooks/showallbooks.component';
import { BissueComponent } from './bissue/bissue.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';

const routes:Routes =[
  {path : "studenthome/home", component:HomeComponent},
  {path : "studenthome/issued", component:IssuedComponent},
  {path : "studenthome/history", component:HistoryComponent},
  {path : "studenthome", component:StudenthomeComponent},
  {path : "librarianhome", component:LibrarianhomeComponent},
  {path : "librarianhome/addbook", component:AddbookComponent},
  {path : "librarianhome/deletebook", component:DeletebookComponent},
  {path : "librarianhome/showallbooks", component:ShowallbooksComponent},
  {path : "librarianhome/bissue", component:BissueComponent},
  {path : "librarianhome/updatebook", component:UpdatebookComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IssuedComponent,
    HistoryComponent,
    StudenthomeComponent,
    LibrarianhomeComponent,
    AddbookComponent,
    DeletebookComponent,
    ShowallbooksComponent,
    BissueComponent,
    UpdatebookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
