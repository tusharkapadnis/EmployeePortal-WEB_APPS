import { Component, OnInit } from '@angular/core';
import { ServicehttpService} from './../servicehttp.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http : ServicehttpService, private user : UserService) { }
  mid = ''
  logged : boolean =false

  ngOnInit() {
  }
}
