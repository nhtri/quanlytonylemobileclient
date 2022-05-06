import { NgModule } from '@angular/core';
import { KAI_COMPONENTS, KaiRoutingModule } from './kai-routing.module';
import { KaiComponent } from './kai.component';
import { NbButtonModule, NbCardModule, NbIconModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { SharedModule } from '../../@core/shared/shared.module';

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
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        KaiRoutingModule,
    ],
    declarations: [
        ...KAI_COMPONENTS,
        KaiComponent,
    ],
})
export class KaiModule {
}
