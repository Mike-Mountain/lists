import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule],
  providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: { baseUrl: environment.apiUrl },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
