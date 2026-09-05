import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignVideoStreamingPage } from "./video-streaming";

describe("SystemDesignVideoStreamingPage", () => {
  let component: SystemDesignVideoStreamingPage;
  let fixture: ComponentFixture<SystemDesignVideoStreamingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignVideoStreamingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignVideoStreamingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
