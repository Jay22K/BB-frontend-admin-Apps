import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverymanListComponent } from './deliveryman-list.component';

describe('DeliverymanListComponent', () => {
  let component: DeliverymanListComponent;
  let fixture: ComponentFixture<DeliverymanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliverymanListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliverymanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
