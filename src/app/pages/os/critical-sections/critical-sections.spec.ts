import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { OsCriticalSectionsPage } from "./critical-sections";

describe("OsCriticalSectionsPage", () => {
  let component: OsCriticalSectionsPage;
  let fixture: ComponentFixture<OsCriticalSectionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsCriticalSectionsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(OsCriticalSectionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
