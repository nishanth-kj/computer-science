import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignInstagramPage } from "./instagram";

describe("SystemDesignInstagramPage", () => {
  let component: SystemDesignInstagramPage;
  let fixture: ComponentFixture<SystemDesignInstagramPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignInstagramPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignInstagramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
