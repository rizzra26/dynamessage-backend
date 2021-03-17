'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.users, {
        as: 'uId',
        foreignKey: 'userId',
      });
      this.belongsTo(models.users, {
        as: 'sId',
        foreignKey: 'senderId',
      });
    }
  }
  messages.init(
    {
      userId: DataTypes.INTEGER,
      senderId: DataTypes.INTEGER,
      message: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'messages',
    }
  );
  return messages;
};
