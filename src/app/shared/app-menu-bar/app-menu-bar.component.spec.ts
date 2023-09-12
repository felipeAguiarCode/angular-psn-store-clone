import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMenuBarComponent } from './app-menu-bar.component';

describe('AppMenuBarComponent', () => {
  let component: AppMenuBarComponent;
  let fixture: ComponentFixture<AppMenuBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMenuBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
