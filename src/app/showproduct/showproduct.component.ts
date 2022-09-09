import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit {

  public GetData : any ; 
  public GetSellerId = localStorage.getItem("SellerId");
  constructor(
    public _userService : ServiceService
  ) { }

  ngOnInit(): void {
    this._userService.ShowSellerProduct(this.GetSellerId).subscribe(
      (data)=>{
        if(data){
          console.log(data);
          this.GetData = data;
        }
        else{
          
        }
      }
    )
 
  }

}
