import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatOptionSelectionChange } from '@angular/material/core';
import { ListItem } from '../store/list-items/list-item.model';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {
  categoryForm: FormGroup | undefined;
  listItems: ListItem[] = [];

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CategoryFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.listItems = this.data.listItems;
    this.categoryForm = this.formBuilder.group({
      title: ['', Validators.required],
      listItems: [[]],
    });
  }

  submit() {
    this.dialogRef.close({ data: this.categoryForm?.value });
  }

  updateListItems(change: MatOptionSelectionChange) {
    let items = this.categoryForm?.controls['listItems'].value;
    if (change.source.selected) {
      items.push(change.source.value);
    } else {
      const idx = items.findIndex(
        (listItem: ListItem) => listItem.id === change.source.value.id
      );
      items.splice(idx, 1);
    }
    this.categoryForm?.controls['listItems'].patchValue([...new Set(items)]);
  }
}
