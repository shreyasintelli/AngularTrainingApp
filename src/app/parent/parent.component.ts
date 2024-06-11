import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  constructor() { }

  employee = {
    name: 'John Doe',
    age: 30,
    position: 'Software Engineer'
  };

}
