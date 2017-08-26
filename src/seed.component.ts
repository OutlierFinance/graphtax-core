import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SeedService } from './seed.service';

@Component({
	selector: 'seed-component',
	template: '{{greeting}}'
})
export class SeedComponent implements OnInit {

	greeting: string;

	constructor(private service: SeedService) { }

	ngOnInit() {
		this.greeting = this.service.sayHello();
	}
}
