import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdExpansionModule, MdSliderModule } from '@angular/material';

import { FactService } from './fact.service';
import { FactComponent } from './fact.component';

export function factServiceFactory() {
	return new FactService();
}

@NgModule({
	imports: [
		CommonModule,
		BrowserAnimationsModule,
		MdExpansionModule,
		MdSliderModule,
	],
	providers: [
		{ provide: FactService, useFactory: factServiceFactory }
	],
	declarations: [
		FactComponent,
	],
	exports: [
		FactComponent,
	]
})
export class FactModule { }
