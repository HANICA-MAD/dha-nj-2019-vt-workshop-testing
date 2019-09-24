import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CowModel} from '../services/cows/cow.model';

@Component({
    selector: 'cow',
    template: `
        <li class="cow">{{getPresentationName()}}
            <ion-button class="moo-button" (click)="click()">Click</ion-button>
            {{mooString}}</li>`,
})
export class CowComponent {
    showMalePic = false;
    @Input() cow: CowModel;
    mooString = '';

    getPresentationName(): string {
        return `Cow with number: ${this.cow.lifeNumber} | birth: ${this.cow.birthDate}`;
    }

    click() {
        this.mooString = 'moo';
    }
}
