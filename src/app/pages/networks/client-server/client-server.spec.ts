import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksClientServerPage } from "./client-server";

describe("NetworksClientServerPage", () => {
  let component: NetworksClientServerPage;
  let fixture: ComponentFixture<NetworksClientServerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksClientServerPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksClientServerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
