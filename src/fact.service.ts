import { Injectable } from '@angular/core';
import { Fact } from './fact';

@Injectable()
export class FactService {
    facts: Fact[] = [
        {
            id: 'a',
            title: 'fact 1 title',
            body: 'fact 1 body'
        },
        {
            id: 'b',
            title: 'fact 2 title',
            body: 'fact 2 body'
        }
    ];

    constructor() {}

    getFacts(): Fact[] {
        return this.facts;
    }
}
