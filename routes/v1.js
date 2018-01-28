'use strict';

const v1CategoryRouter = require('../src/routers/v1/category-router');
const v1NewsRouter = require('../src/routers/v1/news-router');

function getV1Router(server) {
    v1CategoryRouter().applyRoutes(server,      '/v1/categories');
    v1NewsRouter().applyRoutes(server,          '/v1/news');
}

module.exports = getV1Router;