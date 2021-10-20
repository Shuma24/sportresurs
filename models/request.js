const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    static associate(models) {
      this.belongsTo(models.User);
    }
  }
  Request.init(
    {
      status: {
        type: DataTypes.ENUM("новий", "в процесі", "оброблено"),
        defaultValue: "новий",
      },
      admin: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      details: DataTypes.TEXT,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Request",
      underscored: true,
    }
  );
  return Request;
};
