import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaBfsPage } from "./bfs";

describe("DsaBfsPage", () => {
  let component: DsaBfsPage;
  let fixture: ComponentFixture<DsaBfsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaBfsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaBfsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
