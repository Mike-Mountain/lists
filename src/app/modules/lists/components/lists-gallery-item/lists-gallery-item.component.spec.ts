import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsGalleryItemComponent } from './lists-gallery-item.component';

describe('ListsGalleryItemComponent', () => {
  let component: ListsGalleryItemComponent;
  let fixture: ComponentFixture<ListsGalleryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsGalleryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsGalleryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
