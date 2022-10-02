import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { PhotoBoardMockService } from "src/app/shared/components/photo-board/services/photo-board-mock.service";
import { PhotoBoardService } from "src/app/shared/components/photo-board/services/photo-board.service";
import { PhotoListComponent } from "./photo-list.component";
import { PhotoListModule } from "./photo-list.module";

describe("PhotoListComponent", () => {
	let component: PhotoListComponent;
	let fixture: ComponentFixture<PhotoListComponent>;
	let service: PhotoBoardService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PhotoListModule, HttpClientModule],
			providers: [
				{
					provide: PhotoBoardService,
					useClass: PhotoBoardMockService,
				},
			],
		}).compileComponents();

		fixture = TestBed.createComponent(PhotoListComponent);
		component = fixture.componentInstance;
		service = TestBed.inject(PhotoBoardService);
	});

	it("(D) Should display board when data arrives", () => {
		fixture.detectChanges();

		const board = fixture.nativeElement.querySelector("app-photo-board");
		const loader = fixture.nativeElement.querySelector(".loader");

		expect(board).withContext("Should display board").not.toBeNull();
		expect(loader).withContext("Should not display loader").toBeNull();
	});
});
