import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksDnsPage } from "./dns";

describe("NetworksDnsPage", () => {
  let component: NetworksDnsPage;
  let fixture: ComponentFixture<NetworksDnsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksDnsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksDnsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
