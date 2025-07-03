import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumLabelComponent } from './premium-label.component';

describe('PremiumLabelComponent', () => {
  let component: PremiumLabelComponent;
  let fixture: ComponentFixture<PremiumLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiumLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiumLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
