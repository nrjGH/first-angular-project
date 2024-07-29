import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TshirtCustomizerComponent } from './tshirt-customizer.component';

describe('TshirtCustomizerComponent', () => {
  let component: TshirtCustomizerComponent;
  let fixture: ComponentFixture<TshirtCustomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TshirtCustomizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TshirtCustomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
