import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

// Global app configuration for routing and HTTP
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),      // Sets up app routing
    provideHttpClient()         // Enables HTTP services
  ]
};
