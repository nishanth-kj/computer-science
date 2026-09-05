import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksCidrPage } from "./cidr";

describe("NetworksCidrPage", () => {
  let component: NetworksCidrPage;
  let fixture: ComponentFixture<NetworksCidrPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksCidrPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksCidrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
