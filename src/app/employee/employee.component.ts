import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employees = new Array<Employee>();
  title = 'Employees';

  constructor() {
    for (let i = 0; i < 20; i++) {
      this.employees.push(new Employee(`Shahid ${i}`, 'Umar', '09098908090', 'Lahore'));
    }
  // AllEmployes = ()=>{
  //   for (let i = 0; i < 10; i++) {
      
  //     this.Employess.push(new Employee("shahid","umar","09098908090","lahore"));
  //   }

    // return this.Employess;
  }

 
  
}

class Employee {
  constructor(public name: string, public email: string, public phone: string, public address: string) {
  }
}