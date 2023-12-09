import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { env } from "@/env";
import { IncorrectIdError } from "@/services/errors/IncorrectIdErro";

export async function errorHandler(error: Error, request: Request, response: Response, next: NextFunction) {
  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    //ass to log
  }

  if (error instanceof ZodError) {
    return response
      .status(400)
      .send({ message: 'Erro de validação', issues: error.format() })
  }

  if (error.name === "CastError" || error instanceof IncorrectIdError) {
    return response
      .status(400)
      .send({ message: 'Id inválido' })
  }

  return response.status(500).send({ message: 'Erro interno de servidor.' })
}