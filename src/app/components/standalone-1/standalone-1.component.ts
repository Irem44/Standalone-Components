import { Component, Inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-standalone-1',
  imports: [RouterLink, RouterOutlet],
  standalone: true,
  template: `
    <a routerLink="app">App</a> |
    <a routerLink="standalone2">Standalone2</a>
    <br /><br /><br />
    <router-outlet></router-outlet>
  `,
})
export class Standalone1Component {
  constructor(@Inject('url') private url: string) {
    console.log(this.url);
  }
}
