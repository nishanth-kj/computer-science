import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DistributedEventualConsistencyPage } from "./eventual-consistency";

describe("DistributedEventualConsistencyPage", () => {
  let component: DistributedEventualConsistencyPage;
  let fixture: ComponentFixture<DistributedEventualConsistencyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributedEventualConsistencyPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DistributedEventualConsistencyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
