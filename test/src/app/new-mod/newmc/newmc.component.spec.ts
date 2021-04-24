import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmcComponent } from './newmc.component';

describe('NewmcComponent', () => {
  let component: NewmcComponent;
  let fixture: ComponentFixture<NewmcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewmcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
