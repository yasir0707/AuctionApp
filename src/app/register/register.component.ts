import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public GetSellerId = localStorage.getItem("SellerId");
  constructor(
    public _userService : ServiceService,
    public router : Router
  ) { 
    if(this.GetSellerId != null){
     
      this.router.navigate(['/home']) 
    }
  }

  ngOnInit(): void {
    
  }
  onSubmit(form:NgForm){
    const formData = new FormData();
    var formValue = {
      "Name":form.value.Name,
      "Number":form.value.Number,
      "Password":form.value.Password,
      "Shop":form.value.Shop,
      "Address":form.value.Address,
      "Age":form.value.Age,
      "Role":"2",
    }
  
    console.log(formValue);
    this._userService.PostRegister(formValue).subscribe(
      (data:any)=>{
        
        this.router.navigate(['/login'])
},
      (err:any)=>{console.log(err)}
      )
  }
}
