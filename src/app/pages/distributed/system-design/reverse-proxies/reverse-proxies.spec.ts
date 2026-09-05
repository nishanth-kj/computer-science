import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignReverseProxiesPage } from "./reverse-proxies";

describe("SystemDesignReverseProxiesPage", () => {
  let component: SystemDesignReverseProxiesPage;
  let fixture: ComponentFixture<SystemDesignReverseProxiesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignReverseProxiesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignReverseProxiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
