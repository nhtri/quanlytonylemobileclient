import { Injectable } from '@angular/core';
import { MobileMenuItem } from '../model/mobile-menu-item';
import { ADMIN_MENU_ITEMS, GENERAL_MENU_ITEMS, KAI_MENU_ITEMS, MENU_ITEMS, MENU_ITEMS_KHO, MENU_ITEMS_VN } from '../@core/constant/menus.constant';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class MenuService {

    private mainMenus: MobileMenuItem[];
    private mainMenusvn: MobileMenuItem[];
    private mainMenuskho: MobileMenuItem[];
    private kaiMenus: MobileMenuItem[];
    private adminMenus: MobileMenuItem[];
    private generalMenus: MobileMenuItem[];

    constructor(
        private authService: AuthService,
    ) {
        this.mainMenus = MENU_ITEMS;
        this.mainMenusvn = MENU_ITEMS_VN;
        this.mainMenuskho = MENU_ITEMS_KHO;
        this.kaiMenus = KAI_MENU_ITEMS;
        this.adminMenus = ADMIN_MENU_ITEMS;
        this.generalMenus = GENERAL_MENU_ITEMS;
    }

    kaiMenuItems(): MobileMenuItem[] {
        return this.kaiMenus.map((menuItem) => {
            menuItem.hidden = !this.authService.canAccess(menuItem.roles);
            return menuItem;
        });
    }

    mainMenuItems(): MobileMenuItem[] {
        return this.mainMenus.map((menuItem) => {
            menuItem.hidden = !this.authService.canAccess(menuItem.roles);
            return menuItem;
        });
    }

    mainMenuItemsvn(): MobileMenuItem[] {
        return this.mainMenusvn.map((menuItem) => {
            menuItem.hidden = !this.authService.canAccess(menuItem.roles);
            return menuItem;
        });
    }

    mainMenuItemskho(): MobileMenuItem[] {
        return this.mainMenuskho.map((menuItem) => {
            menuItem.hidden = !this.authService.canAccess(menuItem.roles);
            return menuItem;
        });
    }

    adminMenuItems(): MobileMenuItem[] {
        return this.adminMenus.map((menuItem) => {
            menuItem.hidden = !this.authService.canAccess(menuItem.roles);
            return menuItem;
        });
    }

    generalMenuItems(): MobileMenuItem[] {
        return this.generalMenus.map((menuItem) => {
            menuItem.hidden = !this.authService.canAccess(menuItem.roles);
            return menuItem;
        });
    }

}
