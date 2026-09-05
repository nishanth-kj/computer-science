import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksLatencyPage } from "./latency";

describe("NetworksLatencyPage", () => {
  let component: NetworksLatencyPage;
  let fixture: ComponentFixture<NetworksLatencyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksLatencyPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksLatencyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
