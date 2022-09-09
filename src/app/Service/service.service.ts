import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  BaseUrl:string =`http://localhost:7000/seller/`;
  BaseUrl1:string =`http://localhost:4000/register/`;


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
   
   AddSubCategoriesByName(data:any){
    return this.http.post(this.BaseUrl+'AddSubCategoryByName',data)
   }

   ShowSubCategories(){
    return this.http.post(this.BaseUrl+'ShowSubCategory',null)
   }

   AddProduct(data:any){
    return this.http.post(this.BaseUrl+'Product',data)
   }

   ShowProduct(){
    return this.http.post(this.BaseUrl+'ShowProduct',null)
   }

   ShowSellerProduct(id:any){
    return this.http.post(this.BaseUrl+'ShowSellerProduct/'+id,null)
   }
   
  public PostRegister(Register:any){
    return this.http.post(this.BaseUrl1+'Add',Register);
}

public PostLogin(Login:any){
  return this.http.post(this.BaseUrl1+'Login',Login);

}

ShowWinBid(){
  return this.http.post(this.BaseUrl+'WinBid',null)
}


ShowWinBidSeller(id:any){
  return this.http.post(this.BaseUrl+'WinBidSeller/'+id,null)
}
  }
