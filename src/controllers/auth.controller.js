import User from '../models/User.model'

export const signUp = async (req, res) => {
	const {username, email, password, roles} = req.body
	new User({
		username,
		email,

	})
	console.log(req.body)
}

export const signin = async (req, res) => {
	res.send('signin')
}
