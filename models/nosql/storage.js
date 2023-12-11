const mongoose = require('mongoose');

const StorageSchema = mongoose.Schema(
    {
        url: {
            type: String
        },
        filename: {
            type: String
        }
    },
    {
        timestamps: true, // createdAt, updatedAt
        versionKey: false
    }
);

module.exports = mongoose.model('Storage', StorageSchema);
