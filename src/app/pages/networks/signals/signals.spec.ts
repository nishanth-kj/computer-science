import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksSignalsPage } from "./signals";

describe("NetworksSignalsPage", () => {
  let component: NetworksSignalsPage;
  let fixture: ComponentFixture<NetworksSignalsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksSignalsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksSignalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
