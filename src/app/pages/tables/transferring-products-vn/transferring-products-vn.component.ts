import { Component, OnInit } from '@angular/core';
import { DATE_CONSTANT, PRODUCT_SOURCE } from '../../../@core/constant/common';
import { KaiService } from '../../../services/kai.service';
import { DatePipe } from '@angular/common';
import { notEmpty } from '../../../@core/utils/data.utils';
import { Product } from '../../../model/product';
import * as XLSX from 'xlsx';
import { ReceiveTransferProductDto } from '../../../model/dto/receive-transfer-product.dto';

@Component({
    selector: 'ngx-transferring-products-vn',
    templateUrl: './transferring-products-vn.component.html',
    styleUrls: ['./transferring-products-vn.component.scss'],
})
export class TransferringProductsVnComponent implements OnInit {
    fileName = 'DanhSachHangDangDen.xlsx';
    originalData = [];
    data = [];
    dateFormat = DATE_CONSTANT.ORIGINAL_DATE_FORMAT;
    transferringProductsFilter: {
        imei: string,
        transfer_date: Date | string,
    } = {
        imei: '',
        transfer_date: null,
    };

    isAscendingOrder: boolean;
    orderIcon = 'arrow-downward-outline';
    role: string;

    shopSource = PRODUCT_SOURCE.SHOP_VN;

    selectedProducts: ReceiveTransferProductDto[] = [];
    isSelectAll: boolean;

    constructor(
        private kaiService: KaiService,
        private datePipe: DatePipe,
    ) {
        this.role = localStorage.getItem('role');
    }

    ngOnInit() {
        this.getShopVNTransferringProducts();
    }

    getShopVNTransferringProducts() {
        this.kaiService.getShopVNTransferringProducts().subscribe(products => {
            this.originalData = products;
            this.data = products;
        });
    }

    onReceiveTransferProduct(event, transferringProduct) {
        event.preventDefault();
        this.kaiService.receiveTransferringProduct({
            invoice_id: transferringProduct.invoice_id,
            product_id: transferringProduct.product_id,
        })
            .subscribe((result) => {
                this.getShopVNTransferringProducts();
            });
    }

    onLostProduct(event, transferringProduct) {
        event.preventDefault();
        this.kaiService.lostProduct(
            transferringProduct.invoice_id, transferringProduct.product_id,
        )
            .subscribe((result) => {
                this.getShopVNTransferringProducts();
            });
    }

    onCancelTransferProduct(event, transferringProduct) {
        event.preventDefault();
        this.kaiService.cancelTransferProduct(
            transferringProduct.invoice_id, transferringProduct.product_id,
        )
            .subscribe((result) => {
                this.getShopVNTransferringProducts();
            });
    }

    onSelectAll(event) {
        event.preventDefault();
        this.isSelectAll = !this.isSelectAll;
        this.data.map((x) => x.isSelected = this.isSelectAll);
        if (this.isSelectAll) {
            this.data.forEach(x => {
                this.selectedProducts.push({
                    product_id: x.product_id,
                    invoice_id: x.invoice_id,
                    quantity: x.quantity,
                });
            });
        } else {
            this.selectedProducts = [];
        }
    }

    onSelectItem(event, rowData) {
        const index = this.selectedProducts.findIndex((x) => {
            return x.product_id === rowData.product_id && x.invoice_id === rowData.invoice_id;
        });
        if (index === -1) {
            this.selectedProducts.push({
                product_id: rowData.product_id,
                invoice_id: rowData.invoice_id,
                quantity: rowData.quantity,
            });
        } else {
            this.selectedProducts.splice(index, 1);
        }
        this.data.find(
            (item) => item.product_id === rowData.product_id && item.invoice_id === rowData.invoice_id,
        ).isSelected = !rowData.isSelected;
    }

    onMultiTransferAccept(event) {
        event.preventDefault();
        if (notEmpty(this.selectedProducts) && this.selectedProducts.length > 0) {
            this.kaiService.receiveTransferringProducts(this.selectedProducts).subscribe(r => {
                this.getShopVNTransferringProducts();
            });
        }
    }

    onSortData(event) {
        event.preventDefault();
        this.isAscendingOrder = !this.isAscendingOrder;
        if (this.isAscendingOrder) {
            this.orderIcon = 'arrow-upward-outline';
        } else {
            this.orderIcon = 'arrow-downward-outline';
        }
        this.data.sort((a, b) => {
            if (this.isAscendingOrder) {
                if (a.transfer_date < b.transfer_date) {
                    return 1;
                }
                if (a.transfer_date > b.transfer_date) {
                    return -1;
                }
                return 0;
            } else {
                if (a.transfer_date > b.transfer_date) {
                    return 1;
                }
                if (a.transfer_date < b.transfer_date) {
                    return -1;
                }
                return 0;
            }
        });
    }

    onSearchTransferringProducts(event) {
        this.data = JSON.parse(JSON.stringify(this.originalData));
        if (notEmpty(this.transferringProductsFilter.imei)) {
            this.data = this.data.filter(
                (x: Product) => x.imei.toLowerCase().includes(this.transferringProductsFilter.imei.toLowerCase()),
            );
        }

        if (notEmpty(this.transferringProductsFilter.transfer_date)) {
            this.data = this.data.filter(x => {
                return this.datePipe.transform(x.transfer_date, DATE_CONSTANT.ORIGINAL_DATE_FORMAT)
                    === this.datePipe.transform(
                        this.transferringProductsFilter.transfer_date, DATE_CONSTANT.ORIGINAL_DATE_FORMAT);
            });
        }
    }

    exportexcel() {
        let element = document.getElementById('excel-table');
        const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

        /* generate workbook and add the worksheet */
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        /* save to file */
        XLSX.writeFile(wb, this.fileName);
    }

}
