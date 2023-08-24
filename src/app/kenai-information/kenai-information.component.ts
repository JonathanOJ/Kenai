import { Component, Input } from '@angular/core';

@Component({
  selector: 'kenai-information',
  templateUrl: './kenai-information.component.html',
  styleUrls: ['./kenai-information.component.css'],
})
export class KenaiInformationComponent {
  @Input() category: string = '';
  @Input() totalTime: string = '';
  @Input() image: string = '';
  @Input() tittleMovie: string = '';
  @Input() description: string = '';
  @Input() avaliation: number = 0;

  itemId: number = Math.floor(Math.random() * 1000);

  constructor() {}

  formatedHour() {
    return this.totalTime.replace('h', 'h ');
  }
}
