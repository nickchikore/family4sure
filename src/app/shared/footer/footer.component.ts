import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  nav = [
    {
      id: 1,
      ref: 'about-us',
      url: 'who-we-are',
      name: 'About us'
    },
    {
      id: 2,
      ref: 'friend-in-deed',
      url: 'projects/friend-in-deed',
      name: 'Friend in deed'
    },
    {
      id: 3,
      ref: 'Volunteers',
      url: 'volunteers',
      name: 'Volunteers'
    },
    // {
    //   id: 4,
    //   ref: 'Mission',
    //   url: 'volunteer/our-mission',
    //   name: 'Mission'
    // },
    {
      id: 5,
      ref: 'Training',
      url: 'volunteer/training',
      name: 'Training'
    },
    {
      id: 6,
      ref: 'Safeguarding',
      url: 'volunteer/safeguarding',
      name: 'Safeguarding'
    },
    {
      id: 7,
      ref: 'Resources',
      url: 'resources',
      name: 'Resources'
    },
    {
      id: 8,
      ref: 'contact-us',
      url: 'contact-us',
      name: 'Contact us'
    }
  ];
  externalmedia: any = [

    {
      id: 1,
      ref: 'facebook',
      url: 'https://www.facebook.com/family4sure/',
      name: 'Facebook'
    },
    {
      id: 2,
      ref: 'twitter',
      url: 'https://www.twitter.com/',
      name: 'Twitter'
    },
    {
      id: 3,
      ref: 'instagram',
      url: 'https://www.instagram.com/',
      name: 'instagram'
    },
    {
      id: 4,
      ref: 'linkedin',
      url: 'https://www.linkedin.com/',
      name: 'linkedin'
    }
  ];
  corporateInfo: any = [
    {
      address: {
        number: 1,
        street: 'Kumba rd',
        city: 'London',
        postCode: 'SE12RS',
        country: 'United Kingdom'
      },
      email: 'admin@family4sure.co.uk',
      phone: {
        office: 1234567890,
        mobile: 7912345678,
        fax: 1234678909
      },
      affiliates: [
        {
          partners: [
            {
              name: '',
              reference: '',
              email: '',
              phone: 1234567890,
              image: '',
              url: ''
            }
          ],
          accreditations: [
            {
              name: '',
              reference: '',
              email: '',
              phone: 1234567890,
              image: '',
              url: '',
              accreditation: [
                {
                  name: '',
                  discipline: ''
                }
              ]
            }
          ]
        }
      ]
    }
  ];
  @Input() hidden;
  constructor() {
    this.hidden = false;
  }

  ngOnInit(): void {
  }

}
