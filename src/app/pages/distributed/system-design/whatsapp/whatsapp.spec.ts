import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { SystemDesignWhatsappPage } from "./whatsapp";

describe("SystemDesignWhatsappPage", () => {
  let component: SystemDesignWhatsappPage;
  let fixture: ComponentFixture<SystemDesignWhatsappPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesignWhatsappPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesignWhatsappPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
