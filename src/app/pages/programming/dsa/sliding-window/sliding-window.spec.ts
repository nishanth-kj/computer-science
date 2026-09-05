import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaSlidingWindowPage } from "./sliding-window";

describe("DsaSlidingWindowPage", () => {
  let component: DsaSlidingWindowPage;
  let fixture: ComponentFixture<DsaSlidingWindowPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaSlidingWindowPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaSlidingWindowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
