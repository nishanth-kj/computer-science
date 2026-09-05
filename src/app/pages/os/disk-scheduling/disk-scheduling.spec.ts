import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsDiskSchedulingPage } from "./disk-scheduling";

describe("OsDiskSchedulingPage", () => {
  let component: OsDiskSchedulingPage;
  let fixture: ComponentFixture<OsDiskSchedulingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsDiskSchedulingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsDiskSchedulingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
