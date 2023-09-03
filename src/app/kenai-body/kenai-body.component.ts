import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { MovieInformationModel } from "../models/movieInformation.model";
import { BuildMovieItensService } from "../services/build-movie-itens.service";

@Component({
	selector: "kenai-body",
	templateUrl: "./kenai-body.component.html",
	styleUrls: ["./kenai-body.component.css"],
})
export class KenaiBodyComponent implements OnInit {
	movieItens: Array<MovieInformationModel> = new Array<MovieInformationModel>();
	selectedItem: MovieInformationModel = new MovieInformationModel();

	@Output() emitSelectedGalleryItem = new EventEmitter<MovieInformationModel>();

	constructor(private getItens: BuildMovieItensService) {}

	ngOnInit(): void {
		this.movieItens = this.getItens.getMovieItens();
		this.selectedItem = this.movieItens[0];
		this.emitSelectedGallery();
	}

	emitSelectedGallery() {
		this.emitSelectedGalleryItem.emit(this.selectedItem);
	}
}
