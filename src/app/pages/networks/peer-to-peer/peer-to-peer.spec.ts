import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksPeerToPeerPage } from "./peer-to-peer";

describe("NetworksPeerToPeerPage", () => {
  let component: NetworksPeerToPeerPage;
  let fixture: ComponentFixture<NetworksPeerToPeerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksPeerToPeerPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksPeerToPeerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
