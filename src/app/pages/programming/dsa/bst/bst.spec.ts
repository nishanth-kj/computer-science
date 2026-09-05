import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaBstPage } from "./bst";

describe("DsaBstPage", () => {
  let component: DsaBstPage;
  let fixture: ComponentFixture<DsaBstPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaBstPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaBstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
