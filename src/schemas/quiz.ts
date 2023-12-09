import { IOption, IQuiz } from "@/interfaces/quiz";
import { Schema, model } from "mongoose";



const QuizSchema: Schema<IQuiz> = new Schema<IQuiz>({
  title: { type: String, require: true, unique: true },
  options: Array<IOption>
})


export const Quiz = model<IQuiz>('Quiz', QuizSchema)