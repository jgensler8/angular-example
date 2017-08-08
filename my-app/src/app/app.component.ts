import { Component, Injectable, ReflectiveInjector } from '@angular/core';
import { BaseRequestOptions, Http, HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Service, ServiceList, DefaultApi, Configuration } from './swagger';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
class MockDefaultApi extends DefaultApi {
  servicesGet(extraHttpRequestParams?: any): Observable<ServiceList> {
    var list = new Array<Service>();
    list = list.concat({
      appname: "AppName",
      language: Service.LanguageEnum.Java
    });
    return Observable.of(list);
  }
}

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <h1>{{title}}</h1>
  <h2>{{service.appname}} details!</h2>
  <div><label>id: </label>{{service.language}}</div>
  <div><label>name: </label>{{service.appname}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="service.appname" placeholder="name">
  </div>
  <div><input type="button" (click)="onSelect(service)">click me</div>
  <div id="heatmap"></div>
  `,
  // styleUrls: ['./app.component.css']
  providers: [MockDefaultApi]
})
export class AppComponent {
  title = "Title";
  service: Service = {
    appname: "qwer",
    language: Service.LanguageEnum.Java
  };
  constructor(private api: MockDefaultApi) {};
  onSelect(s: Service): void {
    // this.title = "BOUND TO " + s.appname + "zzzzzzzz";
    var now = new Date();
    var past = new Date(now);
    past.setDate(past.getDate() - 2);
    var future = new Date(now);
    future.setDate(future.getDate() + 2);
    var datas = [
      {date: now.getTime() / 1000, value: 20}
    ];
    var datas = this.api.servicesGet();
    datas.forEach(function(x: ServiceList) {
      x.forEach(function(s: Service){
        console.log(s.appname);
      })
    })
    this.cal.init({
      data: datas,
      itemSelector: "#heatmap",
      minDate: past,
      maxDate: future,
      start: past,
      range: 4,
      domain: "day",
      subDomain: "hour",
      afterLoadData: (data: any) =>
      {
        var stats: CalHeatMap.DataFormat = {};
        for (var d in data)
        {
          stats[data[d].date] = data[d].value;
        }
        console.log(stats);
        return stats;
      }
    });
    // this.api.servicesGetWithHttpInfo().forEach(next => this.title = next.toString())
  };
  cal = new CalHeatMap();
}
