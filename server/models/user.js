module.exports = (sequelize, DataTypes) => (
  sequelize.define('user', {
    uid: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    nick: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    platform: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    provider: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  }, {
      timestamps: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    })
);