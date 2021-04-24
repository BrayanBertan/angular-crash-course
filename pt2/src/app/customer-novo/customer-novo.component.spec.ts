import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerNovoComponent } from './customer-novo.component';

describe('CustomerNovoComponent', () => {
  let component: CustomerNovoComponent;
  let fixture: ComponentFixture<CustomerNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerNovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
