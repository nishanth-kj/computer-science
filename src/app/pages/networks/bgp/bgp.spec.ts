import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksBgpPage } from "./bgp";

describe("NetworksBgpPage", () => {
  let component: NetworksBgpPage;
  let fixture: ComponentFixture<NetworksBgpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksBgpPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksBgpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
