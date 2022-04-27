import { Injectable } from '@angular/core';
import { USER_ROLE } from '../@core/constant/common';
import { isEmpty } from '../@core/utils/data.utils';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(
        private localStorageService: LocalStorageService,
    ) {
    }

    isLoggedIn() {
        const userRole = this.localStorageService.getData('role');
    }

    canAccess(roles: USER_ROLE[] | null) {
        // If not set any roles that's mean anyone can access
        if (isEmpty(roles)) {
            return true;
        }

        const userRole = this.localStorageService.getData('role');
        if (isEmpty(userRole)) {
            if (roles.indexOf(USER_ROLE.GUEST) !== -1) return true;
            return false;
        } else {
            if (roles.indexOf(USER_ROLE.GUEST) !== -1) return false;
            return roles.findIndex((role) => role === userRole.toLowerCase()) !== -1;
        }
    }
}
