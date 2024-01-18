
const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/mysql');
const Storage = require("./storage")
const Tracks = sequelize.define(
    "tracks", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    album: {
        type: DataTypes.NUMBER,

    },
    cover: {
        type: DataTypes.STRING
    },
    artist_name: {
        type: DataTypes.STRING
    },
    artist_nickname: {
        type: DataTypes.STRING
    },
    artist_nationality: {
        type: DataTypes.STRING
    },
    duration_start: {
        type: DataTypes.INTEGER
    }, duration_end: {
        type: DataTypes.INTEGER
    }, mediaId: {
        type: DataTypes.STRING
    },

}, {
    timestamps: true
}
);

/**
 * Implementando metodo personalizado
 */
Tracks.findAllData = function () {
    Tracks.belongsTo(Storage, {
        foreignKey: 'mediaId',
        as: 'audio'
    })
    return Tracks.findAll({ include: 'audio' })
}
Tracks.findOneData = function (id) {
    Tracks.belongsTo(Storage, {
        foreignKey: 'mediaId'
    })
    return Tracks.findOne({ where: { id } }, { include: Storage })
}
module.exports = Tracks