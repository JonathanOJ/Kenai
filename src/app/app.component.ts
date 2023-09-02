import { Component } from '@angular/core';
import { MovieInformationModel } from './models/movieInformation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Kenai';

  selectedItem: MovieInformationModel = new MovieInformationModel();
  constructor() {}
}
