import { Component, OnInit } from "@angular/core";
import { MovieInformationModel } from "../models/movieInformation.model";

@Component({
	selector: "kenai-principal-screen",
	templateUrl: "./kenai-principal-screen.component.html",
	styleUrls: ["./kenai-principal-screen.component.css"],
})
export class KenaiPrincipalScreenComponent implements OnInit {
	selectedItem: MovieInformationModel = new MovieInformationModel();

	displayMobile: boolean = false;

	constructor() {}

	ngOnInit(): void {
		this.selectedItem ? (this.selectedItem.banner = "./assets/banner-batman.png") : "";
		if (window.innerWidth <= 425) {
			this.displayMobile = true;
		}
	}
}
