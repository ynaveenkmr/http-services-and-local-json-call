import { Component, OnInit } from '@angular/core';
import { UsersService} from './services/user.services';


@Component({
  selector: 'app-http-services-example',
  templateUrl: './http-services-example.component.html',
  styleUrls: ['./http-services-example.component.css']
})
export class HttpServicesExampleComponent implements OnInit {
 users:any;
  constructor(private UserService:UsersService) { }

  ngOnInit(){
    this.UserService.getAllUsers().subscribe((data)=>{
   this.users = data;
    });
  }

}