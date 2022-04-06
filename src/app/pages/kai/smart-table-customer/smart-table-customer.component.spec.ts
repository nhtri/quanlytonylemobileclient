import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableCustomerComponent } from './smart-table-customer.component';

describe('SmartTableCustomerComponent', () => {
    let component: SmartTableCustomerComponent;
    let fixture: ComponentFixture<SmartTableCustomerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SmartTableCustomerComponent],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SmartTableCustomerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
