import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAddonsM3 } from './ui-addons-m3';

describe('UiAddonsM3', () => {
  let component: UiAddonsM3;
  let fixture: ComponentFixture<UiAddonsM3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiAddonsM3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiAddonsM3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
