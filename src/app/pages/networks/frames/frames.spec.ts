import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksFramesPage } from "./frames";

describe("NetworksFramesPage", () => {
  let component: NetworksFramesPage;
  let fixture: ComponentFixture<NetworksFramesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksFramesPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksFramesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
