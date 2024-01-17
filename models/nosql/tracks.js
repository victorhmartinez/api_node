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
/**
 * Implementar metodo propio con relacion a storage
 
 * @returns 
 */
TracksSchema.statics.findAllData= function(){
    const joinData= this.aggregate([
        {
            $lookup:{
                from: "storages", //Tracks--> storages
                localField:"mediaId",// Tracks.mediaId
                foreignField:"_id",//Storages._id
                as:"audio" // Lo va colocar en un alias
            }
        },{
            $unwind:"$audio"
        }
    ])
    return joinData
};
/**
 * Solo una realcion
 * @param {*} id 
 * @returns 
 */
TracksSchema.statics.findOneData= function(id){
    const joinData= this.aggregate([
        {
            $match:{
                _id: new mongoose.Types.ObjectId(id)
            }
        },
        {
            $lookup:{
                from: "storages", //Tracks--> storages
                localField:"mediaId",// Tracks.mediaId
                foreignField:"_id",//Storages._id
                as:"audio" // Lo va colocar en un alias
            }
        },{
            $unwind:"$audio"
        },
      
    ])
    return joinData
};
module.exports = mongoose.model('Tracks', TracksSchema);
