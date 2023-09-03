import { Component, Input } from "@angular/core";

@Component({
	selector: "kenai-avaliation",
	templateUrl: "./kenai-avaliation.component.html",
	styleUrls: ["./kenai-avaliation.component.css"],
})
export class KenaiAvaliationComponent {
	@Input() avaliation: number = 0;
	@Input() movieId: number = 0;
	@Input() fontSize: string = "19px";
	@Input() width: string = "30px";
}
