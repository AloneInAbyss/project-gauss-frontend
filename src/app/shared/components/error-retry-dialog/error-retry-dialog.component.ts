import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ErrorRetryDialogOutputEnum } from './models/error-retry-dialog-output.enum';

@Component({
  selector: 'app-error-retry-dialog',
  templateUrl: './error-retry-dialog.component.html',
  styleUrls: []
})
export class ErrorRetryDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    public dialogRef: MatDialogRef<ErrorRetryDialogComponent>
  ) {}

  retry() {
    this.dialogRef.close(ErrorRetryDialogOutputEnum.RETRY);
  }

  return() {
    this.dialogRef.close(ErrorRetryDialogOutputEnum.RETURN);
  }
}
