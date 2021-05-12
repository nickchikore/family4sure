import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {UsersService} from "../../_services/users.service";
import {log} from "util";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  enquiries =   [
    {id:1, name:'Becoming a volunteer'},
    {id:2, name:'Funding a project'},
    {id:3, name:'Documentation/More info'},
    {id:4, name:'Making a Complaint'},
    {id:5, name:'General enquiry'}
  ]
  username: any;
  email: any;
  topic: any;
  enquiry: any;
  subscriber: any;
  userModel = new User('','nick@gmail.com', null, 'default','', true, false)

  constructor(private _userService: UsersService) {
  }

  ngOnInit(): void {
  }

  contactFormSubmit() {
    // const msg = `My name is ${this.username}, my  email is ${this.email}, i am interested in ${this.topic}, ${this.enquiry}`;
    // alert(msg);
    this._userService.enroll(this.userModel).subscribe(
      data => console.log("success ",data),
      error => console.log("error ", error)
      )
  }
  topicHasError :boolean ;

  validateTopic(value) {
    if(value === 'default'){
      this.topicHasError = true;
    }
    else {
      this.topicHasError = false;
    }
  }

}
