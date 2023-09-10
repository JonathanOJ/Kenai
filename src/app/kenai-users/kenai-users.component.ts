import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from "@angular/core";
import { UserModel } from "../models/userModel.model";

@Component({
	selector: "kenai-users",
	templateUrl: "./kenai-users.component.html",
	styleUrls: ["./kenai-users.component.css"],
})
export class KenaiUsersComponent implements OnInit {
	@Input() user: UserModel = new UserModel();
	@Input() userConfig: boolean = false;
	@Output() emitSelectedUser: EventEmitter<UserModel> = new EventEmitter<UserModel>();
	@Output() emitDeleteUser: EventEmitter<number> = new EventEmitter<number>();

	displayIcons: boolean = false;
	editName: boolean = false;
	deleteUser: boolean = false;

	constructor(private renderer: Renderer2) {}

	ngOnInit(): void {
		this.displayIcons = true;
	}

	selectedUserEvent(): void {
		if (!this.userConfig) {
			this.emitSelectedUser.emit(this.user);
		}
	}

	deleteUserEvent(): void {
		setTimeout(() => {
			this.emitDeleteUser.emit(this.user.usuId);
		}, 300);
	}
}
