import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { MobileMenuItem } from '../model/mobile-menu-item';

@Component({
    selector: 'ngx-pages',
    styleUrls: ['pages.component.scss'],
    template: `
        <ngx-one-column-layout>
            <nb-menu [tag]="'main-menu'" [class]="'main-menu'" [items]="menuItems"></nb-menu>
            <router-outlet></router-outlet>
        </ngx-one-column-layout>
    `,
})

export class PagesComponent {
    public menuItems: MobileMenuItem[];

    constructor(
        private menuService: MenuService,
    ) {
        this.menuItems = [
            ...this.menuService.kaiMenuItems(),
            ...this.menuService.mainMenuItems(),
            ...this.menuService.mainMenuItemsvn(),
            ...this.menuService.mainMenuItemskho(),
            ...this.menuService.adminMenuItems(),
            ...this.menuService.mainMenuItemsCTV(),
            ...this.menuService.generalMenuItems(),
        ];
    }
}
