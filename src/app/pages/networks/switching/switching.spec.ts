import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksSwitchingPage } from "./switching";

describe("NetworksSwitchingPage", () => {
  let component: NetworksSwitchingPage;
  let fixture: ComponentFixture<NetworksSwitchingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksSwitchingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksSwitchingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
