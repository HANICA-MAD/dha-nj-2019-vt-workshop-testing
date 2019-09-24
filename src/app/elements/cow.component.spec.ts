import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';
import {CowComponent} from './cow.component';
import {By} from '@angular/platform-browser';

describe('CowComponent', () => {
    let component: CowComponent;
    let fixture: ComponentFixture<CowComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CowComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(CowComponent);
        component = fixture.componentInstance;

        const cow = {
            lifeNumber: 423000,
            birthDate: '20/05/2019'
        };

        component.cow = cow;

        fixture.detectChanges();
    }));

    it('should create cow component', () => {
        expect(component).toBeTruthy();
    });

    it('should moooo when clicked', () => {
        const elementDe = fixture.debugElement.query(By.css('.cow'));
        const button = elementDe.query(By.css('ion-button'));
        const element = elementDe.nativeElement;

        button.triggerEventHandler('click', null);

        fixture.detectChanges();

        expect(element.textContent).toContain('moo');
    });

    it('should return presentation string', () => {
        expect(component.showMalePic).toBe(false);
        expect(component.getPresentationName()).toBe('Cow with number: 423000 | birth: 20/05/2019');
    });

    afterEach(async(() => {
        fixture.destroy();
    }));
});
