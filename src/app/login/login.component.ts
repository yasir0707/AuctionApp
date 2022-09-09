import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public showData :any;
public msg : any;

public GetSellerId = localStorage.getItem("SellerId");

constructor(
    public _userService : ServiceService,
    private router:Router
  ) { }

  ngOnInit(): void {
    if(this.GetSellerId != null){
     
      this.router.navigate(['/product']) 
    }
  }
  onSubmit(form:NgForm){
    const formData = new FormData();
    var formValue = {
      "Number":form.value.Number,
      "Password":form.value.Password,
      }
  
    console.log(formValue);
    this._userService.PostLogin(formValue).subscribe(
      (data:any)=>{
          console.log(data)
        this.showData = data;
        
        if(this.showData.message == 'Login Success!'){
          localStorage.setItem('Sellernumber',form.value['Number']);
          localStorage.setItem('SellerId',this.showData.id);
       
          this.router.navigate(['/home'])
       
        }
        else{
            // console.log(this.showData.message); 
            this.msg =  this.showData.message
            console.log(this.msg)
          }
        },
      (err:any)=>{console.log(err)}
      )
  }


}
