import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Injectable()
export class AzureWorkbenchService {

  constructor(private http: Http) { }

  getLatestContracts() {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImlCakwxUmNxemhpeTRmcHhJeGRacW9oTTJZayIsImtpZCI6ImlCakwxUmNxemhpeTRmcHhJeGRacW9oTTJZayJ9.eyJhdWQiOiIyY2FhOTU3My0yM2ZkLTRhNzEtOGUyZi1mNzE4MzFhMGVjY2QiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84MmUwNzZjMS00YmM3LTRjZjItYjYzOC0wOGVkOGI3YjRhMTMvIiwiaWF0IjoxNTI2MjI2MjIxLCJuYmYiOjE1MjYyMjYyMjEsImV4cCI6MTUyNjIzMDEyMSwiZW1haWwiOiJjaGF2ZXpyQG1pdC5lZHUiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82NGFmZDliYS0wZWNmLTRhY2YtYmMzNi05MzVmNjIzNWJhOGIvIiwiaXBhZGRyIjoiMTY3LjIyMC4xNTIuMTMiLCJuYW1lIjoiUmF5bW9uZCBDaGF2ZXogSUlJIiwibm9uY2UiOiI1OGViYWE3Yi1jYmYzLTRjNjUtODg1Ny1lYjE1YWFjNzM1YTUiLCJvaWQiOiI0M2Q0NzM4OC00ZmMzLTRmNzQtOTY0Ny1lZjc1ZjBmODc3NTYiLCJyb2xlcyI6WyJBZG1pbmlzdHJhdG9yIl0sInN1YiI6IjllZWFyX3E1RFBtNFA1RFVZd1lDQnBjR1NiLWVJTzI1R19ub2NoNFRvNjgiLCJ0aWQiOiI4MmUwNzZjMS00YmM3LTRjZjItYjYzOC0wOGVkOGI3YjRhMTMiLCJ1bmlxdWVfbmFtZSI6ImNoYXZlenJAbWl0LmVkdSIsInV0aSI6ImxTdlV0dmlYUDBlUG9YcGhBV3NZQUEiLCJ2ZXIiOiIxLjAifQ.iufuzsb6PcpgldFpmyXk5Q_zSoCt_u83Q0T0NuSdnLoc0-ff3oLvaeMGH3sZRZ_Z32MSfG33C9Oo3s76XB9IbZfZUgcpOXjexdLOUATS4vxGZMXP7v0owVbaAiLfLXAWcKsieWMqyjm-irAn1TD-uizZetx5vcBx9NwH3ESjc-mGeiun4_3tyC77pbWchRyEdXcOmXfNhulEVOnHrNvSmEEPgfKbEf7VvDr5ixET4j59M5CuhpsVgACdIH8uo2tA9_nKErHCE4gk_odlcMYiug2WXQB_XzCYe3vJloHdbN9a-EWk5OILy5-gCOTIs4mXHUlUohaYnEkKvhSMAcbGcg'
    });
    const options = new RequestOptions({ headers });

    return this.http.get('https://abwch1-6sfu-api.azurewebsites.net/api/v1/contracts?workflowId=7&sortBy=Timestamp&top=50&skip=0', options)
    .toPromise()
    .then(res => res.json())
    .then(data => data);
  }
}
