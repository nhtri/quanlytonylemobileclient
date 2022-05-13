import { Component, OnInit } from '@angular/core';
import { KaiService } from '../../../services/kai.service';
import { ProductGroup } from '../../../model/product-group';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
    selector: 'ngx-product-groups-kai',
    templateUrl: './product-groups-kai.component.html',
    styleUrls: ['./product-groups-kai.component.scss'],
})
export class ProductGroupsKaiComponent implements OnInit {

    data: ProductGroup[];
    source: LocalDataSource = new LocalDataSource();
    settings = {
        actions: {columnTitle: '', position: 'right'},
        add: {
            addButtonContent: '<i class="nb-plus"></i>',
            createButtonContent: '<i class="nb-checkmark" (click)="onClick()"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmCreate: true,
        },

        columns: {
            name: {
                title: 'Nhóm Sản Phẩm',
                type: 'string',
            },

        },

        edit: {
            editButtonContent: '<i class="nb-edit"></i>',
            saveButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmSave: true,
        },
        delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true,
        },
    };

    constructor(private kaiService: KaiService) {
        this.kaiService.getProductGroups().subscribe((productsGroups) => {
            this.source.load(productsGroups);
            this.data = productsGroups;
        });
    }

    ngOnInit(): void {
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Bạn có chắc muốn xóa không ????')) {
            this.kaiService.deleteProductGroup(event['data']['id'])
                .subscribe(data => {

                        console.log('POST Request is successful ', data);
                    },
                    error => {
                        console.log('Error', error);

                    });
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }

    onCreateConfirm(event): void {
        console.log('Create Event In Console');
        if (!this.data.some(el => el.name === (event['newData']['name']))) {
            this.kaiService.createProductGroup(event['newData']['name'])
                .subscribe(data => {

                        console.log('POST Request is successful ', data);
                    },
                    error => {
                        console.log('Error', error);

                    });
            event.confirm.resolve();
        } else {
            alert('Dữ liệu đã tồn tại');
            event.confirm.reject();
        }

    }

    onSaveConfirm(event) {
        if (window.confirm('Bạn có muốn thay đổi không?')) {
            this.kaiService.updateProductGroup(
                {
                    'sort_order': 1,
                    'id': event['newData']['id'],
                    'name': event['newData']['name'],
                },
            )
                .subscribe(data => {
                        console.log('POST Request is successful ', data);
                    },
                    error => {
                        console.log('Error', error);

                    });
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }

}
