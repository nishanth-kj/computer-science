import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignCdnsPage } from "./cdns";

describe("SystemDesignCdnsPage", () => {
  let component: SystemDesignCdnsPage;
  let fixture: ComponentFixture<SystemDesignCdnsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignCdnsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignCdnsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
