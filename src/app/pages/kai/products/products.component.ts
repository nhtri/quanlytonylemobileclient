import { Component, OnInit } from '@angular/core';
import { KaiService } from '../../../services/kai.service';
import { DatePipe } from '@angular/common';
import { Product } from '../../../model/product';
import { notEmpty } from '../../../@core/utils/data.utils';
import { ForSaleInvoiceDto } from '../../../model/dto/for-sale-invoice.dto';
import { ProductDto } from '../../../model/dto/product.dto';

@Component({
    selector: 'ngx-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

    originalData = [];
    data = [];
    searchNameText = '';
    searchImeiText = '';
    listProducts = [];
    displayDetailModal: boolean = false;
    mobileSearch: {
        name: string,
        imei: string,
    } = {
        name: null,
        imei: null,
    };
    selectedMobiles = [];

    constructor(private kaiService: KaiService, public datePipe: DatePipe) {
    }

    ngOnInit() {
        this.getMobiles();
    }

    getMobiles() {
        this.kaiService.getAllKaiProducts().subscribe(kaiProducts => {
            this.originalData = kaiProducts;
            this.data = JSON.parse(JSON.stringify(this.originalData));
            this.data.map((x) => x['isSelected'] = false);
        });
    }

    onSelectItem(event, rowData) {
        const index = this.selectedMobiles.indexOf(rowData.id);
        if (index === -1) {
            this.selectedMobiles.push(rowData.id);
        } else {
            this.selectedMobiles.splice(index, 1);
        }
        this.data.find((item) => item.id === rowData.id).isSelected = !rowData.isSelected;
    }

    onSearchMobiles(event) {
        this.data = JSON.parse(JSON.stringify(this.originalData));

        if (notEmpty(this.mobileSearch.name)) {
            this.data = this.data.filter(
                (x: Product) => x.name.toLowerCase().includes(this.mobileSearch.name.toLowerCase()),
            );
        }
        if (notEmpty(this.mobileSearch.imei)) {
            this.data = this.data.filter(
                (x: Product) => x.imei.toLowerCase().includes(this.mobileSearch.imei.toLowerCase()),
            );
        }

        // Set Selected Item after do filter
        this.data.map((x) => {
            x.isSelected = this.selectedMobiles.indexOf(x.id) !== -1;
        });
    }

    onShowDetail() {
        const allMobiles = JSON.parse(JSON.stringify(this.originalData));
        this.listProducts = allMobiles.filter(x => this.selectedMobiles.indexOf(x.id) !== -1);
        this.listProducts.forEach(x => x['salePrice'] = 0);
        this.displayDetailModal = true;
    }

    onRowEditInit(data) {
        const index = this.listProducts.findIndex(x => x.id = data.id);
        if (index > -1) {
            this.listProducts.splice(index, 1);
        }

        const selectedIndex = this.selectedMobiles.findIndex(id => id === data.id);
        if (selectedIndex > -1) {
            this.selectedMobiles.splice(selectedIndex, 1);
        }

        this.data.find((item) => item.id === data.id).isSelected = false;
    }

    createForSaleInvoice() {
        const date = new Date();
        const products = this.listProducts.map(x => {
            return {
                id: x.id,
                quantity: 1, // @Todo: Work-Around only: Should add new field quantity in create invoice form
                price: x['salePrice'],
            } as ProductDto;
        });
        const total_money = products.map(mobile => mobile.price).reduce((a, b) => +a + +b, 0);
        const forSaleInvoiceDto: ForSaleInvoiceDto = {
            products,
            total_money,
            quantity: products.length,
            sale_date: this.datePipe.transform(date, 'yyyy-MM-dd'),
        };
        this.kaiService.createForSaleInvoice(forSaleInvoiceDto).subscribe(val => {
            alert('Lưu Thành Công');
            this.getMobiles();
            this.displayDetailModal = false;
        });

    }

}
