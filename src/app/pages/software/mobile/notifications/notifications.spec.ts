import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { MobileNotificationsPage } from "./notifications";

describe("MobileNotificationsPage", () => {
  let component: MobileNotificationsPage;
  let fixture: ComponentFixture<MobileNotificationsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileNotificationsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(MobileNotificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
