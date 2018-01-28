'use strict';

const BaseManager = require('../utils/base-manager');
const NewsModel = require('../models/news-model');

class NewsManager extends BaseManager {
    constructor(db) {
        super(NewsModel(db));
    }

    validate(data) {
        let errors = {};

        if(!data.title || data.title === '') {
            errors.title = "Title is required";
        }

        if(Object.getOwnPropertyNames(errors).length > 0) {
            const ValidationError = require('../utils/validation-error');
            return Promise.reject(new ValidationError("Data does not pass validation", errors));
        }

        return Promise.resolve(data);
    }
}

module.exports = NewsManager;