import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaBinaryTreesPage } from "./binary-trees";

describe("DsaBinaryTreesPage", () => {
  let component: DsaBinaryTreesPage;
  let fixture: ComponentFixture<DsaBinaryTreesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaBinaryTreesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaBinaryTreesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
