import { TestBed, ComponentFixture, fakeAsync, tick } from "@angular/core/testing";
import { PhotoFrameComponent } from "./photo-frame.component";
import { PhotoFrameModule } from "./photo-frame.module";

describe(PhotoFrameComponent.name, () => {
	let fixture: ComponentFixture<PhotoFrameComponent> = null;
	let photoFrameComponent: PhotoFrameComponent = null;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PhotoFrameModule],
		}).compileComponents();

		fixture = TestBed.createComponent(PhotoFrameComponent);
		photoFrameComponent = fixture.componentInstance;
	});

	it("#Should create component", () => {
		expect(photoFrameComponent).toBeTruthy();
	});

	it(`#${PhotoFrameComponent.prototype.like.name}
        Should trigger (@Output liked) once when called multiple
        times within debounce time`, fakeAsync(() => {
		fixture.detectChanges();
		let times = 0;
		photoFrameComponent.liked.subscribe(() => times++);

		photoFrameComponent.like();
		photoFrameComponent.like();
		tick(500);

		expect(times).toBe(1);
	}));

	it(`#${PhotoFrameComponent.prototype.like.name}
        Should trigger (@Output liked) two times when called
        outside debounce time`, fakeAsync(() => {
		fixture.detectChanges();
		let times = 0;
		photoFrameComponent.liked.subscribe(() => times++);

		photoFrameComponent.like();
		tick(500);
		photoFrameComponent.like();
		tick(500);

		expect(times).toBe(2);
	}));

	it(`(D) Should display number of likes when (@Input likes) is incremented`, () => {
		fixture.detectChanges();
		photoFrameComponent.likes++;
		fixture.detectChanges();
		const element: HTMLElement = fixture.nativeElement.querySelector(".like-counter");

		expect(element.textContent.trim()).toBe("1");
	});

	it(`(D) Should update 'aria-label' when (@Input likes) is incremented`, () => {
		fixture.detectChanges();
		photoFrameComponent.likes++;
		fixture.detectChanges();
		const element: HTMLElement = fixture.nativeElement.querySelector("span");

		expect(element.getAttribute("aria-label")).toBe("1: people liked");
	});

	it(`(D) Should have 'aria-label' with 0 (@Input likes)`, () => {
		fixture.detectChanges();
		const element: HTMLElement = fixture.nativeElement.querySelector("span");

		expect(element.getAttribute("aria-label")).toBe("0: people liked");
	});

	it(`(D) Should display image with 'src' adnd 'description' when bound to properties`, () => {
		const description = "some description";
		const src = "http://somesite.com/img.jpj";

		photoFrameComponent.description = description;
		photoFrameComponent.src = src;
		fixture.detectChanges();

		const image: HTMLElement = fixture.nativeElement.querySelector("img");

		expect(image.getAttribute("alt")).toBe(description);
		expect(image.getAttribute("src")).toBe(src);
	});
});
