import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  BaseUrl:string =`http://localhost:7000/seller/`;

  constructor(private http : HttpClient ) { }


  AddCategories(data:any){
    return this.http.post(this.BaseUrl+'AddCategory',data)
   }

   ShowCategories(){
    return this.http.post(this.BaseUrl+'ShowaddCategory',null)
   }

   AddSubCategories(data:any){
    return this.http.post(this.BaseUrl+'SubCategory',data)
   }
   
   ShowSubCategories(){
    return this.http.post(this.BaseUrl+'ShowSubCategory',null)
   }

  }
