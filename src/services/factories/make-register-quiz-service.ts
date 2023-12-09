import { MongooseQuizRepository } from "@/repositories/mongoose/mongoose-quiz-repository";
import { RegisterQuiz } from "../quiz/register-quiz";

export function makeRegisterQuizService() {
  const quizRepository = new MongooseQuizRepository()
  const service = new RegisterQuiz(quizRepository)
  return service
}