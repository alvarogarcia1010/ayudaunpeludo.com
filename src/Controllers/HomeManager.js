'use strict'
const HomeManagement = require('../Services/HomeManagement');

const HomeManager = {};

HomeManager.getIndex = HomeManagement.getIndex;

HomeManager.getDashboard = HomeManagement.getDashboard;

HomeManager.getConfiguration = HomeManagement.getConfiguration;


module.exports = HomeManagement;
