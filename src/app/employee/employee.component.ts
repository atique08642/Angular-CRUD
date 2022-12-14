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
    this.getAllEmployee();
  }

  onSave(){
    this.employeeArr.push(this.employeeObj);
    const isData = localStorage.getItem("EmpData");
    if(isData == null){
      const newArr = [];
      this.employeeObj.EmployeeId =0;
      newArr.push(this.employeeObj);
      localStorage.setItem("EmpData",JSON.stringify(newArr));
    }else{
      const oldData = JSON.parse(isData);
      const newId = oldData.length + 1;
      this.employeeObj.EmployeeId = newId;
      oldData.push(this.employeeObj);
      localStorage.setItem("EmpData",JSON.stringify(oldData))
    }
    this.employeeObj = new EmployeeObj();
    this.getAllEmployee();
  }

  getAllEmployee(){
    const isData = localStorage.getItem("EmpData");
    if(isData != null){
       const localData = JSON.parse(isData);
       this.employeeArr = localData;
    }
  }

  onEdit(item: EmployeeObj){
    this.employeeObj = item;
  }

  onDelete(item: EmployeeObj){
    const isData = localStorage.getItem("EmpData");
    if(isData != null){
       const localData = JSON.parse(isData);
       for (let index = 0; index < localData.length; index++) {
        if(localData[index].EmployeeId == item.EmployeeId){
          localData.splice(0,1);
        }
        
       }
       localStorage.setItem("EmpData",JSON.stringify(localData))
       this.getAllEmployee();
    }
  }

  onSearch(){
    const isData = localStorage.getItem("EmpData");
    if(isData != null){
      const localData = JSON.parse(isData);
      if(this.sortBy=="Name"){
        const filterData = localData.filter((m:EmployeeObj) => m.FirstName.toLocaleLowerCase().startsWith(this.searchText.toString()))
        this.employeeArr = filterData;
      }

      if(this.sortBy=="Technology"){
        const filterData = localData.filter((m:EmployeeObj) => m.Technology.toLocaleLowerCase().startsWith(this.searchText.toString()) )
        this.employeeArr = filterData;
      }

      if(this.sortBy=="Designation"){
        const filterData = localData.filter((m:EmployeeObj) => m.Designation.toLocaleLowerCase().startsWith(this.searchText.toString()))
        this.employeeArr = filterData;
      }

      if(this.sortBy=="skill"){
        const filterData = localData.filter((m:EmployeeObj) => m.skill.toLocaleLowerCase().startsWith(this.searchText.toString()))
        this.employeeArr = filterData;
      }

      if(this.sortBy=="Core"){
        const filterData = localData.filter((m:EmployeeObj) => m.Core.toLocaleLowerCase().startsWith(this.searchText.toString()))
        this.employeeArr = filterData;
      }

      if(this.sortBy=="Company"){
        const filterData = localData.filter((m:EmployeeObj) => m.Company.toLocaleLowerCase().startsWith(this.searchText.toString()))
        this.employeeArr = filterData;
      }
    }
  }
}

export class EmployeeObj{
  EmployeeId: number;
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
  this.EmployeeId= 0;
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
