import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DistributedLamportClocksPage } from "./lamport-clocks";

describe("DistributedLamportClocksPage", () => {
  let component: DistributedLamportClocksPage;
  let fixture: ComponentFixture<DistributedLamportClocksPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributedLamportClocksPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DistributedLamportClocksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
