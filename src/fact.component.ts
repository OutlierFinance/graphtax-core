import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FactService } from './fact.service';
import { Fact } from './fact';

@Component({
    selector: 'fact-component',
    template: `
        <md-accordion>
            <md-expansion-panel *ngFor="let fact of facts" [expanded]="fact.id===selectedFactId" (opened)="onPanelChange(fact)">
                <md-expansion-panel-header>
                    {{fact.title}}
                </md-expansion-panel-header>

                <p>{{fact.body}}</p>
                <md-slider min="0" max="100" value="0"></md-slider>
            </md-expansion-panel>
        </md-accordion>`,
})
export class FactComponent {

    selectedFactId = '';
    facts: Fact[] = [];

    isValidId(id: string) {
        for (let fact of this.facts) {
            if (id === fact.id) {
                return true;
            }
        }
        return false;
    }

    constructor(private route: ActivatedRoute, private router: Router, private factService: FactService) {}

    ngOnInit() {
        this.facts = this.factService.getFacts();
        this.route.params.subscribe(x => {
            if (!x.factId) { return; }
            if (this.isValidId(x.factId)) {
                this.selectedFactId = x.factId;
                console.log(this.selectedFactId);
            } else {
                this.selectedFactId = '';
                this.router.navigateByUrl('');
                console.log("Invalid fact id " + x.factId);
            }
        })
    }

    onPanelChange(fact: Fact) {
        if (fact) {
            this.router.navigateByUrl(`${fact.id}`);
            console.log(fact);
        } else {
            this.router.navigateByUrl('');
        }
    }

}
