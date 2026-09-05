import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksCongestionControlPage } from "./congestion-control";

describe("NetworksCongestionControlPage", () => {
  let component: NetworksCongestionControlPage;
  let fixture: ComponentFixture<NetworksCongestionControlPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksCongestionControlPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksCongestionControlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
