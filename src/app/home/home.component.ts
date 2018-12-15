import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../model/book';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }

  bookname:string="";
  getUrl:string="http://localhost:8080/LibraryManagement/rest/student/";
  
  receivedBook:Book[];
  searchBook():void{
    let str:string;
    let str2:string;
  str= this.getUrl.concat("search/");
  str2=str.concat(this.bookname);

  this.http.get<Book[]>(str2).subscribe((records)=>{this.receivedBook=records;console.log(records);});
}

  requestBook(x:number):void{
    console.log(x);
    let str:string;
    let str1:string;
    str=this.getUrl.concat("request/1234/");
    str1=str.concat(String(x));
    let flag:boolean;
    this.http.get<boolean>(str1).subscribe((flag1)=>{flag=flag1;console.log(flag1);});
    console.log(flag);
  }
  ngOnInit() {
  }

}
