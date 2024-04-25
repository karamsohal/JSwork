import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef,MatDialogTitle,MatDialogContent,MatDialogActions,MatDialogClose,} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ShipmentItem } from '../shipment-list/shipment-list.component';
import { MatButton } from '@angular/material/button';
@Component({
  selector: 'app-shipment-create',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,FormsModule,MatDialogContent,MatDialogTitle,MatDialogActions,MatDialogClose, MatButton],
  templateUrl: './shipment-create.component.html',
  styleUrl: './shipment-create.component.scss'
})
export class ShipmentCreateComponent {
  ship: ShipmentItem = {} as ShipmentItem;
  constructor(public dialogRef: MatDialogRef<ShipmentCreateComponent>, @Inject(MAT_DIALOG_DATA) public data: ShipmentItem){}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
