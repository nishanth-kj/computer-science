import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignFileStoragePage } from "./file-storage";

describe("SystemDesignFileStoragePage", () => {
  let component: SystemDesignFileStoragePage;
  let fixture: ComponentFixture<SystemDesignFileStoragePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignFileStoragePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignFileStoragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
