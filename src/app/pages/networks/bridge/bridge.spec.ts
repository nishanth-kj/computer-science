import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksBridgePage } from "./bridge";

describe("NetworksBridgePage", () => {
  let component: NetworksBridgePage;
  let fixture: ComponentFixture<NetworksBridgePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksBridgePage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksBridgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
