import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceSortComponent } from './place-sort.component';

describe('PlaceSortComponent', () => {
  let component: PlaceSortComponent;
  let fixture: ComponentFixture<PlaceSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceSortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
