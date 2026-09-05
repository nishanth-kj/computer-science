import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsRoundRobinPage } from "./round-robin";

describe("OsRoundRobinPage", () => {
  let component: OsRoundRobinPage;
  let fixture: ComponentFixture<OsRoundRobinPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsRoundRobinPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsRoundRobinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
