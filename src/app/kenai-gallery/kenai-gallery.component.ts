import { Component, Input } from '@angular/core';
import { MovieInformationModel } from '../models/movieInformation.model';

@Component({
  selector: 'kenai-gallery',
  templateUrl: './kenai-gallery.component.html',
  styleUrls: ['./kenai-gallery.component.css'],
})
export class KenaiGalleryComponent {
  @Input() movieItens: MovieInformationModel[] = [];

  constructor() {}
}
