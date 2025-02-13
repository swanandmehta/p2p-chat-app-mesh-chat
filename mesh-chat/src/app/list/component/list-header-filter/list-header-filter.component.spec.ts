import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHeaderFilterComponent } from './list-header-filter.component';

describe('ListHeaderFilterComponent', () => {
  let component: ListHeaderFilterComponent;
  let fixture: ComponentFixture<ListHeaderFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListHeaderFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHeaderFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
