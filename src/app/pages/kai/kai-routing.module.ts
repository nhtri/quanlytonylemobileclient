import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { KaiComponent } from './kai.component';
import { CustomerComponent } from './customer/customer.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CustomersComponent } from './customers/customers.component';
import { PurchasingInvoicesComponent } from './purchasing-invoices/purchasing-invoices.component';
import { ProductsComponent } from './products/products.component';
import { PendingInvoicesComponent } from './pending-invoices/pending-invoices.component';
import { CompletedInvoicesComponent } from './completed-invoices/completed-invoices.component';
import { DevicesComponent } from './devices/devices.component';

const KAI_ROUTES: Routes = [{
    path: '',
    component: KaiComponent,
    children: [
        {
            path: 'customers',
            component: CustomersComponent,
        },
        {
            path: 'customer',
            component: CustomerComponent,
        },
        {
            path: 'purchasing-invoices',
            component: PurchasingInvoicesComponent,
        },
        {
            path: 'invoice',
            component: InvoiceComponent,
        },
        {
            path: 'products',
            component: ProductsComponent,
        },
        {
            path: 'pending-orders',
            component: PendingInvoicesComponent,
        },
        {
            path: 'completed-orders',
            component: CompletedInvoicesComponent,
        },
        {
            path: 'statistics',
            component: StatisticsComponent,
        },
        {
            path: 'devices',
            component: DevicesComponent,
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
    CustomerComponent,
    InvoiceComponent,
    StatisticsComponent,
    CustomersComponent,
    PurchasingInvoicesComponent,
    ProductsComponent,
    PendingInvoicesComponent,
    CompletedInvoicesComponent,
    DevicesComponent,
];
