import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { MlClassificationPage } from "./classification";

describe("MlClassificationPage", () => {
  let component: MlClassificationPage;
  let fixture: ComponentFixture<MlClassificationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlClassificationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(MlClassificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
