import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignChatSystemPage } from "./chat-system";

describe("SystemDesignChatSystemPage", () => {
  let component: SystemDesignChatSystemPage;
  let fixture: ComponentFixture<SystemDesignChatSystemPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignChatSystemPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignChatSystemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
