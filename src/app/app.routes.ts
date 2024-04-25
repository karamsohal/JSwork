import { Routes } from '@angular/router';
import { MyInformationComponent } from './my-information/my-information.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShipmentListComponent } from './shipment-list/shipment-list.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"/shipmentlist",
        pathMatch: "full"
    },
    {
        path: "myinformation",
        component: MyInformationComponent
    },
    {
        path: "shipmentlist",
        component: ShipmentListComponent
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];
