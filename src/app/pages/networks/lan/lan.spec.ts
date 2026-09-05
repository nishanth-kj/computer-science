import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksLanPage } from "./lan";

describe("NetworksLanPage", () => {
  let component: NetworksLanPage;
  let fixture: ComponentFixture<NetworksLanPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksLanPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksLanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
