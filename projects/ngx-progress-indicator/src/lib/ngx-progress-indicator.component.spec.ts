import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxProgressIndicatorComponent } from './ngx-progress-indicator.component';

describe('NgxProgressIndicatorComponent', () => {
  let component: NgxProgressIndicatorComponent;
  let fixture: ComponentFixture<NgxProgressIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxProgressIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxProgressIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
