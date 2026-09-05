import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksTcpHandshakePage } from "./tcp-handshake";

describe("NetworksTcpHandshakePage", () => {
  let component: NetworksTcpHandshakePage;
  let fixture: ComponentFixture<NetworksTcpHandshakePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksTcpHandshakePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksTcpHandshakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
