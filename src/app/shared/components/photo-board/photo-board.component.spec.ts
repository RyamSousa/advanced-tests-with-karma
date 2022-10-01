import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PhotoBoardComponent } from "./photo-board.component";
import { PhotoBoardModule } from "./photo-board.module";

describe(PhotoBoardComponent.name, () => {
	let fixture: ComponentFixture<PhotoBoardComponent> = null;
	let component: PhotoBoardComponent = null;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PhotoBoardModule],
		}).compileComponents();

		fixture = TestBed.createComponent(PhotoBoardComponent);
		component = fixture.componentInstance;
	});
});
