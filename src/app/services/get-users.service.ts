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
				usuColor: "",
			},
			{
				usuId: Math.random() * 100,
				usuName: "Iasmin",
				usuColor: "",
			},
			{
				usuId: Math.random() * 100,
				usuName: "Murilo",
				usuColor: "",
			},
		];

		for (let i = 0; i < users.length; i++) {
			let colorPrimary = this.getColor();
			let colorSecondary = this.getColor();

			let randomColor = `${colorPrimary}, ${colorSecondary}`;

			users[i].usuColor = randomColor;
		}

		return users;
	}

	getColor() {
		let red = this.getRandomRGBValue();
		let green = this.getRandomRGBValue();
		let blue = this.getRandomRGBValue();

		return `rgb(${red}, ${green}, ${blue})`;
	}

	addUser(users: UserModel[]) {
		if (users.length == 5) {
			alert("Limite de usuários atingido!");
			return users;
		}

		let colorPrimary = this.getColor();
		let colorSecondary = this.getColor();

		let randomColor = `${colorPrimary}, ${colorSecondary}`;

		let newUser = {
			usuId: Math.random() * 100,
			usuName: "New User",
			usuColor: randomColor,
		};

		console.log(randomColor);

		users.push(newUser);
		return users;
	}

	getRandomRGBValue() {
		return Math.floor(Math.random() * 256);
	}
}
