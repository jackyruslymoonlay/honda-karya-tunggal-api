'use strict';

const RouterFactory = require('../../utils/router-factory');
const Manager = require('../../managers/category-manager');

function getRouter() {
    return RouterFactory(Manager);
}

module.exports = getRouter;