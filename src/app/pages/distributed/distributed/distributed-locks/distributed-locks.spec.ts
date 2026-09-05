import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DistributedDistributedLocksPage } from "./distributed-locks";

describe("DistributedDistributedLocksPage", () => {
  let component: DistributedDistributedLocksPage;
  let fixture: ComponentFixture<DistributedDistributedLocksPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributedDistributedLocksPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DistributedDistributedLocksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
