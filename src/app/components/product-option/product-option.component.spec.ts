import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOptionComponent } from './product-option.component';

describe('ProductOptionComponent', () => {
  let component: ProductOptionComponent;
  let fixture: ComponentFixture<ProductOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
