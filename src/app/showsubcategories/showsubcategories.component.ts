import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-showsubcategories',
  templateUrl: './showsubcategories.component.html',
  styleUrls: ['./showsubcategories.component.css']
})
export class ShowsubcategoriesComponent implements OnInit {
 public GetData :any;
  constructor(
    public _userService: ServiceService
  ) { }

  ngOnInit(): void {
    this._userService.ShowSubCategories().subscribe(
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
