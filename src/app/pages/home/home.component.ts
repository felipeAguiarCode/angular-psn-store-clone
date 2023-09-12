import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/core/Interface/response_api.interface';
import { DatabaseService } from 'src/app/core/services/database.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	CardsItem: Response[] = [];

	constructor(private dataBaseService: DatabaseService) { }

	ngOnInit(): void {
		this.dataBaseService.getBase().subscribe((item: any) => {
			this.CardsItem = item;
		})
	}
}
