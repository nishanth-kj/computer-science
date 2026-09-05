import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignRedisPage } from "./redis";

describe("SystemDesignRedisPage", () => {
  let component: SystemDesignRedisPage;
  let fixture: ComponentFixture<SystemDesignRedisPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignRedisPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignRedisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
