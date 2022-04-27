import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoingTransferProductsComponent } from './outgoing-transfer-products.component';

describe('OutgoingTransferProductsComponent', () => {
    let component: OutgoingTransferProductsComponent;
    let fixture: ComponentFixture<OutgoingTransferProductsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OutgoingTransferProductsComponent],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(OutgoingTransferProductsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
