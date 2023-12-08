import express from 'express'

const routes = express()

routes.use('/', (req, res) => (res.json('🚀 Server up and running')))

export default routes