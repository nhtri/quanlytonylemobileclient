import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { notEmpty } from '../utils/data.utils';
import { STRING_CONSTANT } from '../constant/common';
import { Observable } from 'rxjs';

export default class ResetService {
    protected http: HttpClient;
    protected context: string;
    protected httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
        params: null,
    };


    constructor(serviceContext?: string) {
        this.context = serviceContext ?? STRING_CONSTANT.EMPTY;

    }

    public requestUrl(resourceUri?: string | number): string {
        const uriPrefix = notEmpty(this.context) ? `${this.context}/` : STRING_CONSTANT.EMPTY;
        return notEmpty(resourceUri) ? `${uriPrefix}${resourceUri}` : uriPrefix;
    }

    /**
     * CRUD
     */
    public create<T>(resourceUri?: string, data?: any | undefined, headers?: {
        [header: string]: string | string[];
    }): Observable<T> {
        if (notEmpty(headers)) {
            this.httpOptions.headers = new HttpHeaders(headers);
        }
        return this.http.post<T>(this.requestUrl(resourceUri), data, this.httpOptions);
    }

    public update<T>(id: string | number, data?: any | undefined, headers?: {
        [header: string]: string | string[];
    }): Observable<T> {
        if (notEmpty(headers)) {
            this.httpOptions.headers = new HttpHeaders(headers);
        }
        return this.http.put<T>(this.requestUrl(id), data, this.httpOptions);
    }

    public getAll<T>(resourceUri?: string, requestParams?: Record<string, unknown>, headers?: {
        [header: string]: string | string[];
    }): Observable<T> {
        if (notEmpty(headers)) {
            this.httpOptions.headers = new HttpHeaders(headers);
        }
        if (notEmpty(requestParams)) {
            this.httpOptions.params = new HttpParams(requestParams);
        }
        return this.http.get<T>(this.requestUrl(resourceUri), this.httpOptions);
    }

    public remove<T>(id: string | number, headers?: {
        [header: string]: string | string[];
    }): Observable<Object> {
        if (notEmpty(headers)) {
            this.httpOptions.headers = new HttpHeaders(headers);
        }
        return this.http.delete(this.requestUrl(id));
    }
}
