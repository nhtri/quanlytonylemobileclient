import { Component, OnInit } from '@angular/core';
import { DATE_CONSTANT } from '../../../@core/constant/common';
import { KaiService } from '../../../services/kai.service';
import { DatePipe } from '@angular/common';
import { notEmpty } from '../../../@core/utils/data.utils';
import { Product } from '../../../model/product';
import { TransferringProductDto } from '../../../model/dto/transferring-product.dto';
import * as XLSX from 'xlsx';
@Component({
    selector: 'ngx-outgoing-transfer-products-vn',
    templateUrl: './outgoing-transfer-products-vn.component.html',
    styleUrls: ['./outgoing-transfer-products-vn.component.scss'],
})
export class OutgoingTransferProductsVnComponent implements OnInit {
    fileName = 'DanhSachHangChuyenDi.xlsx';
    originalData = [];
    data = [];
    dateFormat = DATE_CONSTANT.ORIGINAL_DATE_FORMAT;
    outgoingTransferProductsFilter: {
        imei: string,
        transfer_date: Date | string,
    } = {
        imei: '',
        transfer_date: null,
    };

    selectedProducts: TransferringProductDto[] = [];
    isSelectAll: boolean;
role
    constructor(
        private kaiService: KaiService,
        private datePipe: DatePipe,
    ) {
        this.role = localStorage.getItem("role")
    }

    ngOnInit() {
        this.getShopVNOutgoingProducts();
    }

    getShopVNOutgoingProducts() {
        this.kaiService.getShopVNOutgoingProducts().subscribe(products => {
            this.originalData = products;
            this.data = products;
            this.data.map((x) => x['isSelected'] = false);
            this.isSelectAll = false;
            this.selectedProducts = [];
        });
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
                this.getShopVNOutgoingProducts();
            });
        }
    }

    onTransferProduct = (event, outgoingProduct) => {
        event.preventDefault();
        this.kaiService.transferProduct(outgoingProduct.invoice_id, outgoingProduct.product_id)
            .subscribe((result) => {
                this.getShopVNOutgoingProducts();
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
                    this.getShopVNOutgoingProducts();
                });
        }
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
