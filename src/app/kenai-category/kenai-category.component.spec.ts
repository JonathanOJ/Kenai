import { ComponentFixture, TestBed } from "@angular/core/testing";

import { KenaiCategoryComponent } from "./kenai-category.component";

describe("KenaiCategoryComponent", () => {
	let component: KenaiCategoryComponent;
	let fixture: ComponentFixture<KenaiCategoryComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [KenaiCategoryComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(KenaiCategoryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
