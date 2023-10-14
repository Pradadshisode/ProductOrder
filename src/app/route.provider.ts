import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/dashboard',
        name: '::Menu:Dashboard',
        iconClass: 'fas fa-chart-line',
        order: 2,
        layout: eLayoutType.application,
        requiredPolicy: 'Shop.Dashboard.Host  || Shop.Dashboard.Tenant',
      },
      {
        path: '/product-store',
        name: '::Menu:ProductStore',
        iconClass: 'fa fa-shopping-basket',
        order: 3,
        layout: eLayoutType.application,
      },
      {
        path: '/products',
        name: '::Menu:Products',
        parentName: '::Menu:ProductStore',
        layout: eLayoutType.application,
      // requiredPolicy:'ProductStore.Products'
      },
    ]);
  };
}
