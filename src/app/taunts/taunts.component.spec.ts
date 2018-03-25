import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TauntsComponent } from './taunts.component';

describe('TauntsComponent', () => {
  let component: TauntsComponent;
  let fixture: ComponentFixture<TauntsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TauntsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TauntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
