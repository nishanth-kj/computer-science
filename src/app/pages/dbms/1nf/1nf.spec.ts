import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { Dbms1nfPage } from "./1nf";

describe("Dbms1nfPage", () => {
  let component: Dbms1nfPage;
  let fixture: ComponentFixture<Dbms1nfPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dbms1nfPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(Dbms1nfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
