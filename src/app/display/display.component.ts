import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
 
  fullName ="Angular Programming";
  
  constructor() { }

  ngOnInit(): void {
  }

  public display():void{
    console.log(this.fullName);
  }
}
