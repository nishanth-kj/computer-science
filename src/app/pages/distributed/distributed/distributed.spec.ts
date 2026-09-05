import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DistributedPage } from "./distributed";

describe("DistributedPage", () => {
  let component: DistributedPage;
  let fixture: ComponentFixture<DistributedPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributedPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DistributedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
