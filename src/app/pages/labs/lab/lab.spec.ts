import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "../../page-spec";
import { Lab } from "./lab";

describe("Lab", () => {
  let component: Lab;
  let fixture: ComponentFixture<Lab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lab],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(Lab);
    fixture.componentRef.setInput("id", "tcp-simulator");
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
