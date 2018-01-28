'use strict';

const RouterFactory = require('../../utils/router-factory');
const Manager = require('../../managers/news-manager');

function getRouter() {
    return RouterFactory(Manager);
}

module.exports = getRouter;