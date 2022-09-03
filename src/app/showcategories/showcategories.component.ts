import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-showcategories',
  templateUrl: './showcategories.component.html',
  styleUrls: ['./showcategories.component.css']
})
export class ShowcategoriesComponent implements OnInit {

  public GetData:any
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
        else{
          
        }
      }
    )
  }

}
