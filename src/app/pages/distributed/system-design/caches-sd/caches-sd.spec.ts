import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignCachesSdPage } from "./caches-sd";

describe("SystemDesignCachesSdPage", () => {
  let component: SystemDesignCachesSdPage;
  let fixture: ComponentFixture<SystemDesignCachesSdPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignCachesSdPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignCachesSdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
