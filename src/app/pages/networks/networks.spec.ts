import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "../page-spec";
import { NetworksPage } from "./networks";

describe("NetworksPage", () => {
  let component: NetworksPage;
  let fixture: ComponentFixture<NetworksPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
