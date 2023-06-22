import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
  empForm: FormGroup;
  education: string[] = ['Matric', 'Diploma', 'Intermediate', 'Graduate', 'Post Graduate'];

  constructor(private formBuilder: FormBuilder) {
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
      console.log(this.empForm.value);
    }    
  }
}
