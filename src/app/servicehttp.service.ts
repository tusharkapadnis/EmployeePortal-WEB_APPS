import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Employee } from "./Models/employee";

@Injectable()
export class ServicehttpService {
  constructor(private http: Http) { }
  localUrl = environment.API_URL;

  getAllEmployees() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.set('authorization', "Basic dXNlcjpzZXJOKzM0IzU2Nw==");
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.localUrl + '//get/EmployeeDetails/', options).map(res => res.json());
  }
  employeePost(firstName,lastName,gender,dob,department) {
    const returnObject: Employee = new Employee(firstName,lastName,dob,gender,department);
    let headers = new Headers({ 'Content-Type': 'application/json'});
    headers.set('authorization', "Basic dXNlcjpzZXJOKzM0IzU2Nw==");
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.localUrl + "/register/EmployeeDetails", returnObject, options).map(res => res);
  }

  }
