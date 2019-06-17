import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { ServicehttpService} from './../servicehttp.service';
import { UserService } from '../user.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-show-all-employee',
  templateUrl: './show-all-employee.component.html',
  styleUrls: ['./show-all-employee.component.css']
})
export class ShowAllEmployeeComponent implements OnInit {

resultData:any;
  constructor(private fb : FormBuilder, private router : Router, private http : ServicehttpService, private user : UserService) {
  
   }

  ngOnInit() {
    this.http.getAllEmployees().subscribe(data => {
      this.resultData = data
      console.log(this.resultData)
    },
    error => {
      swal ( "Sorry" ,  "We have some technical problems. Please try later! " ,  "error" );
    })
  }

}
