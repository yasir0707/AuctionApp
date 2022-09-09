import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("SellerId");
    localStorage.removeItem("Sellernumber");
    
          this.router.navigate(['/login'])
  }
}
