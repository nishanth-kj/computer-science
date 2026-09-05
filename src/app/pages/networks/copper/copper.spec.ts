import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksCopperPage } from "./copper";

describe("NetworksCopperPage", () => {
  let component: NetworksCopperPage;
  let fixture: ComponentFixture<NetworksCopperPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksCopperPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksCopperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
