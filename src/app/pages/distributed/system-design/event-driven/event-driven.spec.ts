import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignEventDrivenPage } from "./event-driven";

describe("SystemDesignEventDrivenPage", () => {
  let component: SystemDesignEventDrivenPage;
  let fixture: ComponentFixture<SystemDesignEventDrivenPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignEventDrivenPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignEventDrivenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
