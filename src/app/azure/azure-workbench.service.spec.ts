import { TestBed, inject } from '@angular/core/testing';

import { AzureWorkbenchService } from './azure-workbench.service';

describe('AzureWorkbenchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AzureWorkbenchService]
    });
  });

  it('should be created', inject([AzureWorkbenchService], (service: AzureWorkbenchService) => {
    expect(service).toBeTruthy();
  }));
});
