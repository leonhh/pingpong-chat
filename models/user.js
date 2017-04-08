"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'users'
  });

  return User;
};