import express from "express"
import config from "config"
import mongoose from "mongoose";
import routerAuth from './routes/auth.routes.js'

const app = express()
const PORT = config.get('port') || 5000
const MongoUrl = config.get('mongourl')

app.use('/api/auth', routerAuth)

const start = async () => {
    try {
        await mongoose.connect(MongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT} ...`))
    } catch (e) {
        console.log('Server error app.js', e.message)
        process.exit(1)
    }
}

start()



