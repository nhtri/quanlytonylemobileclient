import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NetworkserviceService } from '../../../services/networkservice.service';
import { PRODUCT_COLORS, PRODUCT_STATUSES } from '../../../@core/constant/common';
import { ProductPricePipe } from '../../../@core/shared/pipes/product-price.pipe';
import { ColorTitlePipe } from '../../../@core/shared/pipes/color-title.pipe';
import { ProductStatusPipe } from '../../../@core/shared/pipes/product-status.pipe';

@Component({
    selector: 'ngx-quanlydanhsachsanphamvn',
    templateUrl: './quanlydanhsachsanphamvn.component.html',
    styleUrls: ['./quanlydanhsachsanphamvn.component.scss'],
})
export class QuanlydanhsachsanphamvnComponent implements OnInit {

    datadaxuly;
    role;


    datamau = PRODUCT_COLORS.map(x => {
        return {
            value: x.value,
            title: x.label,
        };
    });

    datatrangthai = PRODUCT_STATUSES.map(x => {
        return {
            value: x.value,
            title: x.label,
        };
    });
    status = false
    constructor(
        private service: NetworkserviceService,
        private productPricePipe: ProductPricePipe,
        private colorTitlePipe: ColorTitlePipe,
        private productStatusPipe: ProductStatusPipe,
    ) {

        this.role = localStorage.getItem('role');
        this.service.getsanphamtonkhovn().subscribe(val => {

            this.dataedit = val
            this.source.load(this.dataedit);
            this.data = val;


        });

        this.service.getproductgroups().subscribe(val => {
            // let data = val.map(val => val.name)
            let data = val;
            let datanhomsanphamfilter = [];
            data.forEach(data => {
                this.datanhomsanpham.push({ 'value': data.id, 'title': data.name });
                datanhomsanphamfilter.push({ 'value': data.name, 'title': data.name });
                console.log('datanhomsanphamfilter', datanhomsanphamfilter, 'datanhomsanpham', this.datanhomsanpham);
            });
            console.log(this.datanhomsanpham);
            this.settings.columns.group_name.editor.config.list = this.datanhomsanpham;
            this.settings.columns.group_name.filter.config.list = datanhomsanphamfilter;
            this.settings = Object.assign({}, this.settings);

        });

        this.settings.columns.color.editor.config.list = this.datamau;
        this.settings.columns.color.filter.config.list = this.datamau;
        this.settings = Object.assign({}, this.settings);


        this.settings.columns.status.editor.config.list = this.datatrangthai;
        this.settings.columns.status.filter.config.list = this.datatrangthai;
        this.settings = Object.assign({}, this.settings);

        // this.service.gettensanpham().subscribe(val => {
        //   let data = val.map(val => val.tensanpham)
        //   data.forEach(data => {
        //     this.datatensanpham.push({ "value": data, "title": data })
        //   });
        //   // this.settings.columns.name.editor.config.list = this.datatensanpham
        //   this.settings = Object.assign({}, this.settings);

        // })

        // this.service.getdungluong().subscribe(val => {
        //   let data = val.map(val => val.dungluong)
        //   data.forEach(data => {
        //     this.datadungluong.push({ "value": data, "title": data })
        //   });
        //   this.settings.columns.dungluong.editor.config.list = this.datadungluong
        //   this.settings = Object.assign({}, this.settings);

        // })

        // this.service.getmau().subscribe(val => {
        //   let data = val.map(val => val.mau)
        //   data.forEach(data => {
        //     this.datamau.push({ "value": data, "title": data })
        //   });
        //   // this.settings.columns.color.editor.config.list = this.datamau
        //   this.settings = Object.assign({}, this.settings);

        // })

        // this.service.getloaisanpham().subscribe(val => {
        //   let data = val.map(val => val.loaisanpham)
        //   data.forEach(data => {
        //     this.dataloaisanpham.push({ "value": data, "title": data })
        //   });
        //   this.settings.columns.loaisanpham.editor.config.list = this.dataloaisanpham
        //   this.settings = Object.assign({}, this.settings);

        // })

        // this.service.getphienban().subscribe(val => {
        //   let data = val.map(val => val.phienban)
        //   data.forEach(data => {
        //     this.dataphienban.push({ "value": data, "title": data })
        //   });
        //   this.settings.columns.phienban.editor.config.list = this.dataphienban
        //   this.settings = Object.assign({}, this.settings);

        // })
    }

    source: LocalDataSource = new LocalDataSource();
    data;
    datadungluong = [];
    datanhomsanpham = [];
    datatensanpham = [];
    // datamau = []
    dataloaisanpham = [];
    dataphienban = [];
    id;
    dataedit = [];
    arrayImei = [];

    ngOnInit(): void {

    }

    settings = {

        actions: {
            columnTitle: '', position: 'right',

        },
        add: {
            addButtonContent: '<i class="nb-plus"></i>',
            createButtonContent: '<i class="nb-checkmark" (click)="onClick()"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmCreate: true,
        },


        pager: {
            display: true,
            perPage: 40,
        },
        columns: {
            // id: {
            //   title: 'ID',
            //   type: 'string',
            //   // filter: false,
            //   editable: false,
            //   addable: false,
            //   hidden:true,
            // },
            group_name: {
                title: 'Nhóm Sản Phẩm',
                editor: {
                    type: 'list',
                    config: {
                        selectText: 'Select',
                        list: [],
                    },
                },
                filter: {
                    type: 'list',
                    config: {
                        selectText: 'Select',
                        list: [],
                    },
                },
            },
            name: {
                title: 'Tên Sản Phẩm',
                editor: {
                    // type: 'list',
                    // config: {
                    //   selectText: 'Select',
                    //   list: [
                    //   ]
                    // }
                    type: 'string',
                },
                // filter: false,
            },
            imei: {
                title: 'IMEI',
                type: 'string',
                // filter: false,
            },
            // dungluong: {
            //   title: 'Dung Lượng',
            //   editor: {
            //     type: 'list',
            //     config: {
            //       selectText: 'Select',
            //       list: [
            //       ]
            //     }
            //   },
            //   // filter: false,
            // },
            color: {
                title: 'Màu',
                editor: {
                    type: 'list',
                    config: {
                        selectText: 'Select',
                        list: [],
                    },
                },
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
                title: 'Tình Trạng',
                editor: {
                    type: 'list',
                    config: {
                        selectText: 'Select',
                        list: [],
                    },
                },
                filter: {
                    type: 'list',
                    config: {
                        selectText: 'Select',
                        list: [],
                    },
                },
                valuePrepareFunction: (cell, row) => {
                    return this.productStatusPipe.transform(cell);
                },
                filterFunction(cell?: any, search?: string): boolean {
                    return cell.trim().toUpperCase() === search.trim().toUpperCase();
                },
            },
            // phienban: {
            //   title: 'Phiên Bản',
            //   editor: {
            //     type: 'list',
            //     config: {
            //       selectText: 'Select',
            //       list: [
            //       ]
            //     }
            //   },
            //   // filter: false,
            // },

            quantity: {
                title: 'Số Lượng',
                type: 'string',
                editable: true,
                addable: true,
                // filter: false,
            },
            price: {
                title: 'Giá Tiền',
                type: 'string',
                editable: true,
                addable: true,
                valuePrepareFunction: (cell, row) => {
                    return this.productPricePipe.transform(cell);
                },
                // filter: false,
            },
            estimated_price: {
                title: 'Giá Bán Dự Kiến',
                type: 'string',
                editable: true,
                addable: true,
                valuePrepareFunction: (cell, row) => {
                    return this.productPricePipe.transform(cell);
                },
                // filter: false,
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


    onSaveConfirm(event) {
        if (window.confirm('Bạn có muốn thay đổi không?')) {
            console.log(event['newData']['imei']);
            this.service.editsanphamtonkhovn(
                {
                    'id': event['newData']['id'],
                    'imei': event['newData']['imei'],
                    'name': event['newData']['name'],
                    'color': event['newData']['color'],
                    'status': event['newData']['status'],
                    'quantity': event['newData']['quantity'],
                    'price': event['newData']['price'],
                    'estimated_price': event['newData']['estimated_price'],
                    'position': 'SHOP_VN',
                    'source': 'SHOP_VN',
                    'product_group_id': event['newData']['product_group_id'],
                },
            )
                .subscribe(data => {
                    window.location.reload();
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

    onDeleteConfirm(event): void {
        console.log(event);
        if (window.confirm('Bạn có chắc muốn xóa không ????')) {
            this.service.deletesanphamtonkho(
                event['data']['id'],
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

    onCreateConfirm(event): void {
        console.log('Create Event In Console');

        console.log(event['newData']['imei']);
        // this.data.forEach(element => {
        //     if (element.imei == event['newData']['imei'] && element.price != event['newData']['price']) {
        //         this.service.createsanphamtonkhojp(
        //             {
        //                 'imei': event['newData']['imei'],
        //                 'name': event['newData']['name'],
        //                 'color': event['newData']['color'],
        //                 'status': event['newData']['status'],
        //                 'quantity': event['newData']['quantity'],
        //                 'price': event['newData']['price'],
        //                 'estimated_price': event['newData']['estimated_price'],
        //                 'position': 'WAREHOUSE',
        //                 'source': 'WAREHOUSE',
        //                 'product_group_id': event['newData']['group_name'],
        //             },
        //         )
        //             .subscribe(data => {
        //                 window.location.reload();
        //                 console.log('POST Request is successful ', data);
        //             },
        //                 error => {
        //                     console.log('Error', error);

        //                 });
        //         event.confirm.resolve();
        //         this.status = true
        //     }

        // })
        // if (this.status == false) {
            this.service.sanphamtonkhovn(
                {
                    'imei': event['newData']['imei'],
                    'name': event['newData']['name'],
                    'color': event['newData']['color'],
                    'status': event['newData']['status'],
                    'quantity': event['newData']['quantity'],
                    'price': event['newData']['price'],
                    'estimated_price': event['newData']['estimated_price'],
                    'position': 'SHOP_VN',
                    'source': 'SHOP_VN',
                    'product_group_id': event['newData']['group_name'],
                },
            )
                .subscribe(data => {
                    window.location.reload();
                    console.log('POST Request is successful ', data);
                },
                    error => {
                        console.log('Error', error);

                    });
            event.confirm.resolve();
        // }

    }

    uploadExcel(e) {

        try {

            const fileName = e.target.files[0].name;

            import('xlsx').then(xlsx => {
                let workBook = null;
                let jsonData = null;
                const reader = new FileReader();
                // const file = ev.target.files[0];
                reader.onload = (event) => {
                    const data = reader.result;
                    workBook = xlsx.read(data, { type: 'binary' });
                    jsonData = workBook.SheetNames.reduce((initial, name) => {
                        const sheet = workBook.Sheets[name];
                        initial[name] = xlsx.utils.sheet_to_json(sheet);
                        return initial;
                    }, {});

                    console.log(this.getData(jsonData[Object.keys(jsonData)[0]]));
                    this.datadaxuly = this.getData(jsonData[Object.keys(jsonData)[0]]);
                };
                reader.readAsBinaryString(e.target.files[0]);
            });

        } catch (e) {
            console.log('error', e);
        }
    }


    getData(input) {
        var output = [];
        for (var i = 0; i < input.length; i++) {
            output.push({
                'product_group_id': input[i]['Nhóm Sản Phẩm'],
                'name': input[i]['Tên Sản Phẩm'],
                'imei': input[i]['IMEI'],
                'color': input[i]['Màu'],
                'status': input[i]['Tình Trạng'],
                'quantity': input[i]['Số Lượng'],
                'price': input[i]['Giá Tiền'],
                'estimated_price': input[i]['Giá Bán Dự Kiến'],
                'position': 'SHOP_VN',
                'source': 'SHOP_VN',
            });
        }
        console.log('output', output);

        output.forEach(elementoutput => {
            this.datanhomsanpham.forEach(element => {
                if (elementoutput.product_group_id == element.title) {
                    elementoutput.product_group_id = element.value;
                }
                // else{
                //   elementoutput.product_group_id = 1
                // }
                if (elementoutput.color == null || elementoutput.color == undefined) {
                    elementoutput.color = '';
                }
                if (elementoutput.status == null || elementoutput.status == undefined) {
                    elementoutput.status = '';
                }
            });
            console.log('output', output);
        });
        return output;

    }

    taosanpham() {
        alert('Đang thực hiện upload vui lòng đợi trong giây lát');
        this.datadaxuly.forEach(element => {
            this.service.sanphamtonkhovn(
                element,
            )
                .subscribe(data => {
                    console.log('POST Request is successful ', data);
                },
                    error => {
                        console.log('Error', error);

                    });
        });

        setTimeout(() => {
            window.location.reload();
        },
            10000);
    }
}
