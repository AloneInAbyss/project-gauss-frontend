import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomDialogComponent } from './custom-dialog.component';
import { CustomDialogData } from './models/custom-dialog-data.model';
import { getTranslocoModule } from '../../modules/transloco-testing.module';
import { TranslocoService } from '@ngneat/transloco';

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
      imports: [getTranslocoModule()],
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

  it('should create with title, description and button label', () => {
    const nativeElement = fixture.nativeElement as HTMLElement;

    const heading = nativeElement.querySelector(
      'div > h1'
    ) as HTMLHeadingElement;
    const paragraph = nativeElement.querySelector(
      'div > div > p'
    ) as HTMLParagraphElement;
    const button = nativeElement.querySelector(
      'div > div > div > button'
    ) as HTMLButtonElement;

    expect(heading.textContent).toBe(dialogData.title);
    expect(paragraph.textContent).toBe(dialogData.description);
    expect(button.textContent).toBe(dialogData.buttonLabel);
  });
});

describe('CustomDialogComponent without MAT_DIALOG_DATA', () => {
  let component: CustomDialogComponent;
  let fixture: ComponentFixture<CustomDialogComponent>;
  let t: TranslocoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule()],
      declarations: [CustomDialogComponent],
      providers: [
        TranslocoService,
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        }
      ]
    });

    t = TestBed.inject(TranslocoService);

    fixture = TestBed.createComponent(CustomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create with title, description and button label', () => {
    const nativeElement = fixture.nativeElement as HTMLElement;

    const heading = nativeElement.querySelector(
      'div > h1'
    ) as HTMLHeadingElement;
    const paragraph = nativeElement.querySelector(
      'div > div > p'
    ) as HTMLParagraphElement;
    const button = nativeElement.querySelector(
      'div > div > div > button'
    ) as HTMLButtonElement;

    expect(heading.textContent).toBe('');
    expect(paragraph.textContent).toBe('');
    expect(button.textContent).toBe(t.translate('button.close'));
  });
});
