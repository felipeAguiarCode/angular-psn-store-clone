import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/components/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataGame = dataFake;
  
  constructor() { }

  ngOnInit(): void {
  }

}
