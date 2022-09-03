import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsubcategoriesComponent } from './showsubcategories.component';

describe('ShowsubcategoriesComponent', () => {
  let component: ShowsubcategoriesComponent;
  let fixture: ComponentFixture<ShowsubcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsubcategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowsubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
