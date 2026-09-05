import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { MlClusteringPage } from "./clustering";

describe("MlClusteringPage", () => {
  let component: MlClusteringPage;
  let fixture: ComponentFixture<MlClusteringPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlClusteringPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(MlClusteringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
