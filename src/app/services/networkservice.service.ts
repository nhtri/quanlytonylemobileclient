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
        const userAPI = `http://103.15.51.135:3001/user`;
        return this.httpClient.post<any>(userAPI, data, this.httpOptions);
    }

    deleteuser(data): Observable<any> {
        const userAPI = `http://103.15.51.135:3001/deleteuser`;
        return this.httpClient.post<any>(userAPI, data, this.httpOptions);
    }

    khachhang(data): Observable<any> {
        const userAPI = `http://103.15.51.135:3001/khachhang`;
        return this.httpClient.post<any>(userAPI, data, this.httpOptions);
    }

    deletekhachhang(data): Observable<any> {
        const userAPI = `http://103.15.51.135:3001/deletekhachhang`;
        return this.httpClient.post<any>(userAPI, data, this.httpOptions);
    }

    getkhachhang() {
        const get = 'http://103.15.51.135:3001/getkhachhang';
        return this.httpClient.get<any>(get);
    }

    getkhachhangvn() {
        const get = 'http://103.15.51.135:3001/getkhachhangvn';
        return this.httpClient.get<any>(get);
    }

    getthongtinmaythumua() {
        const get = 'http://103.15.51.135:3001/getthongtinmaythumua';
        return this.httpClient.get<any>(get);
    }

    thongtinmaythumua(data): Observable<any> {
        const loaimayAPI = `http://103.15.51.135:3001/thongtinmaythumua`;
        return this.httpClient.post<any>(loaimayAPI, data, this.httpOptions);
    }

    deletethongtinmaythumua(data): Observable<any> {
        const loaimayAPI = `http://103.15.51.135:3001/deletethongtinmaythumua`;
        return this.httpClient.post<any>(loaimayAPI, data, this.httpOptions);
    }

    getkhachhangnhat() {
        const get = 'http://103.15.51.135:3001/getkhachhangnhat';
        return this.httpClient.get<any>(get);
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
        const get = 'http://103.15.51.135:3001/getalluser';
        return this.httpClient.get<any>(get);
    }

    // quyennhanvien(data): Observable<any> {
    //     const quyennhanvienAPI = `https://salemobileserver.herokuapp.com/authen`;
    //     return this.httpClient.post<any>(quyennhanvienAPI, data, this.httpOptions);
    // }
    quyennhanvien(data): Observable<any> {
        const quyennhanvienAPI = `http://103.15.51.135:3001/authen`;
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
        const API = `http://103.15.51.135:3001/updatepassword`;
        return this.httpClient.put<any>(API, data, this.httpOptions);
    }

    resetpassword(data): Observable<any> {
        const API = `http://103.15.51.135:3001/resetpassword`;
        return this.httpClient.put<any>(API, data, this.httpOptions);
    }

    updatetrangthaidonhang(data): Observable<any> {
        const API = `http://103.15.51.135:3001/updatetrangthaidonhang`;
        return this.httpClient.put<any>(API, data, this.httpOptions);
    }

    updatetrangthaidonhangdatcoc(data): Observable<any> {
        const API = `http://103.15.51.135:3001/updatetrangthaidonhangdatcoc`;
        return this.httpClient.put<any>(API, data, this.httpOptions);
    }

    updatequanlymaynguoimua(data): Observable<any> {
        const API = `https://salemobileserver.herokuapp.com/updatequanlymaynguoimua`;
        return this.httpClient.put<any>(API, data, this.httpOptions);
    }

    getdanhsachsanphamdabanquanlymobileall() {
        const get = 'http://103.15.51.135:3001/getdanhsachsanphamdabanquanlymobileall';
        return this.httpClient.get<any>(get);
    }

    getdanhsachsanphamdabanquanlymobileall200() {
        const get = 'http://103.15.51.135:3001/getdanhsachsanphamdabanquanlymobileall200';
        return this.httpClient.get<any>(get);
    }

    // quanlytonylemobile
    getdanhsachsanphamdabanquanlymobile() {
        const get = 'http://103.15.51.135:3001/getdanhsachsanphamdabanquanlymobile';
        return this.httpClient.get<any>(get);
    }

    getdanhsachsanphamdabanquanlymobile200() {
        const get = 'http://103.15.51.135:3001/getdanhsachsanphamdabanquanlymobile200';
        return this.httpClient.get<any>(get);
    }

    getdanhsachsanphamdabanquanlymobilejp() {
        const get = 'http://103.15.51.135:3001/getdanhsachsanphamdabanquanlymobilejp';
        return this.httpClient.get<any>(get);
    }

    getdanhsachsanphamdabanquanlymobilejp200() {
        const get = 'http://103.15.51.135:3001/getdanhsachsanphamdabanquanlymobilejp200';
        return this.httpClient.get<any>(get);
    }

    getdanhsachsanphamdabanquanlymobilevn() {
        const get = 'http://103.15.51.135:3001/getdanhsachsanphamdabanquanlymobilevn';
        return this.httpClient.get<any>(get);
    }

    getdanhsachsanphamdabanquanlymobilevn200() {
        const get = 'http://103.15.51.135:3001/getdanhsachsanphamdabanquanlymobilevn200';
        return this.httpClient.get<any>(get);
    }

    getdanhsachdonhangquanlymobiletransaction(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/getdanhsachdonhangquanlymobiletransaction`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    getdanhsachdonhangquanlymobileall() {
        const get = 'http://103.15.51.135:3001/getdanhsachdonhangquanlymobileall';
        return this.httpClient.get<any>(get);
    }
    getdanhsachdonhangquanlymobile() {
        const get = 'http://103.15.51.135:3001/getdanhsachdonhangquanlymobile';
        return this.httpClient.get<any>(get);
    }
    getdanhsachdonhangquanlymobilevn() {
        const get = 'http://103.15.51.135:3001/getdanhsachdonhangquanlymobilevn';
        return this.httpClient.get<any>(get);
    }
    getdanhsachdonhangquanlymobilejp() {
        const get = 'http://103.15.51.135:3001/getdanhsachdonhangquanlymobilejp';
        return this.httpClient.get<any>(get);
    }

    getdanhsachsanphamdabanquanlymobiletransaction(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/getdanhsachsanphamdabanquanlymobiletransaction`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    danhsachsanphamdabankhachhang(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/danhsachsanphamdabankhachhang`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    getdanhsachdonhangquanlymobileid(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/getdanhsachdonhangquanlymobileid`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    getdanhsachdonhangvasanphamquanlymobileid(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/getdanhsachdonhangvasanphamquanlymobileid`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    getnhomsanpham() {
        const get = 'http://103.15.51.135:3001/getnhomsanpham';
        return this.httpClient.get<any>(get);
    }

    getproductgroups() {
        const get = 'http://103.15.51.135:3001/product-groups';
        return this.httpClient.get<any>(get);
    }

    nhomsanpham(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/nhomsanpham`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    productgroups(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/product-groups`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    editproductgroups(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/product-groups`;
        return this.httpClient.put<any>(quanlymayAPI, data, this.httpOptions);
    }

    forsale(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/invoices/for-sale`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    // deletenhomsanpham(data): Observable<any> {
    //     const ocungAPI = `http://103.15.51.135:3001/deletenhomsanpham`;
    //     return this.httpClient.post<any>(ocungAPI, data, this.httpOptions);
    // }

    deletenhomsanpham(data): Observable<any> {
        return this.httpClient.delete(`http://103.15.51.135:3001/product-groups/`+data)

    }


    gettensanpham() {
        const get = 'http://103.15.51.135:3001/gettensanpham';
        return this.httpClient.get<any>(get);
    }

    tensanpham(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/tensanpham`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    deletetensanpham(data): Observable<any> {
        const ocungAPI = `http://103.15.51.135:3001/deletetensanpham`;
        return this.httpClient.post<any>(ocungAPI, data, this.httpOptions);
    }

    getdungluong() {
        const get = 'http://103.15.51.135:3001/getdungluong';
        return this.httpClient.get<any>(get);
    }

    dungluong(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/dungluong`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    deletedungluong(data): Observable<any> {
        const ocungAPI = `http://103.15.51.135:3001/deletedungluong`;
        return this.httpClient.post<any>(ocungAPI, data, this.httpOptions);
    }


    deletequanlythutransactionkey(data): Observable<any> {
        const ocungAPI = `http://103.15.51.135:3001/deletequanlythutransactionkey`;
        return this.httpClient.post<any>(ocungAPI, data, this.httpOptions);
    }

    getloaisanpham() {
        const get = 'http://103.15.51.135:3001/getloaisanpham';
        return this.httpClient.get<any>(get);
    }

    getsanpham(data) {
        const getsanpham = 'http://103.15.51.135:3001/getsanpham';
        return this.httpClient.post<any>(getsanpham, data, this.httpOptions);
    }

    getsanphamemei(data) {
        const getsanpham = 'http://103.15.51.135:3001/getsanphamemei';
        return this.httpClient.post<any>(getsanpham, data, this.httpOptions);
    }

    taodanhsachdonhang(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/taodanhsachdonhang`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    danhsachsanphamdaban(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/danhsachsanphamdaban`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    updateimeisanphamtonkho(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/updateimeisanphamtonkho`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    loaisanpham(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/loaisanpham`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    deleteloaisanpham(data): Observable<any> {
        const ocungAPI = `http://103.15.51.135:3001/deleteloaisanpham`;
        return this.httpClient.post<any>(ocungAPI, data, this.httpOptions);
    }

    getmau() {
        const get = 'http://103.15.51.135:3001/getmau';
        return this.httpClient.get<any>(get);
    }

    mau(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/mau`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    deletemau(data): Observable<any> {
        const ocungAPI = `http://103.15.51.135:3001/deletemau`;
        return this.httpClient.post<any>(ocungAPI, data, this.httpOptions);
    }

    getquanlychi() {
        const get = 'http://103.15.51.135:3001/getquanlychi';
        return this.httpClient.get<any>(get);
    }

    getquanlychivn() {
        const get = 'http://103.15.51.135:3001/getquanlychivn';
        return this.httpClient.get<any>(get);
    }

    getquanlychijp() {
        const get = 'http://103.15.51.135:3001/getquanlychijp';
        return this.httpClient.get<any>(get);
    }

    quanlychi(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/quanlychi`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    deletequanlychi(data): Observable<any> {
        const ocungAPI = `http://103.15.51.135:3001/deletequanlychi`;
        return this.httpClient.post<any>(ocungAPI, data, this.httpOptions);
    }

    editquanlychi(data): Observable<any> {
        const ocungAPI = `http://103.15.51.135:3001/updatequanlychi`;
        return this.httpClient.post<any>(ocungAPI, data, this.httpOptions);
    }

    getquanlythu() {
        const get = 'http://103.15.51.135:3001/getquanlythu';
        return this.httpClient.get<any>(get);
    }

    getquanlythudanhsachdonhang() {
        const get = 'http://103.15.51.135:3001/getquanlythudanhsachdonhang';
        return this.httpClient.get<any>(get);
    }

    getquanlythujpdanhsachdonhang() {
        const get = 'http://103.15.51.135:3001/getquanlythujpdanhsachdonhang';
        return this.httpClient.get<any>(get);
    }

    getquanlythujp() {
        const get = 'http://103.15.51.135:3001/getquanlythujp';
        return this.httpClient.get<any>(get);
    }

    getquanlythuvndanhsachdonhang() {
        const get = 'http://103.15.51.135:3001/getquanlythuvndanhsachdonhang';
        return this.httpClient.get<any>(get);
    }

    getquanlythuvn() {
        const get = 'http://103.15.51.135:3001/getquanlythuvn';
        return this.httpClient.get<any>(get);
    }

    getsotienthubangtienmat() {
        const get = 'http://103.15.51.135:3001/getsotienthubangtienmat';
        return this.httpClient.get<any>(get);
    }

    getsotienthubangtienmatvn() {
        const get = 'http://103.15.51.135:3001/getsotienthubangtienmatvn';
        return this.httpClient.get<any>(get);
    }

    getsotienthubangtienmatnhat() {
        const get = 'http://103.15.51.135:3001/getsotienthubangtienmatnhat';
        return this.httpClient.get<any>(get);
    }
    quanlythu(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/quanlythu`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    deletequanlythu(data): Observable<any> {
        const ocungAPI = `http://103.15.51.135:3001/deletequanlythu`;
        return this.httpClient.post<any>(ocungAPI, data, this.httpOptions);
    }

    editquanlythu(data): Observable<any> {
        const ocungAPI = `http://103.15.51.135:3001/updatequanlythu`;
        return this.httpClient.post<any>(ocungAPI, data, this.httpOptions);
    }

    getphienban() {
        const get = 'http://103.15.51.135:3001/getphienban';
        return this.httpClient.get<any>(get);
    }

    phienban(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/phienban`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    deletephienban(data): Observable<any> {
        const ocungAPI = `http://103.15.51.135:3001/deletephienban`;
        return this.httpClient.post<any>(ocungAPI, data, this.httpOptions);
    }

    // getsanphamtonkho() {
    //     const get = 'http://103.15.51.135:3001/getsanphamtonkho';
    //     return this.httpClient.get<any>(get);
    // }

    getsanphamtonkhovn() {
        const get = 'http://103.15.51.135:3001/products/shop-vn';
        return this.httpClient.get<any>(get);
    }
    getsanphamtonkhojp() {
        const get = 'http://103.15.51.135:3001/products/shop-jp';
        return this.httpClient.get<any>(get);
    }
    getsanphamtonkhokhohang() {
        const get = 'http://103.15.51.135:3001/products/warehouse';
        return this.httpClient.get<any>(get);
    }

    sanphamtonkho(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/sanphamtonkho`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    sanphamtonkhokhohang(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/products`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    sanphamtonkhovn(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/products`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    sanphamtonkhojp(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/products`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    createsanphamtonkhokhohang(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/createproducts`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    selectsanphambyid(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/getProductByIds`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    createsanphamtonkhovn(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/createproducts`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }

    createsanphamtonkhojp(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/createproducts`;
        return this.httpClient.post<any>(quanlymayAPI, data, this.httpOptions);
    }


    editsanphamtonkhokhohang(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/products`;
        return this.httpClient.put<any>(quanlymayAPI, data, this.httpOptions);
    }

    editsanphamtonkhovn(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/products`;
        return this.httpClient.put<any>(quanlymayAPI, data, this.httpOptions);
    }

    editsanphamtonkhojp(data): Observable<any> {
        const quanlymayAPI = `http://103.15.51.135:3001/products`;
        return this.httpClient.put<any>(quanlymayAPI, data, this.httpOptions);
    }


    deletesanphamtonkho(data): Observable<any> {
        return this.httpClient.delete(`http://103.15.51.135:3001/products/`+data)
    }
    deletesanphamtonkhojp(data): Observable<any> {
       
        return this.httpClient.delete(`http://103.15.51.135:3001/products/`+data)
    }
    deletesanphamtonkhovn(data): Observable<any> {
        
        return this.httpClient.delete(`http://103.15.51.135:3001/products/`+data)
    }

    updatesanpham(data): Observable<any> {
        const sanphamtonkho = `http://103.15.51.135:3001/updatesanpham`;
        return this.httpClient.post<any>(sanphamtonkho, data, this.httpOptions);
    }

    deletedanhsachsanphamdabansaukhihuy(data): Observable<any> {
        const loaimayAPI = `http://103.15.51.135:3001/deletedanhsachsanphamdabansaukhihuy`;
        return this.httpClient.post<any>(loaimayAPI, data, this.httpOptions);
    }

    updatesoluongsanphamhuy(data): Observable<any> {
        const loaimayAPI = `http://103.15.51.135:3001/updatesoluongsanphamhuy`;
        return this.httpClient.post<any>(loaimayAPI, data, this.httpOptions);
    }

    updatesoluongsanphamthumuakhisuadonhang(data): Observable<any> {
        const loaimayAPI = `http://103.15.51.135:3001/updatesoluongsanphamthumuakhisuadonhang`;
        return this.httpClient.post<any>(loaimayAPI, data, this.httpOptions);
    }

    getsoluongsanphamhientaidangco(data): Observable<any> {
        const loaimayAPI = `http://103.15.51.135:3001/getsoluongsanphamhientaidangco`;
        return this.httpClient.post<any>(loaimayAPI, data, this.httpOptions);
    }

    deletedanhsachdonhangsaukhihuy(data): Observable<any> {
        const loaimayAPI = `http://103.15.51.135:3001/deletedanhsachdonhangsaukhihuy`;
        return this.httpClient.post<any>(loaimayAPI, data, this.httpOptions);
    }
}
