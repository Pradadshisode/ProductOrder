import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44328/',
  redirectUri: baseUrl,
  clientId: 'Shop_App',
  responseType: 'code',
  scope: 'offline_access Shop',
  requireHttps: true,
};

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Shop',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44328',
      rootNamespace: 'Shop',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
} as Environment;
