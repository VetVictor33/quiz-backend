import { IOption, IQuiz } from "@/schemas/quiz"



export interface QuizRepository {
  createOne(title: string, options: IOption[]): Promise<void>
  findOneByTitle(title: string): Promise<IQuiz | null>
}