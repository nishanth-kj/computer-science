import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignTwitterPage } from "./twitter";

describe("SystemDesignTwitterPage", () => {
  let component: SystemDesignTwitterPage;
  let fixture: ComponentFixture<SystemDesignTwitterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignTwitterPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignTwitterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
