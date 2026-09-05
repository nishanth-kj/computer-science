import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsMutexPage } from "./mutex";

describe("OsMutexPage", () => {
  let component: OsMutexPage;
  let fixture: ComponentFixture<OsMutexPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsMutexPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsMutexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
