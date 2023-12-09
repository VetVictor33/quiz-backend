import { QuizRepository } from "@/repositories/quiz-repository";
import mongoose from "mongoose";

interface CheckQuizServiceRequest {
  answers: {
    _questionID: string | mongoose.Types.ObjectId
    _optionID: string | mongoose.Types.ObjectId
  }[]
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
      const option = quiz.options.find((option) => option._id === answer._optionID)
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