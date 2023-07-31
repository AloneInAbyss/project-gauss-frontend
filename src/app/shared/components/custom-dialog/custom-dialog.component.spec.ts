import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomDialogComponent } from './custom-dialog.component';
import { CustomDialogData } from './models/custom-dialog-data.model';

const dialogData: CustomDialogData = {
  buttonLabel: 'Button Label',
  description: 'Description',
  title: 'Title'
};

describe('CustomDialogComponent', () => {
  let component: CustomDialogComponent;
  let fixture: ComponentFixture<CustomDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomDialogComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: dialogData
        }
      ]
    });
    fixture = TestBed.createComponent(CustomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
