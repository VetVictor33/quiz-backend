import { MakeCheckQuizService } from "@/services/factories/make-check-quiz-service";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const answersSchema = z.object({
  _questionID: z.string(),
  _optionID: z.string()
})

const checkQuizSchema = z.object({
  name: z.string(),
  answers: z.array(answersSchema)
})


export async function checkQuiz(request: Request, response: Response, next: NextFunction) {
  try {
    const { name, answers } = checkQuizSchema.parse(request.body)

    const service = MakeCheckQuizService()

    const { correctAnswers } = await service.execute({ answers })


    return response.status(200).json({
      name,
      correctAnswers
    })
  } catch (error) {
    next(error)
  }
}