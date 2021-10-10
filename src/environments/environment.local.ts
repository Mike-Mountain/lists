import { unsplashAccessKey } from './secrets/unsplash.conf';

export const environment = {
  production: false,
  apiUrl: 'http://localhost:1337',
  unsplashApi: 'https://api.unsplash.com',
  accessKey: unsplashAccessKey,
};
