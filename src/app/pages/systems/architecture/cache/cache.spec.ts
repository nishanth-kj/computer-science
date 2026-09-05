import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ArchitectureCachePage } from "./cache";

describe("ArchitectureCachePage", () => {
  let component: ArchitectureCachePage;
  let fixture: ComponentFixture<ArchitectureCachePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureCachePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitectureCachePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
