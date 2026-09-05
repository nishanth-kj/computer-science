import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { MlKnnPage } from "./knn";

describe("MlKnnPage", () => {
  let component: MlKnnPage;
  let fixture: ComponentFixture<MlKnnPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlKnnPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(MlKnnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
