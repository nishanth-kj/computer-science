import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { LinuxUsersGroupsPage } from "./users-groups";

describe("LinuxUsersGroupsPage", () => {
  let component: LinuxUsersGroupsPage;
  let fixture: ComponentFixture<LinuxUsersGroupsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinuxUsersGroupsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(LinuxUsersGroupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
