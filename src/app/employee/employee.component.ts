import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeObj  : EmployeeObj;
  sortBy: String;
  searchText: String;
  employeeArr: EmployeeObj[] = [];
  
  constructor()
  {
    this.employeeObj = new EmployeeObj();
    this.sortBy="";
    this.searchText="";

  }

  ngOnInit(): void {
  }

  onSave(){
    this.employeeArr.push(this.employeeObj);
  }

}

export class EmployeeObj{
  FirstName: String;
  LastName: String;
  Technology: String;
  Designation: String;
  skill: String;
  Core: String;
  IsCertification: String;
  Certification:String;
  Company: String;
  fewDetails: String;
  
  constructor(){
  this.FirstName = "";
  this.LastName ="";
  this.Technology = "";
  this.Designation = "";
  this.skill= "";
  this.Certification = "";
  this.Core= "";
  this.IsCertification= "";
  this.Company= "";
  this.fewDetails= "";
  }
}
