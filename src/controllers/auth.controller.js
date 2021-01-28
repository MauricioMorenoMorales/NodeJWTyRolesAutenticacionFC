import User from '../models/User.model'
import Role from '../models/Role.model'
import jwt from 'jsonwebtoken'

import config from '../config'

export const signUp = async (req, res) => {
	const { username, email, password, roles } = req.body

	const newUser = new User({
		username,
		email,
		password: await User.encryptPassword(password),
	})

	if (roles) {
		const foundRoles = await Role.find({ name: { $in: roles } })
		newUser.roles = foundRoles.map(role => role._id)
	} else {
		const role = await Role.find({ name: 'user' })
		newUser.roles = [role._id]
	}

	const savedUser = await newUser.save()

	const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
		expiresIn: 86400,
	})
	res.status(200).json({ token })
}

export const signin = async (req, res) => {
	res.send('signin')
}
