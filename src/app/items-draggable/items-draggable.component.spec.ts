import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsDraggableComponent } from './items-draggable.component';

describe('ItemsDraggableComponent', () => {
  let component: ItemsDraggableComponent;
  let fixture: ComponentFixture<ItemsDraggableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsDraggableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsDraggableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
