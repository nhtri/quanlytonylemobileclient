import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NetworkserviceService } from '../../../services/networkservice.service';
import { PRODUCT_COLORS, PRODUCT_STATUSES } from '../../../@core/constant/common';
import { ProductPricePipe } from '../../../@core/shared/pipes/product-price.pipe';
import { ColorTitlePipe } from '../../../@core/shared/pipes/color-title.pipe';
import { ProductStatusPipe } from '../../../@core/shared/pipes/product-status.pipe';

@Component({
    selector: 'ngx-quanlydanhsachsanphamnhat',
    templateUrl: './quanlydanhsachsanphamnhat.component.html',
    styleUrls: ['./quanlydanhsachsanphamnhat.component.scss'],
})
export class QuanlydanhsachsanphamnhatComponent implements OnInit {

    datadaxuly;
    role;
    soluongsanpham=0
    datamau = PRODUCT_COLORS.map(x => {
        return {
            value: x.value.toString(),
            title: x.label,
        };
    });

    datatrangthai = PRODUCT_STATUSES.map(x => {
        return {
            value: x.value.toString(),
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
        this.service.getsanphamtonkhojp().subscribe(val => {

            // val.forEach(element => {
            //     this.arrayImei = (element['imei'].split(',')).filter(val => val != '');
            //     // element.map(obj => ({ ...obj, soluong: this.arrayImei.length }))

            //     // element.soluong = this.arrayImei.length
            //     element.imei = element.imei.replace(',,', ',').replace(',,', ',').replace(',,', ',')
            //         .replace(',,', ',').replace(',,', ',').replace(',,', ',').replace(',,', ',').replace(',,', ',')
            //         .replace(',,', ',').replace(',,', ',').replace(',,', ',').replace(',,', ',').replace(',,', ',')
            //         .replace(',,', ',').replace(',,', ',').replace(',,', ',').replace(',,', ',').replace(',,', ',')
            //         .replace(',,', ',').replace(',,', ',').replace(',,', ',').replace(',,', ',').replace(',,', ',')
            //         .replace(',,', ',').replace(',,', ',').replace(',,', ',');
            //     this.dataedit.push(element);
            // });
            this.dataedit = val
            this.source.load(this.dataedit);
            this.data = val;
            this.data.forEach(element => {
                this.soluongsanpham += element.quantity
            });

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
                title: 'Nh??m S???n Ph???m',
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
                title: 'T??n S???n Ph???m',
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
            //   title: 'Dung L?????ng',
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
                title: 'M??u',
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
                title: 'T??nh Tr???ng',
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
            //   title: 'Phi??n B???n',
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
                title: 'S??? L?????ng',
                type: 'string',
                editable: true,
                addable: true,
                // filter: false,
            },
            price: {
                title: 'Gi?? Ti???n',
                type: 'string',
                editable: true,
                addable: true,
                valuePrepareFunction: (cell, row) => {
                    return this.productPricePipe.transform(cell);
                },
                // filter: false,
            },
            estimated_price: {
                title: 'Gi?? B??n D??? Ki???n',
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
        if (window.confirm('B???n c?? mu???n thay ?????i kh??ng?')) {
            console.log(event['newData']['imei']);
            this.service.editsanphamtonkhojp(
                {
                    'id': event['newData']['id'],
                    'imei': event['newData']['imei'],
                    'name': event['newData']['name'],
                    'color': event['newData']['color'],
                    'status': event['newData']['status'],
                    'quantity': event['newData']['quantity'],
                    'price': event['newData']['price'],
                    'estimated_price': event['newData']['estimated_price'],
                    'position': 'SHOP_JP',
                    'source': 'SHOP_JP',
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
        if (window.confirm('B???n c?? ch???c mu???n x??a kh??ng ????')) {
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
            this.service.sanphamtonkhojp(
                {
                    'imei': event['newData']['imei'],
                    'name': event['newData']['name'],
                    'color': event['newData']['color'],
                    'status': event['newData']['status'],
                    'quantity': event['newData']['quantity'],
                    'price': event['newData']['price'],
                    'estimated_price': event['newData']['estimated_price'],
                    'position': 'SHOP_JP',
                    'source': 'SHOP_JP',
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
            // }
            // else {
            //   alert("D??? li???u ???? t???n t???i")
            //   event.confirm.reject();
            // }
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
                'product_group_id': input[i]['Nh??m S???n Ph???m'],
                'name': input[i]['T??n S???n Ph???m'],
                'imei': input[i]['IMEI'],
                'color': input[i]['M??u'],
                'status': input[i]['T??nh Tr???ng'],
                'quantity': input[i]['S??? L?????ng'],
                'price': input[i]['Gi?? Ti???n'],
                'estimated_price': input[i]['Gi?? B??n D??? Ki???n'],
                'position': 'SHOP_JP',
                'source': 'SHOP_JP',
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
        alert('??ang th???c hi???n upload vui l??ng ?????i trong gi??y l??t');
        this.datadaxuly.forEach(element => {
            this.service.sanphamtonkhojp(
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
