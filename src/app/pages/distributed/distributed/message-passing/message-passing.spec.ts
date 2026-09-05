import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DistributedMessagePassingPage } from "./message-passing";

describe("DistributedMessagePassingPage", () => {
  let component: DistributedMessagePassingPage;
  let fixture: ComponentFixture<DistributedMessagePassingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributedMessagePassingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DistributedMessagePassingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
