import { QuizRepository } from "@/repositories/quiz-repository";
import { IQuiz } from "@/interfaces/quiz";


interface RegisterQuizServiceRequest {
  quizzes: IQuiz[]
}

export class RegisterQuiz {

  constructor(private quizRepository: QuizRepository) { }

  async execute({ quizzes }: RegisterQuizServiceRequest) {

    const createdQuizzes: IQuiz[] = []

    for (const quiz of quizzes) {
      await this.quizRepository.createOne(quiz.title, quiz.options)
      const createdQuiz = await this.quizRepository.findOneByTitle(quiz.title)
      if (!createdQuiz) {
        return
      }
      for (const option of createdQuiz.options) {
        delete option.isCorrect
      }
      createdQuizzes.push(createdQuiz)
    }
    return createdQuizzes
  }
}