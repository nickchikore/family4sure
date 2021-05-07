import { Component, OnInit } from '@angular/core';

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
    {id:4, name:'Lodge a Complaint'},
    {id:5, name:'General enquiry'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
