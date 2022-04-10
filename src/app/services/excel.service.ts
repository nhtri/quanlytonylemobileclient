import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import { EXCEL_EXTENSION, EXCEL_TYPE } from '../@core/constant/common';

@Injectable({
    providedIn: 'root',
})
export class ExcelService {
    constructor() {
    }

    public saveAsExcelFile(buffer: any, fileName: string): void {
        const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
        const date = new Date();
        const dateStr = `${date.getFullYear()}_${date.getMonth() + 1}_${date.getDate()}`;
        FileSaver.saveAs(data, `${fileName}_export_${dateStr}${EXCEL_EXTENSION}`);
    }
}
