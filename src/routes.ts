import express from 'express'
import { registerQuiz } from './http/controllers/quiz/register-quiz'
import { checkQuiz } from './http/controllers/quiz/check-quiz'

const routes = express()

routes.get('/', (req, res) => (res.json('🚀 Server up and running')))
routes.get('/quiz', registerQuiz)
routes.post('/check-quiz', checkQuiz)

export default routes