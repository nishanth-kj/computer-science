import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { MlPcaPage } from "./pca";

describe("MlPcaPage", () => {
  let component: MlPcaPage;
  let fixture: ComponentFixture<MlPcaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlPcaPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(MlPcaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
