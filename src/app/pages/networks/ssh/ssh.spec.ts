import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksSshPage } from "./ssh";

describe("NetworksSshPage", () => {
  let component: NetworksSshPage;
  let fixture: ComponentFixture<NetworksSshPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksSshPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksSshPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
