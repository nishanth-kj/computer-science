import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsSemaphorePage } from "./semaphore";

describe("OsSemaphorePage", () => {
  let component: OsSemaphorePage;
  let fixture: ComponentFixture<OsSemaphorePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsSemaphorePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsSemaphorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
