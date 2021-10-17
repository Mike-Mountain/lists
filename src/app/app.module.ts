import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UnsplashHeadersInterceptor } from './core/interceptors/unsplash-headers/unsplash-headers.interceptor';
import { windowProvider } from './shared/services/window/window.provider';
import { AuthHeadersInterceptor } from './core/interceptors/auth-headers/auth-headers.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule],
  providers: [
    windowProvider,
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: { baseUrl: environment.apiUrl },
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnsplashHeadersInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeadersInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
