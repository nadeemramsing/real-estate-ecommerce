var path = require('path');
var Sequelize = require('sequelize');

var env = require(path.join(__dirname, '../env'));

var db = new Sequelize('fsg', 'chb', 'chb', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = db;
