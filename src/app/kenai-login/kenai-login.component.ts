import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserModel } from "../models/userModel.model";
import { GetUsersService } from "../services/get-users.service";

@Component({
	selector: "app-kenai-login",
	templateUrl: "./kenai-login.component.html",
	styleUrls: ["./kenai-login.component.css"],
})
export class KenaiLoginComponent implements OnInit {
	actualHour: Date = new Date();

	users: UserModel[] = [];
	selectedUser: UserModel = new UserModel();

	constructor(private getUsersService: GetUsersService, private route: Router) {
		setInterval(() => {
			this.actualHour = new Date();
		}, 60000);
	}

	ngOnInit(): void {
		this.users = this.getUsersService.getUsers();
	}

	redirectUser(user: UserModel): void {
		this.route.navigate(["/principal-screen", user.usuName]);
		this.selectedUser = user;
	}
}
