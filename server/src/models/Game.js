import { Schema } from "mongoose";

export const GameSchema = new Schema(
    {
        matchId: { type: Schema.Types.ObjectId },
        team1: { type: String, required: true },
        team2: { type: String, required: true },
        points: { type: String, required: true },
        winnerId: { type: Schema.Types.ObjectId }
    }
)