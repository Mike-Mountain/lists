import { Component, Inject, OnInit, Optional } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppCategory, Category } from '../store/categories/category.model';

@Component({
  selector: 'app-list-item-form',
  templateUrl: './list-item-form.component.html',
  styleUrls: ['./list-item-form.component.scss'],
})
export class ListItemFormComponent implements OnInit {
  listItemForm: FormGroup | undefined;
  categories: Category[] = [];

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ListItemFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.categories = this.data.categories.map(
      (item: AppCategory) => item.category
    );
    this.listItemForm = this.formBuilder.group({
      title: [this.data.item?.title || '', Validators.required],
      category: [this.data.item?.category || {}, Validators.required],
    });

    console.log(this.categories);
  }

  submit() {
    this.dialogRef.close({ data: this.listItemForm?.value });
  }
}
