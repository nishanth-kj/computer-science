import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "../page-spec";
import { CloudPage } from "./cloud";

describe("CloudPage", () => {
  let component: CloudPage;
  let fixture: ComponentFixture<CloudPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CloudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
