import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksBandwidthPage } from "./bandwidth";

describe("NetworksBandwidthPage", () => {
  let component: NetworksBandwidthPage;
  let fixture: ComponentFixture<NetworksBandwidthPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksBandwidthPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksBandwidthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
