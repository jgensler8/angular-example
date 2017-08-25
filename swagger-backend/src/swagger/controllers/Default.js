'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.alertsGET = function alertsGET (req, res, next) {
  Default.alertsGET(req.swagger.params, res, next);
};
