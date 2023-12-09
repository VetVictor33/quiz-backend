import { IOption, IQuiz } from "@/schemas/quiz"



export interface QuizRepository {
  findById(id: string): Promise<IQuiz | null>
  createOne(title: string, options: IOption[]): Promise<void>
  findOneByTitle(title: string): Promise<IQuiz | null>
}