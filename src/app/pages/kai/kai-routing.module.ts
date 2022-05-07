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
import { PendingInvoicesJpComponent } from './pending-invoices-jp/pending-invoices-jp.component';
import { CompletedInvoicesJpComponent } from './completed-invoices-jp/completed-invoices-jp.component';
import { PendingInvoicesVnComponent } from './pending-invoices-vn/pending-invoices-vn.component';
import { CompletedInvoicesVnComponent } from './completed-invoices-vn/completed-invoices-vn.component';
import { PendingInvoicesWarehouseComponent } from './pending-invoices-warehouse/pending-invoices-warehouse.component';
import {
    CompletedInvoicesWarehouseComponent,
} from './completed-invoices-warehouse/completed-invoices-warehouse.component';
import { IncomingTransferComponent } from './incoming-transfer/incoming-transfer.component';
import { IncomingTransferProductsComponent } from './incoming-transfer-products/incoming-transfer-products.component';
import { OutgoingTransferProductsComponent } from './outgoing-transfer-products/outgoing-transfer-products.component';
import { TransferringProductsComponent } from './transferring-products/transferring-products.component';
import { TransferredProductsComponent } from './transferred-products/transferred-products.component';
import { NotFoundProductsComponent } from './not-found-products/not-found-products.component';

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
            path: 'pending-orders-jp',
            component: PendingInvoicesJpComponent,
        },
        {
            path: 'pending-orders-vn',
            component: PendingInvoicesVnComponent,
        },
        {
            path: 'pending-orders-warehouse',
            component: PendingInvoicesWarehouseComponent,
        },
        {
            path: 'completed-orders',
            component: CompletedInvoicesComponent,
        },
        {
            path: 'completed-orders-jp',
            component: CompletedInvoicesJpComponent,
        },
        {
            path: 'completed-orders-vn',
            component: CompletedInvoicesVnComponent,
        },
        {
            path: 'completed-orders-warehouse',
            component: CompletedInvoicesWarehouseComponent,
        },
        {
            path: 'statistics',
            component: StatisticsComponent,
        },
        {
            path: 'devices',
            component: DevicesComponent,
        },
        {
            path: 'outgoing-transfer/products',
            component: OutgoingTransferProductsComponent,
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
    PendingInvoicesJpComponent,
    CompletedInvoicesJpComponent,
    PendingInvoicesVnComponent,
    CompletedInvoicesVnComponent,
    PendingInvoicesWarehouseComponent,
    CompletedInvoicesWarehouseComponent,
    IncomingTransferComponent,
    IncomingTransferProductsComponent,
    OutgoingTransferProductsComponent,
    TransferringProductsComponent,
    TransferredProductsComponent,
    NotFoundProductsComponent,
];
