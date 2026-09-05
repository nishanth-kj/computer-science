import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { VisionImagesCvPage } from "./images-cv";

describe("VisionImagesCvPage", () => {
  let component: VisionImagesCvPage;
  let fixture: ComponentFixture<VisionImagesCvPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisionImagesCvPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(VisionImagesCvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
