import { MongooseQuizRepository } from "@/repositories/mongoose/mongoose-quiz-repository";
import { CheckQuiz } from "@/services/quiz/check-quiz";

export function MakeCheckQuizService() {
  const repository = new MongooseQuizRepository()
  const service = new CheckQuiz(repository)
  return service
}