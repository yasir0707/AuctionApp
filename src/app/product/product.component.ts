import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  public GetData :any ;
  public GetSubcategoryData :any = [];
  public GetSubData :any ;
  public multiple_img :any ;
  public SubcategoryId : any ;
  public categoryId : any ;
  public showSubCat : boolean =false;
  public GetSellerId :any = localStorage.getItem("SellerId");
  public ShowMsg : any ;

  constructor(
    public _userService : ServiceService,
    private router :Router
  ) { }

  ngOnInit(): void {
    if(this.GetSellerId == null){
      this.router.navigate(['/login'])   
    }
    this.GetSubcategoryData  = [];
    this._userService.ShowCategories().subscribe(
      (data)=>{
        if(data){
          console.log(data);
          this.GetData = data;
          
        }
      }
    
      )
   
  }
  onSelect(CategoryId:any){
    
    this.categoryId  = CategoryId.target.value;

    this.GetSubcategoryData  = [];
      console.log(CategoryId.target.value)
      var CatId =  CategoryId.target.value; 
      this._userService.ShowSubCategories().subscribe(
        (data:any)=>{
          if(data){
            // console.log(data);
            for(var i =0 ; i<data.length;i++){
              // console.log(data[i].CategoryId == CatId)
              // console.log(data[i].CategoryId , " Categoryid", CatId ,"Sub iD")
                if(data[i].CategoryId == CatId){
                  this.GetSubcategoryData.push(data[i]);
                  // console.log(this.GetSubcategoryData);
                }
            }
            console.log(this.GetSubcategoryData);
            
            
          }
        }
      )
  
  
    }
    onSubSelect(SubCatId :any){
      this.SubcategoryId = SubCatId.target.value

    }
  selectMultiple(event:any){
    if(event.target.files.length > 0){
      this.multiple_img = event.target.files;
      // console.log(this.multiple_img)
    }
  }
  onSubmit(form: NgForm) {
    console.log(form.value)
    
    const formData = new FormData();

    if(this.multiple_img){
      // console.log(this.multiple_img,'Multiple img')
      for(let img of this.multiple_img){
        formData.append('file',img);
        
      }
      formData.append('SellerId',this.GetSellerId);
      formData.append('CategoryId',this.categoryId);
      formData.append('SubcategoryId',this.SubcategoryId);
      formData.append('ProductName',form.value.ProductName);
      formData.append('ProductTitle',form.value.ProductTitle);
      formData.append('ProductDesc',form.value.ProductDesc);
      formData.append('ProductPrice',form.value.ProductPrice);
      formData.append('Quantity',form.value.Quantity);
      formData.append('CarretQuantity',form.value.CarretQuantity);
      formData.append('Time',form.value.Time);
      console.log(formData)
      this._userService.AddProduct(formData).subscribe(
        (data)=>{
          if(data){
            console.log(data)
            this.ShowMsg = data
          }
          else{
            console.log(data)
            
            this.ShowMsg = data
          }
        }
      )
    }
  }
}
