import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "../page-spec";
import { Topics } from "./topics";

describe("Topics", () => {
  let component: Topics;
  let fixture: ComponentFixture<Topics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Topics],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(Topics);
    fixture.componentRef.setInput("slug", "architecture");
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
