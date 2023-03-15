import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesingPageComponent } from './desing-page.component';

describe('DesingPageComponent', () => {
  let component: DesingPageComponent;
  let fixture: ComponentFixture<DesingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
