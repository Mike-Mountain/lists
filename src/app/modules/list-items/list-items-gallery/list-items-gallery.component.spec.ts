import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemsGalleryComponent } from './list-items-gallery.component';

describe('ListItemsGalleryComponent', () => {
  let component: ListItemsGalleryComponent;
  let fixture: ComponentFixture<ListItemsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemsGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
