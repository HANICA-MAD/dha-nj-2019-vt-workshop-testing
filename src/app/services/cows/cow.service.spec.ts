import {CowService} from './cow.service';
import {async, TestBed} from '@angular/core/testing';
import {Logger} from '../logger.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CowModel} from './cow.model';

describe('CowService', () => {

    let service: CowService;
    let httpMock: HttpTestingController;

    const expectedCows: CowModel[] = [
        {
            lifeNumber: 450000,
            birthDate: '20/05/2019'
        },
        {
            lifeNumber: 423000,
            birthDate: '20/05/2019'
        }
    ];

    beforeEach(async(() => {
        // De CowService gebruikt de logger als dependency.. we mocken deze omdat het niet belangrijk is.
        const loggerSpy = jasmine.createSpyObj('Logger', ['log']);

        // Setup testbed
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                CowService,
                {provide: Logger, useValue: loggerSpy}
            ]
        });

        service = TestBed.get(CowService);
        httpMock = TestBed.get(HttpTestingController);
    }));

    it('should create the cow service', () => {
        expect(service).toBeTruthy();
    });

    it('should get cow data from http request', () => {
        service.getCowsOfFarm().subscribe(cows => {
            expect(cows.length).toBe(2);
            expect(cows).toEqual(expectedCows);
        });

        const request = httpMock.expectOne(`api/cows.json`);
        expect(request.request.method).toBe('GET');
        request.flush(expectedCows);
        expect(service.getCowsOfFarm).toBeTruthy();
    });

    it('returned cow Observable should match the right data', () => {
        const mockCow = {
            lifeNumber: 450000,
            birthDate: '20/05/2019'
        };

        service.addCowToFarm(mockCow)
            .subscribe(cowData => {
                expect(cowData.lifeNumber).toEqual(450000);
            });

        const request = httpMock.expectOne('api/add-cow');

        expect(request.request.method).toEqual('POST');

        request.flush(mockCow);
    });

    afterEach(() => {
        httpMock.verify();
    });
});
