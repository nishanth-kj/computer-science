import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "../page-spec";
import { MlPage } from "./ml";

describe("MlPage", () => {
  let component: MlPage;
  let fixture: ComponentFixture<MlPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(MlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
