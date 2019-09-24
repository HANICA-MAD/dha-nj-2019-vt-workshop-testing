import {Component, OnInit} from '@angular/core';
import {CowService} from '../services/cows/cow.service';
import {CowModel} from '../services/cows/cow.model';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    cows: CowModel[] = [];

    constructor(private cowService: CowService) {
    }

    ngOnInit(): void {
        this.cowService.getCowsOfFarm().subscribe(cows => this.cows = cows);
    }
}
