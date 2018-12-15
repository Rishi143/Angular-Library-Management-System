import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Allbooks} from '../model/allbooks';
@Component({
  selector: 'app-showallbooks',
  templateUrl: './showallbooks.component.html',
  styleUrls: ['./showallbooks.component.css']
})
export class ShowallbooksComponent implements OnInit {
  getUrl:string="http://localhost:8080/LibraryManagement/rest/library/viewallbooks";
  receivedBook:Allbooks[];
  
  constructor(private http:HttpClient) {
    this.http.get<Allbooks[]>(this.getUrl).subscribe((records)=>{this.receivedBook=records;console.log(records);});
   }


 
  ngOnInit() {
  }

}
