import { ComponentFixture, TestBed } from "@angular/core/testing";

import { KenaiLoginComponent } from "./kenai-login.component";

describe("KenaiLoginComponent", () => {
	let component: KenaiLoginComponent;
	let fixture: ComponentFixture<KenaiLoginComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [KenaiLoginComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(KenaiLoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
