import { ComponentFixture, TestBed } from "@angular/core/testing";

import { KenaiGalleryComponent } from "./kenai-gallery.component";

describe("KenaiGalleryComponent", () => {
	let component: KenaiGalleryComponent;
	let fixture: ComponentFixture<KenaiGalleryComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [KenaiGalleryComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(KenaiGalleryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
