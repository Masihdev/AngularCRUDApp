import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit {
  empForm: FormGroup;
  education: string[] = ['Matric', 'Diploma', 'Intermediate', 'Graduate', 'Post Graduate'];

  constructor(private formBuilder: FormBuilder, 
              private empService: EmployeeService,
              private matDialogRef: MatDialogRef<EmpAddEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.empForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: ''
    });
  }


  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }


  onSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this.empService.updateEmployee(this.data.id, this.empForm.value).subscribe({
          next: (val: any) => {
            alert('Employee detail updated.');
            this.matDialogRef.close(true);
          },

          error: (err: any) => {
            console.log(err);
          }
        });
      } else {
        this.empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            // alert('A new employee added successfully.');
            this.matDialogRef.close(true);
          },

          error: (err: any) => {
            console.log(err);
          }
        });
      }
    }
  }
}
