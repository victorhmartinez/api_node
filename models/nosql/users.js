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
            type: String,
            select: false
        },
        role: {
            type: String,
            enum: ['user', 'admin'], // Usar 'enum' para limitar los valores permitidos
            default: 'user',
            
        }
    },
    {
        timestamps: true, // createdAt, updatedAt
        versionKey: false
    }
);

module.exports = mongoose.model('User', UserSchema);
