import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DevopsSlosPage } from "./slos";

describe("DevopsSlosPage", () => {
  let component: DevopsSlosPage;
  let fixture: ComponentFixture<DevopsSlosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevopsSlosPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DevopsSlosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
