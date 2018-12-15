import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
model= new Book(1234,"a1","b1","p1",true);
  constructor(private http:HttpClient) { }
  flagf:boolean;
  postUrl:string="http://localhost:8080/LibraryManagement/rest/library/add";
 onSubmit():void
  {
   
    this.http.post<boolean>(this.postUrl,this.model).subscribe(
                                                  (data)=>{this.flagf=data;console.log(this.flagf);
                                                  } 
                                                  );
  }
  ngOnInit() {
  }

}
