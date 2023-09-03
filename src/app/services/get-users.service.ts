import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class GetUsersService {
	constructor() {}

	getUsers() {
		let users = [
			{
				usuId: 1,
				usuName: "Jonathan",
				usuColor: "rgba(120, 31, 209, 1), rgba(87, 14, 171, 1)",
			},
			{
				usuId: 2,
				usuName: "Iasmin",
				usuColor: "rgba(100, 250, 155, 1), rgba(95, 227, 106, 1)",
			},
			{
				usuId: 3,
				usuName: "Murilo",
				usuColor: "rgba(77, 240, 243, 1), rgba(77, 123, 253, 1)",
			},
		];

		return users;
	}
}
