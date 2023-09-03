import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { MovieInformationModel } from "../models/movieInformation.model";

@Component({
	selector: "kenai-gallery",
	templateUrl: "./kenai-gallery.component.html",
	styleUrls: ["./kenai-gallery.component.css"],
})
export class KenaiGalleryComponent implements OnInit {
	@Input() movieItens: MovieInformationModel[] = [];
	@Input() movieShow: number = 0;
	@Output() selectedGallery: EventEmitter<any> = new EventEmitter<any>();

	savedMovieItens: MovieInformationModel[] = [];

	constructor() {}

	ngOnInit(): void {
		this.savedMovieItens = this.movieItens.map((item) => ({ ...item }));
		this.changedCard(this.movieShow);
	}

	selectMovie(movie: MovieInformationModel) {
		this.selectedGallery.emit(movie);
		this.movieShow = movie.movieId;
		this.changedCard(this.movieShow);
	}

	changedCard(movieId: number) {
		this.movieItens = this.savedMovieItens.map((item) => ({ ...item }));
		if (this.movieItens) {
			const itemToRemove = this.movieItens.find((item) => item.movieId == movieId);
			if (itemToRemove) {
				const index = this.movieItens.indexOf(itemToRemove);
				this.movieItens.splice(index, 1);
			}
		}
	}
}
