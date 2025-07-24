import mongoose, { Document, Schema, model } from "mongoose";

export interface IGroup extends Document {
  name: string;
  description?: string;
  isAdmin: mongoose.Types.ObjectId[];
  members: mongoose.Types.ObjectId[];
  groupImage: string;
  messages: mongoose.Types.ObjectId[];
  lastMessage: mongoose.Types.ObjectId;
}

const groupSchema = new Schema<IGroup>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    description: {
      type: String,
      trim: true,
    },
    isAdmin: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    groupImage: {
      type: String,
      default: "",
    },
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
    lastMessage: {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
  },
  {
    timestamps: true,
  }
);

const Group = model<IGroup>("Group", groupSchema);
export { Group };
