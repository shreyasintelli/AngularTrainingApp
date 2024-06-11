import { Input, OnInit } from "@angular/core";
import { Component  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  implements OnInit{
  ngOnInit(): void {
    console.log(this.employeeData);
  }
  @Input({required:true}) employeeData: any;

  constructor(){
    
  }
}
