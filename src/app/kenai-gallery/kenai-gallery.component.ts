import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { MovieInformationModel } from '../models/movieInformation.model';

@Component({
  selector: 'kenai-gallery',
  templateUrl: './kenai-gallery.component.html',
  styleUrls: ['./kenai-gallery.component.css'],
})
export class KenaiGalleryComponent implements OnInit {
  @Input() movieItens: MovieInformationModel[] = [];
  @Input() movieShow: number = 0;
  @Output() selectedGallery: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    this.movieItens.find((item) => {
      if (item.movieId == this.movieShow) {
        let index = this.movieItens.indexOf(item);
        this.movieItens.splice(index, 1);
      }
    });
  }
}
