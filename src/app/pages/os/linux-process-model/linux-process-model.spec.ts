import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsLinuxProcessModelPage } from "./linux-process-model";

describe("OsLinuxProcessModelPage", () => {
  let component: OsLinuxProcessModelPage;
  let fixture: ComponentFixture<OsLinuxProcessModelPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsLinuxProcessModelPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsLinuxProcessModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
