import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularCRUDApp';

  constructor(public dialog: MatDialog,
              private empService: EmployeeService) {

  }

  ngOnInit(): void {
    this.getEmployee();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EmpAddEditComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }

  getEmployee() {
    this.empService.getEmployee().subscribe({
      next: (res: any) => {
        console.log(res);
      },

      error: (err: any) => {
        console.log(err);
      }
    });
  }
}
