import {ErrorHandler, Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class Logger {

    constructor(private errorHandler: ErrorHandler) {
    }

    /**
     * Prints a debug entry in the browser console.
     */
    log(value: any, ...arg: any[]): void {
        if (!environment.production) {
            console.log(value, ...arg);
        }
    }

    /**
     * Handles the incoming error.
     */
    error(error: Error): void {
        this.errorHandler.handleError(error);
    }

    /**
     * Prints a warning in the browser console.
     */
    warn(value: any, ...arg: any[]): void {
        console.warn(value, ...arg);
    }
}
