import mongoose from "mongoose";
import { QuizRepository } from "../quiz-repository";
import { IOption, IQuiz } from "@/interfaces/quiz";

export class FakeQuizRepository implements QuizRepository {
  private quizzes: IQuiz[] = []

  async findById(id: string | mongoose.Types.ObjectId): Promise<IQuiz | null> {
    const quiz = this.quizzes.find(quiz => quiz._id === id)
    if (!quiz) {
      return null
    }
    return quiz
  }

  async createOne(title: string, options: IOption[]): Promise<void> {
    for (const option of options) {
      option._id = new mongoose.Types.ObjectId()
    }
    this.quizzes.push({
      _id: new mongoose.Types.ObjectId(), title, options
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