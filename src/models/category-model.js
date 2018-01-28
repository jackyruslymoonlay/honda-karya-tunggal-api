'use strict';

function CategoryModel(db) {
    const Category = db.sequelize.define('categories', {
        name: {
            type: db.DataTypes.STRING
        }
    });

    return Category;
}

module.exports = CategoryModel;