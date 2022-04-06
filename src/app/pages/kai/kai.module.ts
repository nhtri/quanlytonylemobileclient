import { NgModule } from '@angular/core';
import { KAI_COMPONENTS, KaiRoutingModule } from './kai-routing.module';
import { KaiComponent } from './kai.component';

@NgModule({
    imports: [
        KaiRoutingModule,
    ],
    declarations: [
        ...KAI_COMPONENTS,
        KaiComponent,
    ],
})
export class KaiModule {
}
