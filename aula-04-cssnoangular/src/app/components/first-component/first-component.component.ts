import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'roberto';
  age: number = 39;
  job: string = 'programador';

  constructor() { }

  ngOnInit(): void {
  }

}
