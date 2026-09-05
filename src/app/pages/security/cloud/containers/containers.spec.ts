import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { CloudContainersPage } from "./containers";

describe("CloudContainersPage", () => {
  let component: CloudContainersPage;
  let fixture: ComponentFixture<CloudContainersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudContainersPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(CloudContainersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
