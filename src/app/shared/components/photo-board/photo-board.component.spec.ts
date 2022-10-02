import { Component, ViewChild } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SimpleChange, SimpleChanges } from "@angular/core";
import { Photo } from "./interfaces/photo";
import { PhotoBoardComponent } from "./photo-board.component";
import { PhotoBoardModule } from "./photo-board.module";
import { buildPhotolist } from "./test/build-photos-list";

describe(PhotoBoardComponent.name, () => {
	let fixture: ComponentFixture<PhotoBoardComponent>;
	let component: PhotoBoardComponent;
	let fixturePhotoBoardTestComponent: ComponentFixture<PhotoBoardTestComponent>;
	let componentPhotoBoardTestComponent: PhotoBoardTestComponent;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PhotoBoardTestComponent],
			imports: [PhotoBoardModule],
		}).compileComponents();

		fixture = TestBed.createComponent(PhotoBoardComponent);
		component = fixture.componentInstance;
		fixturePhotoBoardTestComponent = TestBed.createComponent(PhotoBoardTestComponent);
		componentPhotoBoardTestComponent = fixturePhotoBoardTestComponent.componentInstance;
	});

	it("Should display rows and columns when (@Input photos) has value", () => {
		component.photos = buildPhotolist();
		fixture.detectChanges();

		const change: SimpleChanges = {
			photos: new SimpleChange([], component.photos, true),
		};

		component.ngOnChanges(change);

		expect(component.rows.length).withContext("Number of rows").toBe(2);
		expect(component.rows[0].length)
			.withContext("Number of the columns from the first row")
			.toBe(4);
		expect(component.rows[1].length)
			.withContext("Number of the columns from the second row")
			.toBe(4);
	});

	it("(NEW APPROACH FOR ONCHANGES TEST)Should display rows and columns when (@Input photos) has value", () => {
		componentPhotoBoardTestComponent.photos = buildPhotolist();
		fixturePhotoBoardTestComponent.detectChanges();

		expect(componentPhotoBoardTestComponent.board.rows.length)
			.withContext("Number of rows")
			.toBe(2);
		expect(componentPhotoBoardTestComponent.board.rows[0].length)
			.withContext("Number of the columns from the first row")
			.toBe(4);
		expect(componentPhotoBoardTestComponent.board.rows[1].length)
			.withContext("Number of the columns from the second row")
			.toBe(4);
	});
});

@Component({ template: `<app-photo-board [photos]="photos"></app-photo-board>` })
class PhotoBoardTestComponent {
	@ViewChild(PhotoBoardComponent)
	public board: PhotoBoardComponent;
	public photos: Photo[] = [];
}
