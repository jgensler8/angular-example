import { browser, by, element } from 'protractor';

export class MyAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}

// var injector = ReflectiveInjector.resolveAndCreate([
//   BaseRequestOptions,
//   MockBackend,
//   {provide: Http, useFactory:
//       function(backend, defaultOptions) {
//         return new Http(backend, defaultOptions);
//       },
//       deps: [MockBackend, BaseRequestOptions]}
// ]);
// let http = <Http> injector.get(Http);
// var mockDefaultApi = new MockDefaultApi(http, "qwer", new Configuration());
