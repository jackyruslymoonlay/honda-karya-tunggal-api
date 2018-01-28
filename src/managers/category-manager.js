'use strict';

const BaseManager = require('../utils/base-manager');
const CategoryModel = require('../models/category-model');

class CategoryManager extends BaseManager {
    constructor(db) {
        super(CategoryModel(db));
    }

    validate(data) {
        let errors = {};

        if(!data.name || data.name === '') {
            errors.name = "Nama is required";
        }

        if(Object.getOwnPropertyNames(errors).length > 0) {
            const ValidationError = require('../utils/validation-error');
            return Promise.reject(new ValidationError("Data does not pass validation", errors));
        }

        return Promise.resolve(data);
    }
}

module.exports = CategoryManager;