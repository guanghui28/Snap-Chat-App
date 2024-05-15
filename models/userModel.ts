import mongoose, { Document, Model } from "mongoose";

export interface IUser {
	username: string;
	fullName: string;
	email: string;
	avatar?: string;
}

export interface IUserDocument extends IUser, Document {
	createdAt: Date;
	updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUserDocument>(
	{
		username: {
			type: String,
			required: true,
		},
		fullName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		avatar: {
			type: String,
			default: "",
		},
	},
	{ timestamps: true }
);

const User: Model<IUserDocument> =
	mongoose.models?.User || mongoose.model("User", userSchema);

export default User;
