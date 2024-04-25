import { Component, EventEmitter, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ShipmentCreateComponent } from '../shipment-create/shipment-create.component';
import { ShipmentItem } from '../shipment-list/shipment-list.component';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  @Output() newItem = new EventEmitter<ShipmentItem>();
  ship: ShipmentItem = {} as ShipmentItem;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ShipmentCreateComponent,{data: this.ship});
    dialogRef.afterClosed().subscribe(result => {
      this.newItem.emit(result);
    });
  }
}
