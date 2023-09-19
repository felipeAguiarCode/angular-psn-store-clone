import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input()
  gameId: string = '';
  constructor(
    private activeRoute: ActivatedRoute
  ) { 
    this.activeRoute.params.subscribe(
      res=>console.log(res)
    )
  }

  ngOnInit(): void {
  }

}
