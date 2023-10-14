import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-host-dashboard *abpPermission="'Shop.Dashboard.Host'"></app-host-dashboard>
    <app-tenant-dashboard *abpPermission="'Shop.Dashboard.Tenant'"></app-tenant-dashboard>
  `,
})
export class DashboardComponent {}
