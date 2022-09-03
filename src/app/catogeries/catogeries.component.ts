import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-catogeries',
  templateUrl: './catogeries.component.html',
  styleUrls: ['./catogeries.component.css']
})
export class CatogeriesComponent implements OnInit {

  public multiple_img :any;
  constructor(
    public _userService : ServiceService
  ) { }

  ngOnInit(): void {
  }
  selectMultiple(event:any){
    if(event.target.files.length > 0){
      this.multiple_img = event.target.files;
      // console.log(this.multiple_img)
    }
  }
  onSubmit(form: NgForm) {
    
    const formData = new FormData();

    if(this.multiple_img){
      // console.log(this.multiple_img,'Multiple img')
      for(let img of this.multiple_img){
        formData.append('file',img);
        
      }
      formData.append('CategoryName',form.value.CategoryName);
      
      this._userService.AddCategories(formData).subscribe(
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
