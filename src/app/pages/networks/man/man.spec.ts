import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksManPage } from "./man";

describe("NetworksManPage", () => {
  let component: NetworksManPage;
  let fixture: ComponentFixture<NetworksManPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksManPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksManPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
