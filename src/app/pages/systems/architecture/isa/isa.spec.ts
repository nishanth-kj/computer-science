import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ArchitectureIsaPage } from "./isa";

describe("ArchitectureIsaPage", () => {
  let component: ArchitectureIsaPage;
  let fixture: ComponentFixture<ArchitectureIsaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureIsaPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitectureIsaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
