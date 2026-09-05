import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LlmVectorDatabasesPage } from "./vector-databases";

describe("LlmVectorDatabasesPage", () => {
  let component: LlmVectorDatabasesPage;
  let fixture: ComponentFixture<LlmVectorDatabasesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlmVectorDatabasesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LlmVectorDatabasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
