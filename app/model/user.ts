'use strict';

module.exports = app => {
  const { Sequelize } = app;

  const User = app.model.define('users', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    nickname: {
      type: Sequelize.STRING(50),
      comment: '昵称',
      unique: false,
    },
    password: {
      type: Sequelize.STRING(255),
    },
    cellphone: {
      type: Sequelize.STRING(255),
      comment: '手机号',
      unique: true,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(100),
      comment: '邮箱',
      unique: true,
    },
    avatar: {
      type: Sequelize.STRING(100),
      comment: '头像',
      unique: false,
    },
    status: {
      type: Sequelize.INTEGER,
      comment: '账号状态',
      allowNull: false,
      defaultValue: 0,
    },
    platform: {
      type: Sequelize.INTEGER,
      comment: '平台',
      allowNull: false,
      defaultValue: 0,
    },
  }, {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'createdTime', // 将createdAt设为自定义字段createdTime
    updatedAt: 'updatedTime',
    underscored: false,
  });

  return User;
};
