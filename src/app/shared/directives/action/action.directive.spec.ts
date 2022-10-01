import { Component } from "@angular/core";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { ActionDirective } from "./action.directive";
import { ActionDirectiveModule } from "./action.module";

describe(ActionDirective.name, () => {
	let fixture: ComponentFixture<ActionDirectiveTestComponent>;
	let component: ActionDirectiveTestComponent;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ActionDirectiveTestComponent],
			imports: [ActionDirectiveModule],
		});

		fixture = TestBed.createComponent(ActionDirectiveTestComponent);
		component = fixture.componentInstance;
	});

	it(`(D) (@Output appAtion) should emit event with payload when ENTER key is pressed`, () => {
		// const divEl: HTMLElement = fixture.nativeElement.querySelector(".dummy-element");
		const divEl: HTMLElement = fixture.debugElement.query(By.directive(ActionDirective))
			.nativeElement;
		const event: KeyboardEvent = new KeyboardEvent("keyup", { key: "Enter" });
		divEl.dispatchEvent(event);

		expect(component.hasEvent()).toBe(true);
	});

	it(`(D) (@Output appAtion) should emit event with payload when clicked`, () => {
		const divEl: HTMLElement = fixture.nativeElement.querySelector(".dummy-element");
		const event = new Event("click");
		divEl.dispatchEvent(event);

		expect(component.hasEvent()).toBe(true);
	});
});

@Component({ template: "<div class='dummy-element' (appAction)='actionHandler($event)'></div>" })
class ActionDirectiveTestComponent {
	private event: Event = null;

	public actionHandler(event: Event) {
		this.event = event;
	}

	public hasEvent(): boolean {
		return !!this.event;
	}
}
