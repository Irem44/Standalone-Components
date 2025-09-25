import { bootstrapApplication } from '@angular/platform-browser';
import { Standalone1Component } from './app/components/standalone-1/standalone-1.component';
import { provideRouter } from '@angular/router';
import { Standalone2Component } from './app/components/standalone-2/standalone-2.component';
import { AppComponent } from './app/app.component';

bootstrapApplication(Standalone1Component, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'app', pathMatch: 'full' },
      { path: 'app', component: AppComponent },
      { path: 'standalone2', component: Standalone2Component },
    ]),
    { provide: 'url', useValue: 'google.com' },
  ],
});
