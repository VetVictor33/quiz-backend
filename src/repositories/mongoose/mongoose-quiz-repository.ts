import mongoose from "mongoose";
import { IOption, IQuiz, Quiz } from "@/schemas/quiz";
import { QuizRepository } from "../quiz-repository";

export class MongooseQuizRepository implements QuizRepository {
  async createOne(title: string, options: IOption[]): Promise<void> {

    options.forEach((options) => {
      options._id = new mongoose.Types.ObjectId()
    })

    const newQuiz = new Quiz({
      _id: new mongoose.Types.ObjectId(),
      title,
      options: options
    })
    try {
      await newQuiz.save()
    } catch (error) {
    }

  }

  async findOneByTitle(title: string): Promise<IQuiz | null> {
    const quiz = await Quiz.findOne({ title })
    return quiz
  }
}