import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { Dbms2nfPage } from "./2nf";

describe("Dbms2nfPage", () => {
  let component: Dbms2nfPage;
  let fixture: ComponentFixture<Dbms2nfPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dbms2nfPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(Dbms2nfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
