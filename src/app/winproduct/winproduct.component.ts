import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-winproduct',
  templateUrl: './winproduct.component.html',
  styleUrls: ['./winproduct.component.css']
})
export class WinproductComponent implements OnInit {

  public productData :any ;
  public GetData :any ;
  
  public GetSellerId :any = localStorage.getItem("SellerId");
  constructor(
    public _UserService : ServiceService
  ) { }

  ngOnInit(): void {
    this._UserService.ShowWinBidSeller(this.GetSellerId).subscribe((data:any)=>{
      if(data){
        // console.log(data);
        this.productData = data;
        // console.log(this.productData.content)
        this.GetData = this.productData.content;
      }
  })

}


}
