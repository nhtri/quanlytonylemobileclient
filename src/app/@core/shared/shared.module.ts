import { NgModule } from '@angular/core';
import { OutgoingTransferStatusPipe } from './pipes/outgoing-transfer-status.pipe';
import { PositionTitlePipe } from './pipes/position-title.pipe';
import { ProductStatusPipe } from './pipes/product-status.pipe';
import { JobTitlePipe } from './pipes/job-title.pipe';
import { ColorTitlePipe } from './pipes/color-title.pipe';
import { ProductPricePipe } from './pipes/product-price.pipe';
import {CurrencyMaskModule} from './directives/currency-mask/currency-mask.module';


const PIPES = [
    JobTitlePipe,
    ProductStatusPipe,
    PositionTitlePipe,
    OutgoingTransferStatusPipe,
    ColorTitlePipe,
    ProductPricePipe,
];

const DIRECTIVES = [
    CurrencyMaskModule,
];

@NgModule({
    imports: [],
    exports: [...PIPES, ...DIRECTIVES],
    declarations: [...PIPES],
    providers: [...PIPES, ...DIRECTIVES],
})
export class SharedModule {
}
