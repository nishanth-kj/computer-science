import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksFiberPage } from "./fiber";

describe("NetworksFiberPage", () => {
  let component: NetworksFiberPage;
  let fixture: ComponentFixture<NetworksFiberPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksFiberPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksFiberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
