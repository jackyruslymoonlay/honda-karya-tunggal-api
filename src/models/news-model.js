'use strict';

function NewsModel(db) {
    const News = db.sequelize.define('news', {
        image: {
            type: db.DataTypes.STRING
        },
        title: {
            type: db.DataTypes.STRING
        },
        content: {
            type: db.DataTypes.TEXT
        }
    });

    return News;
}

module.exports = NewsModel;