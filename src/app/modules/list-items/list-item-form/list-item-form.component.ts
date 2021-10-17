import { Component, Inject, OnInit, Optional } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Category } from '../store/categories/category.model';
import { MatOptionSelectionChange } from '@angular/material/core';

@Component({
  selector: 'app-list-item-form',
  templateUrl: './list-item-form.component.html',
  styleUrls: ['./list-item-form.component.scss'],
})
export class ListItemFormComponent implements OnInit {
  listItemForm: FormGroup | undefined;
  categories: Category[] = [];
  selected: Category[] = [];

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ListItemFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.categories = this.data.categories;
    this.selected = this.data.item?.categories || [];
    this.listItemForm = this.formBuilder.group({
      title: [this.data.item?.title || '', Validators.required],
      categories: [this.selected],
    });
  }

  submit() {
    this.dialogRef.close({ data: this.listItemForm?.value });
  }

  updateCategories(change: MatOptionSelectionChange) {
    let categories = this.listItemForm?.controls['categories'].value;
    if (change.source.selected) {
      categories.push(change.source.value);
    } else {
      const idx = categories.findIndex(
        (category: Category) => category.id === change.source.value.id
      );
      categories.splice(idx, 1);
    }
    this.listItemForm?.controls['categories'].patchValue([
      ...new Set(categories),
    ]);
  }
}
