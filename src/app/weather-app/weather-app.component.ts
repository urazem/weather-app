import { Component, OnInit } from '@angular/core';

import { trigger, transition, style, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { SettingService } from '../setting.service';
import { Word } from '../word';

@Component({
	selector: 'weather-app',
	templateUrl: './weather-app.component.html',
	styleUrls: [ './weather-app.component.css' ],
	animations: [
		trigger('fade', [
			transition(':enter', [
				style({ opacity: 0, transform: 'translateY(30px)' }),
				animate(200, style({ opacity: 1, transform: 'translateY(0px)' }))
			]),

			transition(':leave', [ animate(200, style({ opacity: 0, transform: 'translateY(30px)' })) ])
		])
	]
})
export class WeatherComponent implements OnInit {
	cityName: string = '';
	data: Word[];

	constructor(private appSettingsService: SettingService) {}

	ngOnInit() {
		this.appSettingsService.getJSON().subscribe((data) => {
			this.data = data;
			console.log(this.data);
		});
	}
	// search() {
	// 	console.log(this.cityName);
	// 	this.http
	// 		.get(
	// 			`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.API_KEY}&units=metric`
	// 		)
	// 		.subscribe((response) => {
	// 			this.response = response;
	// 			console.log(this.response);
	// 		});
	// }
}
