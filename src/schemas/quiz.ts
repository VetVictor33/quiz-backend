import { Schema, Types, model } from "mongoose";

export interface IOption {
  _id?: Types.ObjectId
  text: string
  isCorrect?: boolean
}

export interface IQuiz {
  _id?: string
  title: string
  options: IOption[]
}

const QuizSchema: Schema<IQuiz> = new Schema<IQuiz>({
  title: { type: String, require: true, unique: true },
  options: Array<IOption>
})


export const Quiz = model<IQuiz>('Quiz', QuizSchema)