import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { KaiComponent } from './kai.component';
import { SmartTableCustomerComponent } from './smart-table-customer/smart-table-customer.component';
import { CustomerComponent } from './customer/customer.component';
import { SmartTableDeviceComponent } from './smart-table-device/smart-table-device.component';
import { SmartTableInvoiceComponent } from './smart-table-invoice/smart-table-invoice.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SmartTableMobileComponent } from './smart-table-mobile/smart-table-mobile.component';
import { SmartTableOrdersComponent } from './smart-table-orders/smart-table-orders.component';
import { SmartTableCompleteOrdersComponent } from './smart-table-complete-orders/smart-table-complete-orders.component';
import { StatisticsComponent } from './statistics/statistics.component';

const KAI_ROUTES: Routes = [{
    path: '',
    component: KaiComponent,
    children: [
        {
            path: 'customers',
            component: SmartTableCustomerComponent,
        },
        {
            path: 'customer',
            component: CustomerComponent,
        },
        {
            path: 'invoices',
            component: SmartTableInvoiceComponent,
        },
        {
            path: 'invoice',
            component: InvoiceComponent,
        },
        {
            path: 'mobiles',
            component: SmartTableMobileComponent,
        },
        {
            path: 'orders',
            component: SmartTableOrdersComponent,
        },
        {
            path: 'complete-orders',
            component: SmartTableCompleteOrdersComponent,
        },
        {
            path: 'statistics',
            component: StatisticsComponent,
        },
        {
            path: 'devices',
            component: SmartTableDeviceComponent,
        },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(KAI_ROUTES)],
    exports: [RouterModule],
})
export class KaiRoutingModule {
}

export const KAI_COMPONENTS = [
    SmartTableCustomerComponent,
    CustomerComponent,
    SmartTableDeviceComponent,
    SmartTableInvoiceComponent,
    InvoiceComponent,
    SmartTableMobileComponent,
    SmartTableOrdersComponent,
    SmartTableCompleteOrdersComponent,
    StatisticsComponent,
];
