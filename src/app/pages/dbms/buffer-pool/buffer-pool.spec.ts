import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsBufferPoolPage } from "./buffer-pool";

describe("DbmsBufferPoolPage", () => {
  let component: DbmsBufferPoolPage;
  let fixture: ComponentFixture<DbmsBufferPoolPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsBufferPoolPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsBufferPoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
