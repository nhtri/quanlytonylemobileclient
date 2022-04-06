import { isJson, notEmpty } from '../@core/utils/data.utils';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {

    public getData = (storeName: string) => {
        const storedData = localStorage.getItem(storeName) ?? null;
        return isJson(storedData) ? JSON.parse(storedData) : storedData;
    }

    public setStoreData = (storeName: string, value: any) => {
        value = (notEmpty(value) && !isJson(value)) ? JSON.stringify(value) : value;
        localStorage.setItem(storeName, value);
    }

    public removeStoreData = (storeName: string) => {
        localStorage.removeItem(storeName);
    }

}
