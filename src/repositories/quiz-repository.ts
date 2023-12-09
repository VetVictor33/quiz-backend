import { IOption, IQuiz } from "@/schemas/quiz"
import { Types } from "mongoose"



export interface QuizRepository {
  findById(id: Types.ObjectId | string): Promise<IQuiz | null>
  createOne(title: string, options: IOption[]): Promise<void>
  findOneByTitle(title: string): Promise<IQuiz | null>
}