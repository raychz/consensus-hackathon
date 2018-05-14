import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Injectable()
export class AzureWorkbenchService {

  constructor(private http: Http) { }

  getLatestContracts() {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization':
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImlCakwxUmNxemhpeTRmcHhJeGRacW9oTTJZayIsImtpZCI6ImlCakwxUmNxemhpeTRmcHhJeGRacW9oTTJZayJ9.eyJhdWQiOiIyY2FhOTU3My0yM2ZkLTRhNzEtOGUyZi1mNzE4MzFhMGVjY2QiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84MmUwNzZjMS00YmM3LTRjZjItYjYzOC0wOGVkOGI3YjRhMTMvIiwiaWF0IjoxNTI2MjM4ODA0LCJuYmYiOjE1MjYyMzg4MDQsImV4cCI6MTUyNjI0MjcwNCwiYW1yIjpbInB3ZCJdLCJlbWFpbCI6Im5pY2hvbGFzbXVycmF5QHd1c3RsLmVkdSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzRjY2NhM2I1LTcxY2QtNGU2ZC05NzRiLTRkOWJlYjk2YzZkNi8iLCJpcGFkZHIiOiIxNjcuMjIwLjE1Mi4xMyIsIm5hbWUiOiJNdXJyYXksIE5pY2hvbGFzIiwibm9uY2UiOiIzODcwOGMzMy02Njc2LTQ0MWMtOTg5NS0zYmJhMDczMWJiNGYiLCJvaWQiOiI0N2IyZDU1Ny1lMTE2LTQxZjItODhmNC1kZjI2YTA4YzQ2NzYiLCJyb2xlcyI6WyJBZG1pbmlzdHJhdG9yIl0sInN1YiI6IklqSG5sYlZsQW5jYmVRUVlGalZJUXpRZDBxWHhnYW5RQ243dkZCXzhEQmciLCJ0aWQiOiI4MmUwNzZjMS00YmM3LTRjZjItYjYzOC0wOGVkOGI3YjRhMTMiLCJ1bmlxdWVfbmFtZSI6Im5pY2hvbGFzbXVycmF5QHd1c3RsLmVkdSIsInV0aSI6ImM2TkV2SkRlVVV1amhRUzREd0laQUEiLCJ2ZXIiOiIxLjAifQ.c9i0NTaU2CnwHAkadi_KFUh0xNLjSHmogWdXkOP_pJgvFV0uFtOdQiF6ZbC6onjapvmNZsaRCXU1IgKaLI-ClSJvSWtwud-Fp8asyuO5pFeqqFbRxaJB2_wyj03fHiuBK--q-ko4QK8j1P2gJrfatYowJgMkPk6g_cUfs1_O8PeXBAx1GxUXjN7tm7MAyh6svb0CzRMhYcnYH4MldN6LYWK-mCWQBaI_kA6blmkfZ1_3sGCldhwfWUs1AJfFtRBzhwmU744qcMZgQJLM3b1cgzNNxJW9BlKGIKrsWFeq63oAtxTNYWy6ymB1aBHeTpijuOOtMuJN_lq2BNDGKMd3Pw'
    });
    const options = new RequestOptions({ headers });

    return this.http.get('https://abwch1-6sfu-api.azurewebsites.net/api/v1/contracts?workflowId=7&sortBy=Timestamp&top=50&skip=0', options)
    .toPromise()
    .then(res => res.json())
    .then(data => data);
  }
}
