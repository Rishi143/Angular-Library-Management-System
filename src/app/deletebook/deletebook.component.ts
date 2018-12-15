import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeletebookComponent implements OnInit {

  constructor(private http:HttpClient) { }
  flagf:boolean;
  postUrl:string="http://localhost:8080/LibraryManagement/rest/library/delete/";
  bookid:number;

 onDelete():void
  {
     let str:string = this.postUrl.concat(this.bookid.toString());
    this.http.delete<boolean>(str).subscribe( (data)=>{this.flagf=data;console.log(this.flagf) } );
  }
  ngOnInit() {
  }

}
