import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "../page-spec";
import { VisionPage } from "./vision";

describe("VisionPage", () => {
  let component: VisionPage;
  let fixture: ComponentFixture<VisionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisionPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(VisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
