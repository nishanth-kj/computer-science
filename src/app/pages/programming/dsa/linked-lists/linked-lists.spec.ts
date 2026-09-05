import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaLinkedListsPage } from "./linked-lists";

describe("DsaLinkedListsPage", () => {
  let component: DsaLinkedListsPage;
  let fixture: ComponentFixture<DsaLinkedListsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaLinkedListsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaLinkedListsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
