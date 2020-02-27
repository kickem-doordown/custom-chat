import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatOptionsComponent } from './chat-options.component';

describe('ChatOptionsComponent', () => {
  let component: ChatOptionsComponent;
  let fixture: ComponentFixture<ChatOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
