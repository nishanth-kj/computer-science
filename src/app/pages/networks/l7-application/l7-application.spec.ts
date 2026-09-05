import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksL7ApplicationPage } from "./l7-application";

describe("NetworksL7ApplicationPage", () => {
  let component: NetworksL7ApplicationPage;
  let fixture: ComponentFixture<NetworksL7ApplicationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksL7ApplicationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksL7ApplicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
