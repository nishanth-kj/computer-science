import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksErrorDetectionPage } from "./error-detection";

describe("NetworksErrorDetectionPage", () => {
  let component: NetworksErrorDetectionPage;
  let fixture: ComponentFixture<NetworksErrorDetectionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksErrorDetectionPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksErrorDetectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
