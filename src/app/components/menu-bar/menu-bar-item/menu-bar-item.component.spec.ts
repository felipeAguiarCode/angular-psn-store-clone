import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarItemComponent } from './menu-bar-item.component';

describe('MenuBarItemComponent', () => {
  let component: MenuBarItemComponent;
  let fixture: ComponentFixture<MenuBarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBarItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
