import { Component } from '@angular/core';

@Component({
  selector: 'emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {

  education: string[] = ['Matric', 'Diploma', 'Intermediate', 'Graduate', 'Post Graduate'];
}
