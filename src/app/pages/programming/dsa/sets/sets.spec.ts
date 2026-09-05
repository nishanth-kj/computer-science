import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaSetsPage } from "./sets";

describe("DsaSetsPage", () => {
  let component: DsaSetsPage;
  let fixture: ComponentFixture<DsaSetsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaSetsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaSetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
