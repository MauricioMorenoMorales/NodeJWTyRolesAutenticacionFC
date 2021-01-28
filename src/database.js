import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose
	.connect(
		`mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@nodejsplatzi.cg57m.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,
		{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true },
	)
	.then(db => console.log('Database is connectad'))
	.catch(err => console.log(`[Database error] ${err}`))
