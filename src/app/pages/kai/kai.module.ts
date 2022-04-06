import { NgModule } from '@angular/core';
import { KAI_COMPONENTS, KaiRoutingModule } from './kai-routing.module';
import { KaiComponent } from './kai.component';
import { JobTitlePipe } from '../../@core/shared/pipes/job-title.pipe';
import { NbButtonModule, NbCardModule, NbIconModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ProductStatusPipe } from '../../@core/shared/pipes/product-status.pipe';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
    imports: [
        NbCardModule,
        NbButtonModule,
        NbIconModule,
        DropdownModule,
        DialogModule,
        TableModule,
        CalendarModule,
        FormsModule,
        CommonModule,
        KaiRoutingModule,
    ],
    declarations: [
        ...KAI_COMPONENTS,
        KaiComponent,
        JobTitlePipe,
        ProductStatusPipe,
    ],
})
export class KaiModule {
}
