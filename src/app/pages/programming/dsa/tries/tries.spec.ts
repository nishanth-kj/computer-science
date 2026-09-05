import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaTriesPage } from "./tries";

describe("DsaTriesPage", () => {
  let component: DsaTriesPage;
  let fixture: ComponentFixture<DsaTriesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaTriesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaTriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
