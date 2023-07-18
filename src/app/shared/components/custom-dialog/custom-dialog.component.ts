import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomDialogData } from './models/custom-dialog-data.model';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: []
})
export class CustomDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: CustomDialogData) {}
}
