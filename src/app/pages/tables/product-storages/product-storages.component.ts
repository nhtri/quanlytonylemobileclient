import {Component, OnInit} from '@angular/core';
import {KaiService} from '../../../services/kai.service';
import {LocalDataSource} from 'ng2-smart-table';
import {ProductStatusPipe} from '../../../@core/shared/pipes/product-status.pipe';
import {Product} from '../../../model/product';
import {PositionTitlePipe} from '../../../@core/shared/pipes/position-title.pipe';
import {PRODUCT_COLORS, PRODUCT_STATUSES, PRODUCT_STORAGES} from '../../../@core/constant/common';
import {ColorTitlePipe} from '../../../@core/shared/pipes/color-title.pipe';
import {AuthService} from '../../../services/auth.service';
import { ProductPricePipe } from '../../../@core/shared/pipes/product-price.pipe';

@Component({
    selector: 'ngx-product-storages',
    templateUrl: './product-storages.component.html',
    styleUrls: ['./product-storages.component.scss'],
})
export class ProductStoragesComponent implements OnInit {

    data: Product[];
    source: LocalDataSource = new LocalDataSource();
    isNormalUser: boolean;
    settings = {
        actions: {columnTitle: '', position: 'right', add: false, edit: false, delete: false},

        columns: {
            group_name: {
                title: 'Nhóm SP',
                type: 'string',
                filter: {
                    type: 'list',
                    config: {
                        selectText: 'Select',
                        list: [],
                    },
                },
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
                filter: {
                    type: 'list',
                    config: {
                        selectText: 'Select',
                        list: [],
                    },
                },
                valuePrepareFunction: (cell, row) => {
                    return this.colorTitlePipe.transform(cell);
                },
                filterFunction(cell?: any, search?: string): boolean {
                    return cell.trim().toUpperCase() === search.trim().toUpperCase();
                },
            },
            status: {
                filter: {
                    type: 'list',
                    config: {
                        selectText: 'Select',
                        list: [],
                    },
                },
                title: 'Tình Trạng',
                type: 'string',
                valuePrepareFunction: (cell, row) => {
                    return this.productStatusPipe.transform(cell);
                },
                filterFunction(cell?: any, search?: string): boolean {
                    return cell.trim().toUpperCase() === search.trim().toUpperCase();
                },
            },
            quantity: {
                filter: false,
                title: 'Số Lượng',
                type: 'number',
                sort: true,
                sortDirection: 'asc',
            },
            price: {
                filter: false,
                title: 'Giá Mua',
                type: 'number',
                valuePrepareFunction: (cell, row) => {
                    return this.productPricePipe.transform(cell, row.source);
                },
            },
            estimated_price: {
                filter: false,
                title: 'Giá Bán Dự Kiến',
                type: 'number',
                valuePrepareFunction: (cell, row) => {
                    return this.productPricePipe.transform(cell, row.source);
                },
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
        private colorTitlePipe: ColorTitlePipe,
        private positionTitlePipe: PositionTitlePipe,
        private productPricePipe: ProductPricePipe,
        private authService: AuthService,
    ) {
        this.settings.columns.position.filter.config.list = PRODUCT_STORAGES.map(x => {
            return {
                value: x.value,
                title: x.label,
            };
        });
        this.settings.columns.color.filter.config.list = PRODUCT_COLORS.map(x => {
            return {
                value: x.value,
                title: x.label,
            };
        });
        this.settings.columns.status.filter.config.list = PRODUCT_STATUSES.map(x => {
            return {
                value: x.value,
                title: x.label,
            };
        });
        this.kaiService.getProductGroups().subscribe((productGroups) => {
            this.settings.columns.group_name.filter.config.list = productGroups.map(pg => {
                return {
                    value: pg.name,
                    title: pg.name,
                };
            });
            this.settings = Object.assign({}, this.settings);
        });
        this.kaiService.getAllProducts().subscribe((products) => {
            this.source.load(products);
            this.data = products;
        });

        if (this.authService.isNormalUser()) {
            delete this.settings.columns.price;
        }

    }

    ngOnInit(): void {
    }
}
