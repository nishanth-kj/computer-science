import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaAvlTreesPage } from "./avl-trees";

describe("DsaAvlTreesPage", () => {
  let component: DsaAvlTreesPage;
  let fixture: ComponentFixture<DsaAvlTreesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaAvlTreesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaAvlTreesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
