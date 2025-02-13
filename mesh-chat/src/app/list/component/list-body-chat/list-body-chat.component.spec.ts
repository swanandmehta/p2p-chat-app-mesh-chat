import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBodyChatComponent } from './list-body-chat.component';

describe('ListBodyChatComponent', () => {
  let component: ListBodyChatComponent;
  let fixture: ComponentFixture<ListBodyChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListBodyChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBodyChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
