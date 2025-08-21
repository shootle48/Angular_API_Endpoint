import { Component } from '@angular/core';
import employeeService from '../services/employee.service';
import { Item } from './item/item';
import { FormsModule } from '@angular/forms';
interface Employee {
  id: number;
  name: string;
  salary: number;
  exp: number;
}

@Component({
  selector: 'app-root',
  imports: [Item,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  employees: Employee[] = [];
  loading: boolean = false;
  name: string = '';

  constructor() {
    this.loadEmployees();
  }

  async loadEmployees() {
    this.loading = true;
    try {
      const employeeData = await employeeService.getEmployees();
      this.employees = employeeData;
      console.log(this.employees);
    } catch (error) {
      console.error("Error loading employees:", error);
    } finally{
      this.loading = false;
    }
  }

  async removeEmployee(id:number) {
    try {
      this.loading = true;
      await employeeService.deleteEmployee(id);
      console.log(`Employee with id ${id} deleted successfully.`);
      this.loadEmployees()
    } catch (error) {
      console.error("Error deleting employee:", error);
    }finally{
      this.loading = false;
    }
  }
}
