import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserModel } from "../models/userModel.model";
import { GetUsersService } from "../services/get-users.service";
import { CookieService } from "ngx-cookie-service";

@Component({
	selector: "kenai-login",
	templateUrl: "./kenai-login.component.html",
	styleUrls: ["./kenai-login.component.css"],
})
export class KenaiLoginComponent implements OnInit {
	actualHour: Date = new Date();

	users: UserModel[] = [];
	selectedUser: UserModel = new UserModel();
	userConfig: boolean = false;

	constructor(private getUsersService: GetUsersService, private route: Router, private coockieService: CookieService) {
		setInterval(() => {
			this.actualHour = new Date();
		}, 60000);
	}

	ngOnInit(): void {
		if (!this.coockieService.check("users")) {
			this.users = this.getUsersService.getUsers();
			this.coockieService.set("users", JSON.stringify(this.users));
		} else {
			this.users = JSON.parse(this.coockieService.get("users"));
		}
	}

	redirectUser(user: UserModel): void {
		this.route.navigate(["/principal-screen", user.usuName]);
		this.selectedUser = user;
	}

	addPerfil() {
		this.users = this.getUsersService.addUser(this.users);
	}

	deleteUser(userId: number) {
		let index = this.users.findIndex((user) => user.usuId == userId);
		this.users.splice(index, 1);
	}
}
