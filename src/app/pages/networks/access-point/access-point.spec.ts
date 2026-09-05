import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksAccessPointPage } from "./access-point";

describe("NetworksAccessPointPage", () => {
  let component: NetworksAccessPointPage;
  let fixture: ComponentFixture<NetworksAccessPointPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksAccessPointPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksAccessPointPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
