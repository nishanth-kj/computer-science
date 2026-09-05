import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaRedBlackTreesPage } from "./red-black-trees";

describe("DsaRedBlackTreesPage", () => {
  let component: DsaRedBlackTreesPage;
  let fixture: ComponentFixture<DsaRedBlackTreesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaRedBlackTreesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaRedBlackTreesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
