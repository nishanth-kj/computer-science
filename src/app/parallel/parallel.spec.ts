import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "../page-spec";
import { ParallelPage } from "./parallel";

describe("ParallelPage", () => {
  let component: ParallelPage;
  let fixture: ComponentFixture<ParallelPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallelPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ParallelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
