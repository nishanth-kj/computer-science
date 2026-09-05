import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { Path } from "./path";

describe("Path", () => {
  let component: Path;
  let fixture: ComponentFixture<Path>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Path],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(Path);
    fixture.componentRef.setInput("id", "beginner");
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
