import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopObjectsPage } from "./objects";

describe("OopObjectsPage", () => {
  let component: OopObjectsPage;
  let fixture: ComponentFixture<OopObjectsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopObjectsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopObjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
