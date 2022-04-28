import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class NetworkserviceService {


    role = '';

    // Http Headers
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };

    constructor(
        private httpClient: HttpClient,
    ) {
    }

    getAllMobile() {
        const getAllMobile = 'https://salemobileserver.herokuapp.com/detail';
        return this.httpClient.get<any>(getAllMobile);
    }

    quanlymay(data): Observable<any> {
        const quanlymayAPI = `https://salemobileserver.herokuapp.com/quanlymay`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    loaimay(data): Observable<any> {
        const loaimayAPI = `https://salemobileserver.herokuapp.com/loaimay`;
        return this.httpClient.post<any>(loaimayAPI, data, this.httpOptions);
    }

    danhsachdonhang(data): Observable<any> {
        const danhsachdonhangAPI = `https://salemobileserver.herokuapp.com/danhsachdonhang`;
        return this.httpClient.post<any>(danhsachdonhangAPI, data, this.httpOptions);
    }

    danhsachdonhangtemp(data): Observable<any> {
        const danhsachdonhangAPI = `https://salemobileserver.herokuapp.com/danhsachdonhangtemp`;
        return this.httpClient.post<any>(danhsachdonhangAPI, data, this.httpOptions);
    }

    getdanhsachdonhangtheonguoimua(data): Observable<any> {
        const danhsachdonhangAPI = `https://salemobileserver.herokuapp.com/getdanhsachdonhangtheonguoimua`;
        return this.httpClient.post<any>(danhsachdonhangAPI, data, this.httpOptions);
    }

    getdanhsachdonhangtheonguoimuareal(data): Observable<any> {
        const danhsachdonhangAPI = `https://salemobileserver.herokuapp.com/getdanhsachdonhangtheonguoimuareal`;
        return this.httpClient.post<any>(danhsachdonhangAPI, data, this.httpOptions);
    }

    doimay(data): Observable<any> {
        const doimayAPI = `https://salemobileserver.herokuapp.com/doimay`;
        return this.httpClient.post<any>(doimayAPI, data, this.httpOptions);
    }

    manhinh(data): Observable<any> {
        const manhinhAPI = `https://salemobileserver.herokuapp.com/manhinh`;
        return this.httpClient.post<any>(manhinhAPI, data, this.httpOptions);
    }

    chip(data): Observable<any> {
        const chipAPI = `https://salemobileserver.herokuapp.com/chip`;
        return this.httpClient.post<any>(chipAPI, data, this.httpOptions);
    }

    ram(data): Observable<any> {
        const ramAPI = `https://salemobileserver.herokuapp.com/ram`;
        return this.httpClient.post<any>(ramAPI, data, this.httpOptions);
    }

    ocung(data): Observable<any> {
        const ocungAPI = `https://salemobileserver.herokuapp.com/ocung`;
        return this.httpClient.post<any>(ocungAPI, data, this.httpOptions);
    }

    user(data): Observable<any> {
        const userAPI = `https://quanlytonylemobile.herokuapp.com/user`;
        return this.httpClient.post<any>(userAPI, data, this.httpOptions);
    }

    deleteuser(data): Observable<any> {
        const userAPI = `https://quanlytonylemobile.herokuapp.com/deleteuser`;
        return this.httpClient.post<any>(userAPI, data, this.httpOptions);
    }

    deletedanhsachdonhang(data): Observable<any> {
        const userAPI = `https://salemobileserver.herokuapp.com/deletedanhsachdonhang`;
        return this.httpClient.post<any>(userAPI, data, this.httpOptions);
    }

    deletedanhsachdonhangreal(data): Observable<any> {
        const userAPI = `https://salemobileserver.herokuapp.com/deletedanhsachdonhangreal`;
        return this.httpClient.post<any>(userAPI, data, this.httpOptions);
    }

    deletedanhsachdonhangsanphamreal(data): Observable<any> {
        const userAPI = `https://salemobileserver.herokuapp.com/deletedanhsachdonhangsanphamreal`;
        return this.httpClient.post<any>(userAPI, data, this.httpOptions);
    }

    getquanlymaytheomasanpham(data): Observable<any> {
        const userAPI = `https://salemobileserver.herokuapp.com/getquanlymaytheomasanpham`;
        return this.httpClient.post<any>(userAPI, data, this.httpOptions);
    }

    getloaimay() {
        const get = 'https://salemobileserver.herokuapp.com/getloaimay';
        return this.httpClient.get<any>(get);
    }

    getdoimay() {
        const get = 'https://salemobileserver.herokuapp.com/getdoimay';
        return this.httpClient.get<any>(get);
    }

    getmanhinh() {
        const get = 'https://salemobileserver.herokuapp.com/getmanhinh';
        return this.httpClient.get<any>(get);
    }

    getchip() {
        const get = 'https://salemobileserver.herokuapp.com/getchip';
        return this.httpClient.get<any>(get);
    }

    getram() {
        const get = 'https://salemobileserver.herokuapp.com/getram';
        return this.httpClient.get<any>(get);
    }

    getocung() {
        const get = 'https://salemobileserver.herokuapp.com/getocung';
        return this.httpClient.get<any>(get);
    }

    getquanlymay() {
        const get = 'https://salemobileserver.herokuapp.com/getquanlymay';
        return this.httpClient.get<any>(get);
    }

    getdanhsachdonhang() {
        const get = 'https://salemobileserver.herokuapp.com/getdanhsachdonhang';
        return this.httpClient.get<any>(get);
    }

    getdanhsachdonhangtemp() {
        const get = 'https://salemobileserver.herokuapp.com/getdanhsachdonhangtemp';
        return this.httpClient.get<any>(get);
    }

    // getalluser() {
    //     const get = 'https://salemobileserver.herokuapp.com/getalluser';
    //     return this.httpClient.get<any>(get);
    // }

    getalluser() {
        const get = 'https://quanlytonylemobile.herokuapp.com/getalluser';
        return this.httpClient.get<any>(get);
    }

    // quyennhanvien(data): Observable<any> {
    //     const quyennhanvienAPI = `https://salemobileserver.herokuapp.com/authen`;
    //     return this.httpClient.post<any>(quyennhanvienAPI, data, this.httpOptions);
    // }
    quyennhanvien(data): Observable<any> {
        const quyennhanvienAPI = `https://quanlytonylemobile.herokuapp.com/authen`;
        return this.httpClient.post<any>(quyennhanvienAPI, data, this.httpOptions);
    }
    
    getdanhsachdonhangtheomadonhang(data): Observable<any> {
        const API = `https://salemobileserver.herokuapp.com/getdanhsachdonhangtheomadonhang`;
        return this.httpClient.post<any>(API, data, this.httpOptions);
    }

    deleteloaimay(data): Observable<any> {
        const loaimayAPI = `https://salemobileserver.herokuapp.com/deleteloaimay`;
        return this.httpClient.post<any>(loaimayAPI, data, this.httpOptions);
    }

    deletedoimay(data): Observable<any> {
        const doimayAPI = `https://salemobileserver.herokuapp.com/deletedoimay`;
        return this.httpClient.post<any>(doimayAPI, data, this.httpOptions);
    }

    deletemanhinh(data): Observable<any> {
        const manhinhAPI = `https://salemobileserver.herokuapp.com/deletemanhinh`;
        return this.httpClient.post<any>(manhinhAPI, data, this.httpOptions);
    }

    deletechip(data): Observable<any> {
        const chipAPI = `https://salemobileserver.herokuapp.com/deletechip`;
        return this.httpClient.post<any>(chipAPI, data, this.httpOptions);
    }

    deleteram(data): Observable<any> {
        const ramAPI = `https://salemobileserver.herokuapp.com/deleteram`;
        return this.httpClient.post<any>(ramAPI, data, this.httpOptions);
    }

    deleteocung(data): Observable<any> {
        const ocungAPI = `https://salemobileserver.herokuapp.com/deleteocung`;
        return this.httpClient.post<any>(ocungAPI, data, this.httpOptions);
    }

    deletequanlymay(data): Observable<any> {
        const quanlymayAPI = `https://salemobileserver.herokuapp.com/deletequanlymay`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    gettonggiatientemp(data): Observable<any> {
        const quanlymayAPI = `https://salemobileserver.herokuapp.com/gettonggiatientemp`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    gettonggiatienreal(data): Observable<any> {
        const quanlymayAPI = `https://salemobileserver.herokuapp.com/gettonggiatienreal`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    // updatepass(data): Observable<any> {
    //     const API = `https://salemobileserver.herokuapp.com/updatepassword`;
    //     return this.httpClient.put<any>(API, data, this.httpOptions);
    // }

    updatepass(data): Observable<any> {
        const API = `https://quanlytonylemobile.herokuapp.com/updatepassword`;
        return this.httpClient.put<any>(API, data, this.httpOptions);
    }

    resetpassword(data): Observable<any> {
        const API = `https://quanlytonylemobile.herokuapp.com/resetpassword`;
        return this.httpClient.put<any>(API, data, this.httpOptions);
    }

    updatetrangthaidonhang(data): Observable<any> {
        const API = `https://salemobileserver.herokuapp.com/updatetrangthaidonhang`;
        return this.httpClient.put<any>(API, data, this.httpOptions);
    }

    updatequanlymaynguoimua(data): Observable<any> {
        const API = `https://salemobileserver.herokuapp.com/updatequanlymaynguoimua`;
        return this.httpClient.put<any>(API, data, this.httpOptions);
    }

    // quanlytonylemobile
    getdanhsachsanphamdabanquanlymobile() {
        const get = 'https://quanlytonylemobile.herokuapp.com/getdanhsachsanphamdabanquanlymobile';
        return this.httpClient.get<any>(get);
    }

    getdanhsachsanphamdabanquanlymobilejp() {
        const get = 'https://quanlytonylemobile.herokuapp.com/getdanhsachsanphamdabanquanlymobilejp';
        return this.httpClient.get<any>(get);
    }

    getdanhsachsanphamdabanquanlymobilevn() {
        const get = 'https://quanlytonylemobile.herokuapp.com/getdanhsachsanphamdabanquanlymobilevn';
        return this.httpClient.get<any>(get);
    }

    getdanhsachdonhangquanlymobiletransaction(data): Observable<any> {
        const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/getdanhsachdonhangquanlymobiletransaction`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    getdanhsachdonhangquanlymobileall() {
        const get = 'https://quanlytonylemobile.herokuapp.com/getdanhsachdonhangquanlymobileall';
        return this.httpClient.get<any>(get);
    }
    getdanhsachdonhangquanlymobile() {
        const get = 'https://quanlytonylemobile.herokuapp.com/getdanhsachdonhangquanlymobile';
        return this.httpClient.get<any>(get);
    }
    getdanhsachdonhangquanlymobilevn() {
        const get = 'https://quanlytonylemobile.herokuapp.com/getdanhsachdonhangquanlymobilevn';
        return this.httpClient.get<any>(get);
    }
    getdanhsachdonhangquanlymobilejp() {
        const get = 'https://quanlytonylemobile.herokuapp.com/getdanhsachdonhangquanlymobilejp';
        return this.httpClient.get<any>(get);
    }

    getdanhsachsanphamdabanquanlymobiletransaction(data): Observable<any> {
        const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/getdanhsachsanphamdabanquanlymobiletransaction`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    getdanhsachdonhangquanlymobileid(data): Observable<any> {
        const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/getdanhsachdonhangquanlymobileid`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    getnhomsanpham() {
        const get = 'https://quanlytonylemobile.herokuapp.com/getnhomsanpham';
        return this.httpClient.get<any>(get);
    }

    getproductgroups() {
        const get = 'https://quanlytonylemobile.herokuapp.com/product-groups';
        return this.httpClient.get<any>(get);
    }

    nhomsanpham(data): Observable<any> {
        const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/nhomsanpham`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    productgroups(data): Observable<any> {
        const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/product-groups`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    editproductgroups(data): Observable<any> {
        const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/product-groups`;
        return this.httpClient.put<any>(quanlymayAPI, data, this.httpOptions);
    }

    forsale(data): Observable<any> {
        const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/invoices/for-sale`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    // deletenhomsanpham(data): Observable<any> {
    //     const ocungAPI = `https://quanlytonylemobile.herokuapp.com/deletenhomsanpham`;
    //     return this.httpClient.post<any>(ocungAPI, data, this.httpOptions);
    // }

    deletenhomsanpham(data): Observable<any> {
        return this.httpClient.delete(`https://quanlytonylemobile.herokuapp.com/product-groups/`+data)

    }


    gettensanpham() {
        const get = 'https://quanlytonylemobile.herokuapp.com/gettensanpham';
        return this.httpClient.get<any>(get);
    }

    tensanpham(data): Observable<any> {
        const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/tensanpham`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    deletetensanpham(data): Observable<any> {
        const ocungAPI = `https://quanlytonylemobile.herokuapp.com/deletetensanpham`;
        return this.httpClient.post<any>(ocungAPI, data, this.httpOptions);
    }

    getdungluong() {
        const get = 'https://quanlytonylemobile.herokuapp.com/getdungluong';
        return this.httpClient.get<any>(get);
    }

    dungluong(data): Observable<any> {
        const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/dungluong`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    deletedungluong(data): Observable<any> {
        const ocungAPI = `https://quanlytonylemobile.herokuapp.com/deletedungluong`;
        return this.httpClient.post<any>(ocungAPI, data, this.httpOptions);
    }

    getloaisanpham() {
        const get = 'https://quanlytonylemobile.herokuapp.com/getloaisanpham';
        return this.httpClient.get<any>(get);
    }

    getsanpham(data) {
        const getsanpham = 'https://quanlytonylemobile.herokuapp.com/getsanpham';
        return this.httpClient.post<any>(getsanpham, data, this.httpOptions);
    }

    taodanhsachdonhang(data): Observable<any> {
        const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/taodanhsachdonhang`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    danhsachsanphamdaban(data): Observable<any> {
        const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/danhsachsanphamdaban`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    updateimeisanphamtonkho(data): Observable<any> {
        const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/updateimeisanphamtonkho`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    loaisanpham(data): Observable<any> {
        const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/loaisanpham`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    deleteloaisanpham(data): Observable<any> {
        const ocungAPI = `https://quanlytonylemobile.herokuapp.com/deleteloaisanpham`;
        return this.httpClient.post<any>(ocungAPI, data, this.httpOptions);
    }

    getmau() {
        const get = 'https://quanlytonylemobile.herokuapp.com/getmau';
        return this.httpClient.get<any>(get);
    }

    mau(data): Observable<any> {
        const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/mau`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    deletemau(data): Observable<any> {
        const ocungAPI = `https://quanlytonylemobile.herokuapp.com/deletemau`;
        return this.httpClient.post<any>(ocungAPI, data, this.httpOptions);
    }

    getquanlychi() {
        const get = 'https://quanlytonylemobile.herokuapp.com/getquanlychi';
        return this.httpClient.get<any>(get);
    }

    getquanlychivn() {
        const get = 'https://quanlytonylemobile.herokuapp.com/getquanlychivn';
        return this.httpClient.get<any>(get);
    }

    getquanlychijp() {
        const get = 'https://quanlytonylemobile.herokuapp.com/getquanlychijp';
        return this.httpClient.get<any>(get);
    }

    quanlychi(data): Observable<any> {
        const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/quanlychi`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    deletequanlychi(data): Observable<any> {
        const ocungAPI = `https://quanlytonylemobile.herokuapp.com/deletequanlychi`;
        return this.httpClient.post<any>(ocungAPI, data, this.httpOptions);
    }

    editquanlychi(data): Observable<any> {
        const ocungAPI = `https://quanlytonylemobile.herokuapp.com/updatequanlychi`;
        return this.httpClient.post<any>(ocungAPI, data, this.httpOptions);
    }

    getquanlythu() {
        const get = 'https://quanlytonylemobile.herokuapp.com/getquanlythu';
        return this.httpClient.get<any>(get);
    }
    getquanlythujp() {
        const get = 'https://quanlytonylemobile.herokuapp.com/getquanlythujp';
        return this.httpClient.get<any>(get);
    }
    getquanlythuvn() {
        const get = 'https://quanlytonylemobile.herokuapp.com/getquanlythuvn';
        return this.httpClient.get<any>(get);
    }

    quanlythu(data): Observable<any> {
        const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/quanlythu`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    deletequanlythu(data): Observable<any> {
        const ocungAPI = `https://quanlytonylemobile.herokuapp.com/deletequanlythu`;
        return this.httpClient.post<any>(ocungAPI, data, this.httpOptions);
    }

    editquanlythu(data): Observable<any> {
        const ocungAPI = `https://quanlytonylemobile.herokuapp.com/updatequanlythu`;
        return this.httpClient.post<any>(ocungAPI, data, this.httpOptions);
    }

    getphienban() {
        const get = 'https://quanlytonylemobile.herokuapp.com/getphienban';
        return this.httpClient.get<any>(get);
    }

    phienban(data): Observable<any> {
        const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/phienban`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    deletephienban(data): Observable<any> {
        const ocungAPI = `https://quanlytonylemobile.herokuapp.com/deletephienban`;
        return this.httpClient.post<any>(ocungAPI, data, this.httpOptions);
    }

    // getsanphamtonkho() {
    //     const get = 'https://quanlytonylemobile.herokuapp.com/getsanphamtonkho';
    //     return this.httpClient.get<any>(get);
    // }

    getsanphamtonkhovn() {
        const get = 'https://quanlytonylemobile.herokuapp.com/products/shop-vn';
        return this.httpClient.get<any>(get);
    }
    getsanphamtonkhojp() {
        const get = 'https://quanlytonylemobile.herokuapp.com/products/shop-jp';
        return this.httpClient.get<any>(get);
    }
    getsanphamtonkhokhohang() {
        const get = 'https://quanlytonylemobile.herokuapp.com/products/warehouse';
        return this.httpClient.get<any>(get);
    }

    sanphamtonkho(data): Observable<any> {
        const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/sanphamtonkho`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    sanphamtonkhokhohang(data): Observable<any> {
        const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/products`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    sanphamtonkhovn(data): Observable<any> {
        const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/products`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    sanphamtonkhojp(data): Observable<any> {
        const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/products`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }


    editsanphamtonkhokhohang(data): Observable<any> {
        const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/products`;
        return this.httpClient.put<any>(quanlymayAPI, data, this.httpOptions);
    }

    editsanphamtonkhovn(data): Observable<any> {
        const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/products`;
        return this.httpClient.put<any>(quanlymayAPI, data, this.httpOptions);
    }

    editsanphamtonkhojp(data): Observable<any> {
        const quanlymayAPI = `https://quanlytonylemobile.herokuapp.com/products`;
        return this.httpClient.put<any>(quanlymayAPI, data, this.httpOptions);
    }


    deletesanphamtonkho(data): Observable<any> {
        return this.httpClient.delete(`https://quanlytonylemobile.herokuapp.com/products/`+data)
    }
    deletesanphamtonkhojp(data): Observable<any> {
       
        return this.httpClient.delete(`https://quanlytonylemobile.herokuapp.com/products/`+data)
    }
    deletesanphamtonkhovn(data): Observable<any> {
        
        return this.httpClient.delete(`https://quanlytonylemobile.herokuapp.com/products/`+data)
    }

    updatesanpham(data): Observable<any> {
        const sanphamtonkho = `https://quanlytonylemobile.herokuapp.com/updatesanpham`;
        return this.httpClient.post<any>(sanphamtonkho, data, this.httpOptions);
    }
}
