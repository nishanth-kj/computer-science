import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ArchitectureRamPage } from "./ram";

describe("ArchitectureRamPage", () => {
  let component: ArchitectureRamPage;
  let fixture: ComponentFixture<ArchitectureRamPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureRamPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitectureRamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
