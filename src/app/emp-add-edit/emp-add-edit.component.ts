import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
  empForm: FormGroup;
  education: string[] = ['Matric', 'Diploma', 'Intermediate', 'Graduate', 'Post Graduate'];

  constructor(private formBuilder: FormBuilder, 
              private empService: EmployeeService,
              private dialogRef: DialogRef) {
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


  onSubmit() {
    if(this.empForm.valid) {
      this.empService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('A new employee added successfully.');
          this.dialogRef.close();
        },

        error: (err: any) => {
          console.log(err);
        }
      });
    }    
  }
}
