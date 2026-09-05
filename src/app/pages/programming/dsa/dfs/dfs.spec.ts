import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaDfsPage } from "./dfs";

describe("DsaDfsPage", () => {
  let component: DsaDfsPage;
  let fixture: ComponentFixture<DsaDfsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaDfsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaDfsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
