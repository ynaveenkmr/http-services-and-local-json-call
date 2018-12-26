import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-local-data',
  templateUrl: './json-local-data.component.html',
  styleUrls: ['./json-local-data.component.css']
})
export class JsonLocalDataComponent implements OnInit {

clients:any[]=[
{id:'1',name:'aaaa',city:'jfdkj kjnee',salary:1222213,dob:'1-2-33'},
{id:'2',name:'aaaa',city:'jfdkj kjnee',salary:1222213,dob:'1-2-33'},
{id:'3',name:'aaaa',city:'jfdkj kjnee',salary:1222213,dob:'1-2-33'},
{id:'4',name:'aaaa',city:'jfdkj kjnee',salary:1222213,dob:'1-2-33'},
]

  constructor() { }

  ngOnInit() {
  }

}