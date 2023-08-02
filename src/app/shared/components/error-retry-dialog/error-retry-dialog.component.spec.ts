import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';
import { getTranslocoModule } from '../../modules/transloco-testing.module';
import { ErrorRetryDialogComponent } from './error-retry-dialog.component';
import { ErrorRetryDialogOutputEnum } from './models/error-retry-dialog-output.enum';

const dialogData: string = 'Error Message';

const matDialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

describe('ErrorRetryDialogComponent', () => {
  let component: ErrorRetryDialogComponent;
  let fixture: ComponentFixture<ErrorRetryDialogComponent>;
  let t: TranslocoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule()],
      declarations: [ErrorRetryDialogComponent],
      providers: [
        TranslocoService,
        {
          provide: MAT_DIALOG_DATA,
          useValue: dialogData
        },
        {
          provide: MatDialogRef,
          useValue: matDialogRefSpy
        }
      ]
    });

    t = TestBed.inject(TranslocoService);

    fixture = TestBed.createComponent(ErrorRetryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create with title, description and buttons', () => {
    const nativeElement = fixture.nativeElement as HTMLElement;

    const heading = nativeElement.querySelector(
      'div > h1'
    ) as HTMLHeadingElement;
    const paragraph = nativeElement.querySelector(
      'div > div > p'
    ) as HTMLParagraphElement;
    const retryButton = nativeElement.querySelector(
      '#dialog-retry-button'
    ) as HTMLButtonElement;
    const returnButton = nativeElement.querySelector(
      '#dialog-return-button'
    ) as HTMLButtonElement;

    expect(heading.textContent).toBe(t.translate('dialog.error'));
    expect(paragraph.textContent).toBe(dialogData);
    expect(retryButton.textContent).toBe(t.translate('button.retry'));
    expect(returnButton.textContent).toBe(t.translate('button.return'));
  });

  it('should emit retry when retry button clicked', () => {
    const nativeElement = fixture.nativeElement as HTMLElement;

    const retryButton = nativeElement.querySelector(
      '#dialog-retry-button'
    ) as HTMLButtonElement;

    retryButton.click();

    expect(component.dialogRef.close).toHaveBeenCalledWith(
      ErrorRetryDialogOutputEnum.RETRY
    );
  });

  it('should emit return when return button clicked', () => {
    const nativeElement = fixture.nativeElement as HTMLElement;

    const returnButton = nativeElement.querySelector(
      '#dialog-return-button'
    ) as HTMLButtonElement;

    returnButton.click();

    expect(component.dialogRef.close).toHaveBeenCalledWith(
      ErrorRetryDialogOutputEnum.RETURN
    );
  });
});
