import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { GroupPage } from "./group";

describe("GroupPage", () => {
  let component: GroupPage;
  let fixture: ComponentFixture<GroupPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupPage],
      providers: pageProviders(),
    }).compileComponents();
    fixture = TestBed.createComponent(GroupPage);
    fixture.componentRef.setInput("id", "systems");
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
