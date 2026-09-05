import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OopRepositoryPage } from "./repository";

describe("OopRepositoryPage", () => {
  let component: OopRepositoryPage;
  let fixture: ComponentFixture<OopRepositoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopRepositoryPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OopRepositoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
