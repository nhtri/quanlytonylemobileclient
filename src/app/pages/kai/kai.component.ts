import { Component } from '@angular/core';

@Component({
    selector: 'ngx-kai',
    styleUrls: ['./kai.component.scss'],
    template: `
        <div class="kai-page" >
            <router-outlet></router-outlet>
        </div>
    `,
})
export class KaiComponent {
}
