import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { NetworksPanPage } from "./pan";

describe("NetworksPanPage", () => {
  let component: NetworksPanPage;
  let fixture: ComponentFixture<NetworksPanPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksPanPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksPanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
