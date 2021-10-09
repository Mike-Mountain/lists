import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsGalleryComponent } from './lists-gallery.component';

describe('ListsGalleryComponent', () => {
  let component: ListsGalleryComponent;
  let fixture: ComponentFixture<ListsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
