import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaBellmanFordPage } from "./bellman-ford";

describe("DsaBellmanFordPage", () => {
  let component: DsaBellmanFordPage;
  let fixture: ComponentFixture<DsaBellmanFordPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaBellmanFordPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaBellmanFordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
