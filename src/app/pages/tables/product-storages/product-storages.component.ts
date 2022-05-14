import { Component, OnInit } from '@angular/core';
import { KaiService } from '../../../services/kai.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ProductStatusPipe } from '../../../@core/shared/pipes/product-status.pipe';
import { Product } from '../../../model/product';
import { PositionTitlePipe } from '../../../@core/shared/pipes/position-title.pipe';
import { PRODUCT_STORAGES } from '../../../@core/constant/common';

@Component({
    selector: 'ngx-product-storages',
    templateUrl: './product-storages.component.html',
    styleUrls: ['./product-storages.component.scss'],
})
export class ProductStoragesComponent implements OnInit {

    data: Product[];
    source: LocalDataSource = new LocalDataSource();
    settings = {
        actions: {columnTitle: '', position: 'right', add: false, edit: false, delete: false},

        columns: {
            group_name: {
                title: 'Nhóm SP',
                type: 'string',
                filter: false,
            },
            name: {
                title: 'Tên sản phẩm',
                type: 'string',
            },
            imei: {
                title: 'IMEI',
                type: 'string',
            },
            color: {
                title: 'Màu Sắc',
                type: 'string',
                filter: false,
            },
            status: {
                filter: false,
                title: 'Tình Trạng',
                type: 'string',
                valuePrepareFunction: (cell, row) => {
                    return this.productStatusPipe.transform(cell);
                },
            },
            quantity: {
                filter: false,
                title: 'Số Lượng',
                type: 'number',
            },
            price: {
                filter: false,
                title: 'Giá Mua',
                type: 'number',
            },
            position: {
                filter: {
                    type: 'list',
                    config: {
                        selectText: 'Select',
                        list: [],
                    },
                },
                title: 'Vị Trí',
                type: 'string',
                valuePrepareFunction: (cell, row) => {
                    return this.positionTitlePipe.transform(cell);
                },
            },
        },
    };

    constructor(
        private kaiService: KaiService,
        private productStatusPipe: ProductStatusPipe,
        private positionTitlePipe: PositionTitlePipe,
    ) {
        this.kaiService.getAllProducts().subscribe((productsGroups) => {
            this.source.load(productsGroups);
            this.data = productsGroups;
        });
        this.settings.columns.position.filter.config.list = PRODUCT_STORAGES.map(x => {
            return {
                value: x.value,
                title: x.label,
            };
        });
    }

    ngOnInit(): void {
    }
}
