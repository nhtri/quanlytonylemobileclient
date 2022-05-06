import { NgModule } from '@angular/core';
import { OutgoingTransferStatusPipe } from './pipes/outgoing-transfer-status.pipe';
import { PositionTitlePipe } from './pipes/position-title.pipe';
import { ProductStatusPipe } from './pipes/product-status.pipe';
import { JobTitlePipe } from './pipes/job-title.pipe';


const PIPES = [
    JobTitlePipe,
    ProductStatusPipe,
    PositionTitlePipe,
    OutgoingTransferStatusPipe,
];

@NgModule({
    imports: [],
    exports: [...PIPES],
    declarations: [...PIPES],
    providers: [...PIPES],
})
export class SharedModule {
}
