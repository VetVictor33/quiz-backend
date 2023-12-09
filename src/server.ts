import mongoose from 'mongoose';
import app from './app'
import { env } from './env'

const PORT = env.PORT

const server = app.listen(PORT, async () => {
  try {
    console.log('⌛ Connecting to database')
    await mongoose.connect(env.MONGO_CONNECTION)
    console.log('Connected to database!')
    console.log(`🚀 Server up on port ${PORT}`)
  } catch (error) {
    console.log("🚨 Failed to init server")
    mongoose.disconnect()
  }
});

process.on("SIGINT", () => {
  server.close()
  mongoose.disconnect()
  console.log("Server down")
})