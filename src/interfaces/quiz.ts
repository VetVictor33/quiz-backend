import mongoose from "mongoose"

export interface IOption {
  _id?: mongoose.Types.ObjectId
  text: string
  isCorrect?: boolean
}

export interface IQuiz {
  _id?: mongoose.Types.ObjectId
  title: string
  options: IOption[]
}

export interface IQuizAnswer {
  _questionID: string | mongoose.Types.ObjectId
  _optionID: string | mongoose.Types.ObjectId
}