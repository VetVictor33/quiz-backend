import { IQuizAnswer } from "@/interfaces/quiz";
import { QuizRepository } from "@/repositories/quiz-repository";

interface CheckQuizServiceRequest {
  answers: IQuizAnswer[]
}

interface CheckQuizResponse {
  correctAnswers: number
}

export class CheckQuiz {
  constructor(private quizRepository: QuizRepository) { }

  async execute({ answers }: CheckQuizServiceRequest): Promise<CheckQuizResponse> {
    let correctAnswers = 0
    for (const answer of answers) {
      const quiz = await this.quizRepository.findById(answer._questionID)
      if (!quiz) {
        throw new Error('Incorrect quiz Id')
      }
      const option = quiz.options.find((option) => option._id?.toString() === answer._optionID.toString())
      if (!option) {
        throw new Error('Incorrect option Id')
      }
      if (option.isCorrect) {
        correctAnswers++
      }
    }
    return {
      correctAnswers
    }
  }
}