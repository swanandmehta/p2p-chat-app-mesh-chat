import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHeaderSearchComponent } from './list-header-search.component';

describe('ListHeaderSearchComponent', () => {
  let component: ListHeaderSearchComponent;
  let fixture: ComponentFixture<ListHeaderSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListHeaderSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHeaderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
