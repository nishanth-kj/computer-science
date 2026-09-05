import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksSwitchPage } from "./switch";

describe("NetworksSwitchPage", () => {
  let component: NetworksSwitchPage;
  let fixture: ComponentFixture<NetworksSwitchPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksSwitchPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksSwitchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
