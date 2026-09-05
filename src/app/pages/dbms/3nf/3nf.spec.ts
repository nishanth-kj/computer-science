import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { Dbms3nfPage } from "./3nf";

describe("Dbms3nfPage", () => {
  let component: Dbms3nfPage;
  let fixture: ComponentFixture<Dbms3nfPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dbms3nfPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(Dbms3nfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
