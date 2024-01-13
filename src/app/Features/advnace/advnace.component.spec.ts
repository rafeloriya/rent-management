import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvnaceComponent } from './advnace.component';

describe('AdvnaceComponent', () => {
  let component: AdvnaceComponent;
  let fixture: ComponentFixture<AdvnaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvnaceComponent]
    });
    fixture = TestBed.createComponent(AdvnaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
