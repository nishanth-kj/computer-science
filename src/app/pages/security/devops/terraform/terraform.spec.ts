import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DevopsTerraformPage } from "./terraform";

describe("DevopsTerraformPage", () => {
  let component: DevopsTerraformPage;
  let fixture: ComponentFixture<DevopsTerraformPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevopsTerraformPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DevopsTerraformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
