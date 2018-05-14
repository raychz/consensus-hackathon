import { Component, OnInit, transition } from '@angular/core';
import { AzureWorkbenchService } from '../azure/azure-workbench.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})
export class TableListComponent implements OnInit {
  static compliance = {
    Created: 'Created',
    InTransit: 'In Transit',
    Completed: 'Completed',
  };

  complianceArray = ['Created', 'In Transit', 'Completed'];

  // 31 created
  // 30 in transition
  // 28 completed
  restaurant1 = {
    name: 'The View',
    address: '1535 Broadway, New York, NY 10036',
    farms: [
      { id: 35, name: 'Ardith Mae Farm', county: 'Columbia County', state: 'New York', compliance: TableListComponent.compliance.Created },
      { id: 32, name: 'Baker\'s Bounty', county: 'Union County', state: 'New Jersey', compliance: TableListComponent.compliance.InTransit },
      { id: 34, name: 'Catskill Merino', county: 'Sullivan County', state: 'New York', compliance: TableListComponent.compliance.Completed }
    ]
  };

  restaurant2 = {
    name: 'Catch NYC',
    address: '21 9th Ave, New York, NY 10014',
    farms: [
      { id: 'FJI873', name: 'Dan Madura Jr Farms', county: 'Columbia County', state: 'New York', compliance: TableListComponent.compliance.Created },
      { id: 'JFO949', name: 'Early Greens Farm', county: 'Union County', state: 'New Jersey', compliance: TableListComponent.compliance.Created },
      { id: 'PFI182', name: 'Fantasy Fruit Farm', county: 'Sullivan County', state: 'New York', compliance: TableListComponent.compliance.Created }
    ]
  };

  restaurant3 = {
    name: 'Orso',
    address: '322 W 46th St, New York, NY 10036',
    farms: [
      { id: 'FJI873', name: 'Gail\'s Farm', county: 'Columbia County', state: 'New York', compliance: TableListComponent.compliance.InTransit },
      { id: 'JFO949', name: 'Healthway Farms', county: 'Union County', state: 'New Jersey', compliance: TableListComponent.compliance.InTransit },
      { id: 'PFI182', name: 'Josephine\'s Feast', county: 'Sullivan County', state: 'New York', compliance: TableListComponent.compliance.InTransit }
    ]
  };

  restaurants = [this.restaurant1, this.restaurant2, this.restaurant3];

  selectedRestaurantIndex = undefined;

  constructor(private azureService: AzureWorkbenchService) { }

  ngOnInit() {
    // setInterval(() => {
    //   this.getCompliance();
    // }, 5000);
  }

  getCompliance() {
    return this.azureService.getLatestContracts().then(data => {
      const { contracts } = data;
      for (let i = 0; i < contracts.length; i++) {
        for (let j = 0; j < this.restaurant1.farms.length; j++) {
          if (contracts[i].id === this.restaurant1.farms[j].id) {
            const complianceValue = contracts[i].contractProperties[0].value;
            this.restaurant1.farms[j].compliance = this.complianceArray[complianceValue];
          }
        }
      }
    });
  }
}
