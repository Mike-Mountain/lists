import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { List } from '../../store/list.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss'],
})
export class ListFormComponent implements OnInit {
  listForm: FormGroup | undefined;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ListFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.listForm = this.formBuilder.group({
      title: ['', Validators.required],
    });
  }

  submit() {
    this.dialogRef.close({ data: this.listForm?.value });
  }
}
