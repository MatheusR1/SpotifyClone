import { Component, OnInit } from '@angular/core';

import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-roda-pe',
  templateUrl: './roda-pe.component.html',
  styleUrls: ['./roda-pe.component.css']
})
export class RodaPeComponent implements OnInit {
  public date = new Date();
  
  constructor() { 
    
  }

  ngOnInit(): void {
  }
}
