import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  static compliance = {
    COMPLIANT: 'COMPLIANT',
    INCOMPLIANT: 'INCOMPLIANT',
    IN_TRANSIT: 'IN_TRANSIT',
  };

  restaurant1 = {
    name: 'The View',
    address: '1535 Broadway, New York, NY 10036',
    farms: [
      { id: 'FJI873', name: 'Ardith Mae Farm', county: 'Columbia County', state: 'New York', compliance: TableListComponent.compliance.COMPLIANT },
      { id: 'JFO949', name: 'Baker\'s Bounty', county: 'Union County', state: 'New Jersey', compliance: TableListComponent.compliance.INCOMPLIANT },
      { id: 'PFI182', name: 'Catskill Merino', county: 'Sullivan County', state: 'New York', compliance: TableListComponent.compliance.IN_TRANSIT }
    ]
  };

  restaurant2 = {
    name: 'Catch NYC',
    address: '21 9th Ave, New York, NY 10014',
    farms: [
      { id: 'FJI873', name: 'Dan Madura Jr Farms', county: 'Columbia County', state: 'New York', compliance: TableListComponent.compliance.COMPLIANT },
      { id: 'JFO949', name: 'Early Greens Farm', county: 'Union County', state: 'New Jersey', compliance: TableListComponent.compliance.INCOMPLIANT },
      { id: 'PFI182', name: 'Fantasy Fruit Farm', county: 'Sullivan County', state: 'New York', compliance: TableListComponent.compliance.IN_TRANSIT }
    ]
  };

  restaurant3 = {
    name: 'Orso',
    address: '322 W 46th St, New York, NY 10036',
    farms: [
      { id: 'FJI873', name: 'Gail\'s Farm', county: 'Columbia County', state: 'New York', compliance: TableListComponent.compliance.COMPLIANT },
      { id: 'JFO949', name: 'Healthway Farms', county: 'Union County', state: 'New Jersey', compliance: TableListComponent.compliance.INCOMPLIANT },
      { id: 'PFI182', name: 'Josephine\'s Feast', county: 'Sullivan County', state: 'New York', compliance: TableListComponent.compliance.IN_TRANSIT }
    ]
  };

  restaurants = [this.restaurant1, this.restaurant2, this.restaurant3];

  selectedRestaurantIndex = undefined;

  constructor() { }

  ngOnInit() {
  }

}
