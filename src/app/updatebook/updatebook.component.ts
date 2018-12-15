import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  model= new Book(1234,"","","",true);
  constructor(private http:HttpClient) { }
  flagf:boolean;
  postUrl:string="http://localhost:8080/LibraryManagement/rest/library/updatebook";
  getUrl:string="http://localhost:8080/LibraryManagement/rest/library/check/";
recv:Book;
check():void
{
  let str:string=this.getUrl.concat(this.model.bid.toString());
this.http.get<Book>(str).subscribe((records)=>{this.model=records;console.log(records);});
}

 onSubmit():void
  {
   
    this.http.put<boolean>(this.postUrl,this.model).subscribe(
                                                  (data)=>{this.flagf=data;console.log(this.flagf);
                                                  } 
                                                  );
  }


  ngOnInit() {
  }

}
