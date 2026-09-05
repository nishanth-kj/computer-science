import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsFifoReplacementPage } from "./fifo-replacement";

describe("OsFifoReplacementPage", () => {
  let component: OsFifoReplacementPage;
  let fixture: ComponentFixture<OsFifoReplacementPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsFifoReplacementPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsFifoReplacementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
