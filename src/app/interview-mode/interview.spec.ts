import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "../page-spec";
import { Interview } from "./interview";

describe("Interview", () => {
  let component: Interview;
  let fixture: ComponentFixture<Interview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interview],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(Interview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
