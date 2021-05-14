import { Component, OnInit } from '@angular/core';
import {User} from '../../_models/user';
import {UsersService} from '../../_services/users.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  username: any;
  email: any;
  topic: any;
  enquiry: any;
  subscriber: any;
  userModel = new User('Nick', 'nick@gmail.com', null, 'default', '', true, false);
  topicHasError = true ;
  submitted = false;
  errorMsg: any;
  topics =   [
    {id: 1, name: 'Becoming a volunteer'},
    {id: 2, name: 'Funding a project'},
    {id: 3, name: 'Documentation/More info'},
    {id: 4, name: 'Making a Complaint'},
    {id: 5, name: 'General enquiry'}
  ];

  constructor(private userService: UsersService) {
  }

  validateTopic(value) {
    if (value === 'default'){
      this.topicHasError = true;
    }
    else {
      this.topicHasError = false;
    }
  }
  contactFormSubmit() {
    this.submitted = true;
    return this.userService.contactForm(this.userModel).subscribe(
data => this.userModel = data,
error => this.errorMsg = {
        errorTitle: error.statusText,
        errorDesc: 'Something didnt work. Please try again.'
      });
  }


  ngOnInit(): void {
  }


}
