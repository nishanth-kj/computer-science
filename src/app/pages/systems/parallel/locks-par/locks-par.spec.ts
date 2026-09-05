import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ParallelLocksParPage } from "./locks-par";

describe("ParallelLocksParPage", () => {
  let component: ParallelLocksParPage;
  let fixture: ComponentFixture<ParallelLocksParPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallelLocksParPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ParallelLocksParPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
