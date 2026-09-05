import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignDropboxPage } from "./dropbox";

describe("SystemDesignDropboxPage", () => {
  let component: SystemDesignDropboxPage;
  let fixture: ComponentFixture<SystemDesignDropboxPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignDropboxPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignDropboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
