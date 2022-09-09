import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinproductComponent } from './winproduct.component';

describe('WinproductComponent', () => {
  let component: WinproductComponent;
  let fixture: ComponentFixture<WinproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
