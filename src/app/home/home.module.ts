import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HomePage} from './home.page';
import {CowService} from '../services/cows/cow.service';
import {HttpClientModule} from '@angular/common/http';
import {CowComponent} from '../elements/cow.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ])
    ],
    providers: [
        CowService
    ],
    declarations: [HomePage, CowComponent]
})
export class HomePageModule {
}
