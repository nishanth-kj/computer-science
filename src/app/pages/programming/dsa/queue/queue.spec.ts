import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaQueuePage } from "./queue";

describe("DsaQueuePage", () => {
  let component: DsaQueuePage;
  let fixture: ComponentFixture<DsaQueuePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaQueuePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaQueuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
