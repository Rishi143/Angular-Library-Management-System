import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookIssue} from '../model/book-issue';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
    bookname:string="";
  getUrl:string="http://localhost:8080/LibraryManagement/rest/student/issued/1234";
   receivedBook:BookIssue[];
constructor(private http:HttpClient) { 


  
  this.http.get<BookIssue[]>(this.getUrl).subscribe((records)=>{this.receivedBook=records;console.log(records);});
}
  ngOnInit() {
  }

}
