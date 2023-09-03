import { Component } from '@angular/core';
import { MovieInformationModel } from '../models/movieInformation.model';

@Component({
  selector: 'kenai-principal-screen',
  templateUrl: './kenai-principal-screen.component.html',
  styleUrls: ['./kenai-principal-screen.component.css'],
})
export class KenaiPrincipalScreenComponent {
  selectedItem: MovieInformationModel = new MovieInformationModel();
}
