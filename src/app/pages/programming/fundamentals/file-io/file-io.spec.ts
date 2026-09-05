import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { FundamentalsFileIoPage } from "./file-io";

describe("FundamentalsFileIoPage", () => {
  let component: FundamentalsFileIoPage;
  let fixture: ComponentFixture<FundamentalsFileIoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentalsFileIoPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentalsFileIoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
