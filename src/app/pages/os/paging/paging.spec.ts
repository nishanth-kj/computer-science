import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsPagingPage } from "./paging";

describe("OsPagingPage", () => {
  let component: OsPagingPage;
  let fixture: ComponentFixture<OsPagingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsPagingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsPagingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
