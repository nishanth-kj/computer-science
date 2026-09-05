import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksL6PresentationPage } from "./l6-presentation";

describe("NetworksL6PresentationPage", () => {
  let component: NetworksL6PresentationPage;
  let fixture: ComponentFixture<NetworksL6PresentationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksL6PresentationPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksL6PresentationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
