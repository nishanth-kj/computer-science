import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsPartitioningPage } from "./partitioning";

describe("DbmsPartitioningPage", () => {
  let component: DbmsPartitioningPage;
  let fixture: ComponentFixture<DbmsPartitioningPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsPartitioningPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsPartitioningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
