import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailogueboxComponent } from './dailoguebox.component';

describe('DailogueboxComponent', () => {
  let component: DailogueboxComponent;
  let fixture: ComponentFixture<DailogueboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailogueboxComponent]
    });
    fixture = TestBed.createComponent(DailogueboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
