import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookIssue} from '../model/book-issue';
@Component({
  selector: 'app-bissue',
  templateUrl: './bissue.component.html',
  styleUrls: ['./bissue.component.css']
})
export class BissueComponent implements OnInit {
bookname:string="";
  getUrl:string="http://localhost:8080/LibraryManagement/rest/library/bissue";
   receivedBook:BookIssue[];
  constructor(private http:HttpClient) { 
    this.http.get<BookIssue[]>(this.getUrl).subscribe((records)=>{this.receivedBook=records;console.log(records);});
  }

  ngOnInit() {
  }

}
