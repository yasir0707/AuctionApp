import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public GetData :any ;
  public multiple_img :any ;
  public showSubCat : boolean =false;
  constructor(
    public _userService : ServiceService
  ) { }

  ngOnInit(): void {
    this._userService.ShowCategories().subscribe(
      (data)=>{
        if(data){
          console.log(data);
          this.GetData = data;
          
        }
      }
    )
    if(this.showSubCat){
      this._userService.ShowCategories().subscribe(
        (data)=>{
          if(data){
            console.log(data);
            this.GetData = data;
            
          }
        }
      )
    }
  
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
      formData.append('SubcategoryName',form.value.SubcategoryName);
      formData.append('CategoryId',form.value.C_id);
      console.log(formData)
      this._userService.AddSubCategories(formData).subscribe(
        (data)=>{
          if(data){
            console.log(data)
          }
          else{
            console.log(data)
          }
        }
      )
    }
  }
}
