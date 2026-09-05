import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignObjectStoragePage } from "./object-storage";

describe("SystemDesignObjectStoragePage", () => {
  let component: SystemDesignObjectStoragePage;
  let fixture: ComponentFixture<SystemDesignObjectStoragePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignObjectStoragePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignObjectStoragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
