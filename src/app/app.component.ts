import { Component } from '@angular/core';
import { DatabaseService } from './core/services/database.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'store';
}
