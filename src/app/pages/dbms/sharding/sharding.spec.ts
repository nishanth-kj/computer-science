import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DbmsShardingPage } from "./sharding";

describe("DbmsShardingPage", () => {
  let component: DbmsShardingPage;
  let fixture: ComponentFixture<DbmsShardingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbmsShardingPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DbmsShardingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
