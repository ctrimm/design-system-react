define(['module', './date', './event', './key-code'], function (module, _date, _event, _keyCode) {
	'use strict';

	var _date2 = _interopRequireDefault(_date);

	var _event2 = _interopRequireDefault(_event);

	var _keyCode2 = _interopRequireDefault(_keyCode);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	module.exports = {
		DateUtil: _date2.default,
		EventUtil: _event2.default,
		KEYS: _keyCode2.default
	}; /* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */
	/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
});