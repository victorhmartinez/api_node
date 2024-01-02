const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String
        },
        age: {
            type: Number
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String
        },
        role: {
            type: String,
            enum: ['user', 'admin'], // Usar 'enum' para limitar los valores permitidos
            default: 'user',
            select: false
        }
    },
    {
        timestamps: true, // createdAt, updatedAt
        versionKey: false
    }
);

module.exports = mongoose.model('User', UserSchema);
