import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  static compliance = {
    COMPLIANT: 'COMPLIANT',
    INCOMPLIANT: 'INCOMPLIANT',
    IN_TRANSIT: 'IN_TRANSIT',
  };

  farmer1 = {
    id: 'FJI873', name: 'Ardith Mae Farm', county: 'Columbia County', state: 'New York', compliance: TypographyComponent.compliance.COMPLIANT,
    restaurants: [
      {
        compliance: TypographyComponent.compliance.COMPLIANT,
        name: 'Niles New York City',
        address: '1535 Broadway, New York, NY 10036'
      },
      {
        compliance: TypographyComponent.compliance.INCOMPLIANT,
        name: 'Sunset',
        address: '4939 Symphony, New York, NY 10036'
      },
      {
        compliance: TypographyComponent.compliance.IN_TRANSIT,
        name: 'The River Cafe',
        address: '2919 Edgewater, New York, NY 10036'
      }
    ]
  };
  farmer2 = {
    id: 'JFO949', name: 'Baker\'s Bounty', county: 'Union County', state: 'New Jersey', compliance: TypographyComponent.compliance.INCOMPLIANT,
    restaurants: [
      {
        name: 'Niles New York City',
        address: '1535 Broadway, New York, NY 10036'
      },
      {
        name: 'Sunset',
        address: '4939 Symphony, New York, NY 10036'
      },
      {
        name: 'The River Cafe',
        address: '2919 Edgewater, New York, NY 10036'
      }
    ]
  };
  farmer3 = {
    id: 'PFI182', name: 'Catskill Merino', county: 'Sullivan County', state: 'New York', compliance: TypographyComponent.compliance.IN_TRANSIT,
    restaurants: [
      {
        name: 'Niles New York City',
        address: '1535 Broadway, New York, NY 10036'
      },
      {
        name: 'Sunset',
        address: '4939 Symphony, New York, NY 10036'
      },
      {
        name: 'The River Cafe',
        address: '2919 Edgewater, New York, NY 10036'
      }
    ]
  };

  farmers = [this.farmer1, this.farmer2, this.farmer3];

  selectedFarmerIndex = undefined;

  constructor() { }

  ngOnInit() {
  }

}
