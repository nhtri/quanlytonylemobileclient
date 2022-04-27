import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingTransferComponent } from './incoming-transfer.component';

describe('IncomingTransferComponent', () => {
    let component: IncomingTransferComponent;
    let fixture: ComponentFixture<IncomingTransferComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IncomingTransferComponent],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(IncomingTransferComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
