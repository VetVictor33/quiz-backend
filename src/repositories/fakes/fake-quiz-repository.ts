import { IOption, IQuiz } from "@/schemas/quiz";
import { QuizRepository } from "../quiz-repository";

export class FakeQuizRepository implements QuizRepository {
  private quizzes: IQuiz[] = []

  async createOne(title: string, options: IOption[]): Promise<void> {
    this.quizzes.push({
      title, options
    })
  }

  async findOneByTitle(title: string): Promise<IQuiz | null> {
    const quiz = this.quizzes.find(quiz => quiz.title === title)
    if (!quiz) {
      return null
    }
    return quiz
  }
}