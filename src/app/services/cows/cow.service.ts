import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CowModel} from './cow.model';
import {Logger} from '../logger.service';
import {Observable} from 'rxjs';

@Injectable()
export class CowService {

    private readonly baseEndPoint = 'api';

    constructor(private readonly logger: Logger, private readonly httpClient: HttpClient) {
    }

    /**
     * Gets all the cows of the given farm.
     */
    public getCowsOfFarm(farmId?: number): Observable<CowModel[]> {
        const endPoint = this.createEndPoint('cows');
        const result = this.httpClient.get<CowModel[]>(endPoint);

        this.logger.log(result);

        return result;
    }

    public addCowToFarm(cow: CowModel) {
        const endPoint = `${this.baseEndPoint}/add-cow`;

        return this.httpClient.post<CowModel>(endPoint, cow);
    }

    /**
     * Creates the endpoint url.
     */
    private createEndPoint(url: string): string {
        return `${this.baseEndPoint}/${url}.json`;
    }
}
