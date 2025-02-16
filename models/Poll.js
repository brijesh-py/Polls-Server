module.exports = (sequelize, DataTypes) => {
  const Poll = sequelize.define(
    "Poll",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      question: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      options: {
        type: DataTypes.JSON,
        allowNull: false,
      },
    },
    {
      tableName: "polls",
      timestamps: false,
    }
  );

  return Poll
};
