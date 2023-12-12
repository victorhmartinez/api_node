const mongoose = require('mongoose');
const TracksSchema = mongoose.Schema(
    {
        name: {
            type: String
        },
        album: {
            type: String
        },
        cover: {
            type: String,
            validate: {
                validator: (value) => {
                    // Aquí puedes usar una expresión regular o una biblioteca para validar la URL
                    // Por ejemplo, una expresión regular simple:
                    return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/.test(value);
                },
                message: "ERROR_URL"
            }
        },
        
        artist:{
            name:{
                type: String
            },
            nickname:{
                type: String
            },
            nationality:{
                type: String
            }
        },
        duration:{
            start:{
                type:Number
            }, 
            end:{
                type:Number
            }
        },
        mediaId:{
            type: mongoose.Types.ObjectId
        }
        
    },
    {
        timestamps: true, // createdAt, updatedAt
        versionKey: false
    }
);
module.exports = mongoose.model('Tracks', TracksSchema);
