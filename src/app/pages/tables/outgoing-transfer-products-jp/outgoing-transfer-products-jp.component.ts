import { Component, OnInit } from '@angular/core';
import {
    DATE_CONSTANT,
    PRODUCT_SOURCE,
    PRODUCT_STORAGES,
    TRANSFER_STATUS,
    TRANSFER_STATUSES,
} from '../../../@core/constant/common';
import { KaiService } from '../../../services/kai.service';
import { DatePipe } from '@angular/common';
import { notEmpty } from '../../../@core/utils/data.utils';
import { Product } from '../../../model/product';
import { TransferringProductDto } from '../../../model/dto/transferring-product.dto';
import * as XLSX from 'xlsx';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'ngx-outgoing-transfer-products-jp',
    templateUrl: './outgoing-transfer-products-jp.component.html',
    styleUrls: ['./outgoing-transfer-products-jp.component.scss'],
})
export class OutgoingTransferProductsJpComponent implements OnInit {
    fileName = 'DanhSachHangChuyenDi.xlsx';
    originalData = [];
    data = [];
    dateFormat = DATE_CONSTANT.ORIGINAL_DATE_FORMAT;
    outgoingTransferProductsFilter: {
        transfer_status: TRANSFER_STATUS,
        source: PRODUCT_SOURCE,
        imei: string,
        transfer_date: Date | string,
    } = {
        transfer_status: null,
        source: null,
        imei: '',
        transfer_date: null,
    };

    selectedProducts: TransferringProductDto[] = [];
    isSelectAll: boolean;
    productStorages = PRODUCT_STORAGES;
    transferStatuses = TRANSFER_STATUSES.filter(x => {
        return x.value === TRANSFER_STATUS.PROCESSING || x.value === TRANSFER_STATUS.TRANSFERRING;
    });

    isAscendingOrder: boolean;
    orderIcon = 'arrow-downward-outline';

    isNormalUser: boolean;

    constructor(
        private kaiService: KaiService,
        private datePipe: DatePipe,
        private authService: AuthService,
    ) {
        this.isNormalUser = this.authService.isNormalUser();
    }

    ngOnInit() {
        this.getShopJPOutgoingProducts();
    }

    onSelectItem(event, rowData) {
        const index = this.selectedProducts.findIndex((x) => {
            return x.product_id === rowData.product_id && x.invoice_id === rowData.invoice_id;
        });
        if (index === -1) {
            this.selectedProducts.push({
                product_id: rowData.product_id,
                invoice_id: rowData.invoice_id,
            });
        } else {
            this.selectedProducts.splice(index, 1);
        }
        this.data.find(
            (item) => item.product_id === rowData.product_id && item.invoice_id === rowData.invoice_id,
        ).isSelected = !rowData.isSelected;
    }

    onSelectAll(event) {
        event.preventDefault();
        this.isSelectAll = !this.isSelectAll;
        this.data.map((x) => x.isSelected = this.isSelectAll);
        if (this.isSelectAll) {
            console.log('>>>> this.data 2: ', this.data);
            this.data.forEach(x => {
                this.selectedProducts.push({
                    product_id: x.product_id,
                    invoice_id: x.invoice_id,
                });
            });
        } else {
            this.selectedProducts = [];
        }
    }

    onMultiTransferring(event) {
        event.preventDefault();
        if (notEmpty(this.selectedProducts) && this.selectedProducts.length > 0) {
            this.kaiService.transferProducts(this.selectedProducts).subscribe(r => {
                this.getShopJPOutgoingProducts();
            });
        }
    }


    getShopJPOutgoingProducts() {
        this.kaiService.getShopJPOutgoingProducts().subscribe(products => {
            this.originalData = products;
            this.data = products;
            this.data.map((x) => x['isSelected'] = false);
            this.isSelectAll = false;
            this.selectedProducts = [];
        });
    }

    onTransferProduct = (event, outgoingProduct) => {
        event.preventDefault();
        this.kaiService.transferProduct(outgoingProduct.invoice_id, outgoingProduct.product_id)
            .subscribe((result) => {
                this.getShopJPOutgoingProducts();
            });
    }

    onCancelTransferProduct(event, transferringProduct) {
        event.preventDefault();
        const isOk = confirm(`Bạn có muốn hủy bỏ chuyển kho cho sản phẩm: ${transferringProduct.name} không?`);
        if (isOk === true) {
            this.kaiService.cancelTransferProduct(
                transferringProduct.invoice_id, transferringProduct.product_id,
            )
                .subscribe((result) => {
                    this.getShopJPOutgoingProducts();
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

    onSearchOutgoingProducts = (event) => {
        this.data = JSON.parse(JSON.stringify(this.originalData));
        if (notEmpty(this.outgoingTransferProductsFilter.imei)) {
            this.data = this.data.filter(
                (x: Product) => x.imei.toLowerCase().includes(this.outgoingTransferProductsFilter.imei.toLowerCase()),
            );
        }

        if (notEmpty(this.outgoingTransferProductsFilter.transfer_date)) {
            this.data = this.data.filter(x => {
                return this.datePipe.transform(x.transfer_date, DATE_CONSTANT.ORIGINAL_DATE_FORMAT)
                    === this.datePipe.transform(
                        this.outgoingTransferProductsFilter.transfer_date, DATE_CONSTANT.ORIGINAL_DATE_FORMAT);
            });
        }

        if (notEmpty(this.outgoingTransferProductsFilter.source)) {
            this.data = this.data.filter(
                (x) => x.to_position === this.outgoingTransferProductsFilter.source,
            );
        } else {
            this.data = this.data.filter(
                (x) => x.to_position !== null,
            );
        }

        if (notEmpty(this.outgoingTransferProductsFilter.transfer_status)) {
            this.data = this.data.filter(
                (x) => x.transfer_status === this.outgoingTransferProductsFilter.transfer_status,
            );
        } else {
            this.data = this.data.filter(
                (x) => x.transfer_status !== null,
            );
        }

        this.data.map((x) => {
            x.isSelected = this.selectedProducts.findIndex(selectedProduct => {
                return selectedProduct.product_id === x.product_id && selectedProduct.invoice_id === x.invoice_id;
            }) !== -1;
        });

        console.log('>>>> this.data: ', this.data);
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
