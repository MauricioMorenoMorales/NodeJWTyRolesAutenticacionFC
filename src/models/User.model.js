import { Schema, model } from 'mongoose'

const userSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			requred: true,
		},
		password: {
			type: String,
			required: true,
		},
		roles: [
			{
				ref: 'Role',
				type: Schema.Types.ObjectId,
			},
		],
	},
	{
		timestamps: true,
		versionKey: false,
	},
)

export default userSchema
