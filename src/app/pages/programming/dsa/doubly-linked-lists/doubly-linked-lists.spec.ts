import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DsaDoublyLinkedListsPage } from "./doubly-linked-lists";

describe("DsaDoublyLinkedListsPage", () => {
  let component: DsaDoublyLinkedListsPage;
  let fixture: ComponentFixture<DsaDoublyLinkedListsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsaDoublyLinkedListsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DsaDoublyLinkedListsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
