import { QuizRepository } from "@/repositories/quiz-repository";

interface ValidateQuizServiceRequest {
  _questionID: string
  _optionID: string
}

interface ValidateQuizResponse {
  correctAnswers: number
}

export class ValidateQuiz {
  constructor(private quizRepository: QuizRepository) { }

  async execute({ _optionID, _questionID }: ValidateQuizServiceRequest): Promise<ValidateQuizResponse> {

    return {
      correctAnswers: 10
    }
  }
}