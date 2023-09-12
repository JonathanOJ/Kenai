import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "kenai-header-buttons",
	templateUrl: "./kenai-header-buttons.component.html",
	styleUrls: ["./kenai-header-buttons.component.css"],
})
export class KenaiHeaderButtonsComponent {
	activeSearch: boolean = false;
	activePerfil: boolean = false;
	activeModalMobile: boolean = false;

	constructor(private route: Router) {}

	logout() {
		this.route.navigate(["Kenai/login/"]);
	}
}
