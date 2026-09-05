import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsSynchronizationPage } from "./synchronization";

describe("OsSynchronizationPage", () => {
  let component: OsSynchronizationPage;
  let fixture: ComponentFixture<OsSynchronizationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsSynchronizationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsSynchronizationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
