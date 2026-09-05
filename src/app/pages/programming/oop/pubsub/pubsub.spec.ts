import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopPubsubPage } from "./pubsub";

describe("OopPubsubPage", () => {
  let component: OopPubsubPage;
  let fixture: ComponentFixture<OopPubsubPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopPubsubPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopPubsubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
