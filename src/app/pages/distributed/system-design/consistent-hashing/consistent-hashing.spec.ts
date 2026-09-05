import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignConsistentHashingPage } from "./consistent-hashing";

describe("SystemDesignConsistentHashingPage", () => {
  let component: SystemDesignConsistentHashingPage;
  let fixture: ComponentFixture<SystemDesignConsistentHashingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignConsistentHashingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignConsistentHashingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
