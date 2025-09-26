import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-standalone-2',
  imports: [],
  standalone: true,
  template: `standalone-2
    <br />
    {{ id }}
    <br />
    {{ name }}
    <br />
    {{ surname }} `,
})
export class Standalone2Component {
  @Input() id: number;
  @Input() name: string;
  @Input() surname: string;
}
