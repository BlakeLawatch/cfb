import { json } from "express/lib/response";
import { Schema } from "mongoose";

export const GameSchema = new Schema(
    {
        matchId: { type: Schema.Types.ObjectId },
        team1Id: { type: Schema.Types.ObjectId },
        team2Id: { type: Schema.Types.ObjectId },
        points: { type: Number, required: true },
        winnerId: { type: Schema.Types.ObjectId }
    },
    { timestamps: true, toJSON: { virtuals: true } })

GameSchema.virtual('creator', {
    localField: 
    })
