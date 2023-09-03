import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from "@angular/core";
import { UserModel } from "../models/userModel.model";

@Component({
	selector: "kenai-users",
	templateUrl: "./kenai-users.component.html",
	styleUrls: ["./kenai-users.component.css"],
})
export class KenaiUsersComponent implements OnInit {
	@Input() user: UserModel = new UserModel();
	@Output() emitSelectedUser: EventEmitter<UserModel> = new EventEmitter<UserModel>();

	displayIcons: boolean = false;

	constructor(private renderer: Renderer2) {}

	ngOnInit(): void {
		this.displayIcons = true;
	}

	selectedUserEvent(): void {
		this.emitSelectedUser.emit(this.user);
	}
}
