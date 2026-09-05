import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DiscreteMathProofsPage } from "./proofs";

describe("DiscreteMathProofsPage", () => {
  let component: DiscreteMathProofsPage;
  let fixture: ComponentFixture<DiscreteMathProofsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscreteMathProofsPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DiscreteMathProofsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
