'use strict';

exports.alertsGET = function(args, res, next) {
  /**
   * Read All Alerts
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "owner" : "kili@opsgenie.com",
  "acknowledged" : true,
  "teams" : [ "operations", "developers" ],
  "count" : 1,
  "description" : "WebServer3 is down due to failure in WAN-1 connection.",
  "source" : "fili@opsgenie.com",
  "message" : "WebServer3 is down",
  "snoozed" : false,
  "isSeen" : true,
  "tags" : [ "aeiou" ],
  "createdAt" : 1349698149317,
  "systemData" : {
    "closedBy" : "fili@opsgenie.com",
    "ackTime" : 18171,
    "integrationType" : "API",
    "integrationName" : "API",
    "closeTime" : 24737,
    "integrationId" : "95225ed3-03fb-4cdd-a035-44052d6f4496",
    "acknowledgedBy" : "kili@opsgenie.com"
  },
  "tinyId" : "324",
  "recipients" : [ "kili@opsgenie.com" ],
  "alias" : "host_down",
  "details" : {
    "ip" : "192.168.1.87"
  },
  "id" : "ac463592-dbd2-4ca3-a333d-48fhf5j5c871",
  "entity" : "",
  "status" : "closed",
  "updatedAt" : 1349698149317
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

