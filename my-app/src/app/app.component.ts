import { Component, Injectable, ReflectiveInjector } from '@angular/core';
import { BaseRequestOptions, Http, HttpModule } from '@angular/http';
// import { MockBackend } from '@angular/http/testing';
import { Alert, AlertList, DefaultApi, Configuration } from './swagger';
import { MockDefaultApi } from './swagger_mock';
import { Environment } from './environment';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <h1>{{title}}</h1>
  <div><input type="button" (click)="onSelect()">click me</div>
  <div id="heatmap"></div>
  `,
  // styleUrls: ['./app.component.css']
  providers: [
    {
      provide: DefaultApi,
      deps: [Http, Environment],
      useFactory: function(http: Http, env: Environment){
        if(env.environment().shouldMockApi){
          return <DefaultApi> new MockDefaultApi(http);
        } else {
          return new DefaultApi(http, "", null);
        }
      }
    }
  ]
})
export class AppComponent {
  title = "Title";
  constructor(private api: DefaultApi) {};
  onSelect(): void {
    var now = new Date();
    var past = new Date(now);
    past.setDate(past.getDate() - 2);
    var future = new Date(now);
    future.setDate(future.getDate() + 2);
    this.api.alertsGet().subscribe(
      data => {
        this.cal.init({
          data: data,
          itemSelector: "#heatmap",
          minDate: past,
          maxDate: future,
          start: past,
          range: 4,
          domain: "day",
          subDomain: "hour",
          afterLoadData: (data: AlertList) =>
          {
            var stats: CalHeatMap.DataFormat = {};
            console.log(data);
            for (var d in data)
            {
              console.log(d);
              stats[ Math.floor(data[d].createdAt / 1000) ] = 1;
            }
            console.log(stats);
            return stats;
          }
        });
      },
      error => {
        console.log("UH OH")
      },
      () => {

      }
    );
  };
  cal = new CalHeatMap();
}
