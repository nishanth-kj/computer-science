import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopInterfacesPage } from "./interfaces";

describe("OopInterfacesPage", () => {
  let component: OopInterfacesPage;
  let fixture: ComponentFixture<OopInterfacesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopInterfacesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopInterfacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
