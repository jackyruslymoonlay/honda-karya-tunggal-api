'use strict';

const categoryRouter = require('../src/routers/v1/category-router');
const newsRouter = require('../src/routers/v1/news-router');

function getDefaultRouter(server) {
    categoryRouter().applyRoutes(server,      '/categories');
    newsRouter().applyRoutes(server,          '/news');
}

module.exports = getDefaultRouter;