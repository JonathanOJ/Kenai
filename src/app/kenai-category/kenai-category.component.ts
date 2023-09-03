import { Component, Input } from "@angular/core";

@Component({
	selector: "kenai-category",
	templateUrl: "./kenai-category.component.html",
	styleUrls: ["./kenai-category.component.css"],
})
export class KenaiCategoryComponent {
	@Input() category: string = "";
}
