import { Request, Response } from "express";
import { z } from "zod";

const answersSchema = z.object({
  _questionID: z.string(),
  _answerID: z.string()
})

const checkQuizSchema = z.object({
  name: z.string(),
  answers: z.array(answersSchema)
})


export async function checkQuiz(request: Request, response: Response) {
  const userAnswers = answersSchema.parse(request.body)

  const usersPoints = 'x'

  return response.status(200).json({ usersPoints })
}