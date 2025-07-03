import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFavoriteButtonComponent } from './add-favorite-button.component';

describe('AddFavoriteButtonComponent', () => {
  let component: AddFavoriteButtonComponent;
  let fixture: ComponentFixture<AddFavoriteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFavoriteButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFavoriteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
