import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { TheoryCfgPage } from "./cfg";

describe("TheoryCfgPage", () => {
  let component: TheoryCfgPage;
  let fixture: ComponentFixture<TheoryCfgPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoryCfgPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(TheoryCfgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
