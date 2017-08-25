import { Component, Injectable, ReflectiveInjector } from '@angular/core';
import { BaseRequestOptions, Http, HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { DefaultApi, Alert } from '../../swagger';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class MockDefaultApi extends DefaultApi {

  constructor(http: Http) {
    super(http, "", null);
  }

  alertsGet(extraHttpRequestParams?: any): Observable<Array<Alert>> {
    var list = new Array<Alert>();

    // var datas = [
    //   {date: now.getTime() / 1000, value: 20}
    // ];
    list = list.concat(
      <Alert> {
          "tags": [ ],
          "count": 1,
          "status": "closed",
          "teams":["operations", "developers"],
          "recipients": [
              "kili@opsgenie.com"
          ],
          "tinyId": "324",
          "alias": "host_down",
          "entity": "",
          "id": "ac463592-dbd2-4ca3-a333d-48fhf5j5c871",
          "updatedAt": new Date().getTime(),
          "message": "WebServer3 is down",
          // "details": {
          //     "ip": "192.168.1.87"
          // },
          "source": "fili@opsgenie.com",
          "description": "WebServer3 is down due to failure in WAN-1 connection.",
          "createdAt": new Date().getTime(),
          "isSeen":true,
          "acknowledged":true,
          "snoozed":false,
          "owner":"kili@opsgenie.com",
          // "actions": [ ],
          "systemData": {
              "integrationType": "API",
              "integrationId": "95225ed3-03fb-4cdd-a035-44052d6f4496",
              "integrationName": "API",
              "ackTime":18171,
              "acknowledgedBy":"kili@opsgenie.com",
              "closeTime":24737,
              "closedBy":"fili@opsgenie.com"
          }
      });
    return Observable.of(list);
  }
}
