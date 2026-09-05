import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { ContactPage } from "./contact";

describe("ContactPage", () => {
  let component: ContactPage;
  let fixture: ComponentFixture<ContactPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactPage],
      providers: pageProviders(),
    }).compileComponents();
    fixture = TestBed.createComponent(ContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
