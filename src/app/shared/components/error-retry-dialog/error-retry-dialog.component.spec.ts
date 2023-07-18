import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorRetryDialogComponent } from './error-retry-dialog.component';

describe('ErrorRetryDialogComponent', () => {
  let component: ErrorRetryDialogComponent;
  let fixture: ComponentFixture<ErrorRetryDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorRetryDialogComponent]
    });
    fixture = TestBed.createComponent(ErrorRetryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
