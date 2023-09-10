import { Injectable } from "@angular/core";
import { UserModel } from "../models/userModel.model";

@Injectable({
	providedIn: "root",
})
export class GetUsersService {
	constructor() {}

	getUsers() {
		let users: UserModel[] = [
			{
				usuId: Math.random() * 100,
				usuName: "Jonathan",
				usuColor: this.getColor(),
			},
			{
				usuId: Math.random() * 100,
				usuName: "Iasmin",
				usuColor: this.getColor(),
			},
			{
				usuId: Math.random() * 100,
				usuName: "Murilo",
				usuColor: this.getColor(),
			},
		];

		return users;
	}

	getColor() {
		let red = this.getRandomRGBValue();
		let green = this.getRandomRGBValue();
		let blue = this.getRandomRGBValue();

		let compRed = this.getRandomRGBValue();
		let compGreen = this.getRandomRGBValue();
		let compBlue = this.getRandomRGBValue();

		return `rgb(${red}, ${green}, ${blue}), rgb(${compRed}, ${compGreen}, ${compBlue})`;
	}

	addUser(users: UserModel[]) {
		if (users.length == 5) {
			alert("Limite de usuários atingido!");
			return users;
		}

		let newUser = {
			usuId: Math.random() * 100,
			usuName: "New User",
			usuColor: this.getColor(),
		};

		users.push(newUser);
		return users;
	}

	getRandomRGBValue() {
		return Math.floor(Math.random() * 256);
	}
}
