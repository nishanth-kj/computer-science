import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignMessageQueuesPage } from "./message-queues";

describe("SystemDesignMessageQueuesPage", () => {
  let component: SystemDesignMessageQueuesPage;
  let fixture: ComponentFixture<SystemDesignMessageQueuesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignMessageQueuesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignMessageQueuesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
