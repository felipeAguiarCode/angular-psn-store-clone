import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-product-option',
	templateUrl: './product-option.component.html',
	styleUrls: ['./product-option.component.css']
})
export class ProductOptionComponent implements OnInit {

	@Input()
	listOptions: string[] = [];
	constructor() { }
	ngOnInit(): void {
	}

}
