import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';

export interface ShipmentItem {
  id:number, fromAddress: string, toAddress: string, weight: number
}
@Component({
  selector: 'app-shipment-list',
  standalone: true,
  imports: [NgFor, DialogComponent],
  templateUrl: './shipment-list.component.html',
  styleUrl: './shipment-list.component.scss'
})
export class ShipmentListComponent {
  shipmentList: ShipmentItem[] = []
  constructor(){}
  addItem(ship:ShipmentItem){
    this.shipmentList.push(ship)
  }
}
