import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { VisionFiltersCvPage } from "./filters-cv";

describe("VisionFiltersCvPage", () => {
  let component: VisionFiltersCvPage;
  let fixture: ComponentFixture<VisionFiltersCvPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisionFiltersCvPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(VisionFiltersCvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
