import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { ServicehttpService} from './../servicehttp.service';
import { UserService } from '../user.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-submit-employee',
  templateUrl: './submit-employee.component.html',
  styleUrls: ['./submit-employee.component.css']
})
export class SubmitEmployeeComponent implements OnInit {
JSONData;

options = ['Male','Female','Other'];

onOptionsSelected(event){
 console.log(event); //option value will be sent as event
}
   today= new Date();
  submitEmployeeForm : FormGroup;
  firstName = ""
  lastName = ""
  gender=""
  department=""
  dob=""

  sendData : any =[]
  constructor(private fb : FormBuilder, private router : Router, private http : ServicehttpService, private user : UserService) {
    this.submitEmployeeForm = fb.group({
      "firstName" : [null, Validators.compose([Validators.required])],
      "lastName" : [null, Validators.compose([Validators.required])],
      "gender" : [null, Validators.compose([Validators.required])],
      "department" : [null, Validators.compose([Validators.required])],
      "dob" : [null, Validators.compose([Validators.required])]
    })
  }


  submitEmployee(){
      this.http.employeePost(this.firstName,this.lastName,this.gender,this.dob,this.department).subscribe(data => {
        console.log(data)
        if(data.status==200){
          this.JSONData=JSON.parse(data.text());
          swal("Good job!", "You have Added a Employee!", "success");
          this.router.navigate(['']);
        }
      },
      error => {
        swal ( "Sorry" ,  "We have some technical problems. Please try later! " ,  "error" );
        this.router.navigate(['']);
      
      })
  }
  ngOnInit() {
  }

}
