import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { IrWebCrawlersPage } from "./web-crawlers";

describe("IrWebCrawlersPage", () => {
  let component: IrWebCrawlersPage;
  let fixture: ComponentFixture<IrWebCrawlersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrWebCrawlersPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(IrWebCrawlersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
