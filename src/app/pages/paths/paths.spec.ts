import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { Paths } from "./paths";

describe("Paths", () => {
  let component: Paths;
  let fixture: ComponentFixture<Paths>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paths],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(Paths);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
