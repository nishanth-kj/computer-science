import { ComponentFixture, TestBed } from "@angular/core/testing";
import { pageProviders } from "@/app/pages/page-spec";
import { DistributedRpcPage } from "./rpc";

describe("DistributedRpcPage", () => {
  let component: DistributedRpcPage;
  let fixture: ComponentFixture<DistributedRpcPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributedRpcPage],
      providers: pageProviders(),
    }).compileComponents();

    fixture = TestBed.createComponent(DistributedRpcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
