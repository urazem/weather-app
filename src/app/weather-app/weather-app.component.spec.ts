import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather-app.component';

describe('WeatherComponent', () => {
	let component: WeatherComponent;
	let fixture: ComponentFixture<TodoListComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ WeatherComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(WeatherComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
