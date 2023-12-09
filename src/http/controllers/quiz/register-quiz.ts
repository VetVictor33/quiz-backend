import { makeRegisterQuizService } from "@/services/factories/make-register-quiz-service";
import { NextFunction, Request, Response } from "express";

export async function registerQuiz(request: Request, response: Response, next: NextFunction) {
  try {
    const quizService = makeRegisterQuizService()
    const quiz = await quizService.execute({
      quizzes: [
        {
          title: 'Qual desses países NÃO faz fronteira com o Brasil?', options: [
            {
              text: 'Bolívia',
              isCorrect: false,
            },
            {
              text: 'Colombia',
              isCorrect: false,
            },
            {
              text: 'Equador',
              isCorrect: true,
            },
            {
              text: 'Argentina',
              isCorrect: false,
            },
            {
              text: 'Venezuela',
              isCorrect: false,
            },
          ],
        },
        {
          title: 'Qual o ano do lançamento do primeiro filme da franquia Velozes e Furiosos?', options: [
            { text: '2020', isCorrect: false },
            { text: '2003', isCorrect: false },
            { text: '2004', isCorrect: false },
            { text: '2001', isCorrect: true },
          ]
        },
        {
          title: 'Em que ano morreu Margaret Thatcher?', options: [
            { text: '2013', isCorrect: true },
            { text: '2020', isCorrect: false },
            { text: '1990', isCorrect: false },
            { text: '2009', isCorrect: false },
          ]
        },
        {
          title: 'Qual dessas empresas é responsável pelo S3 (Simple Storage Service)?', options: [
            { text: 'Amazon', isCorrect: true },
            { text: 'Azure', isCorrect: false },
            { text: 'Google', isCorrect: false },
            { text: 'Microsoft', isCorrect: false },
          ]
        },
        {
          title: 'Qual desses serviços da AWS é considerado IasS (Infrastructure as Service)', options: [
            { text: 'EC2', isCorrect: true },
            { text: 'RDS', isCorrect: false },
            { text: 'DocumentDB', isCorrect: false },
            { text: 'DynamoBD', isCorrect: false },
          ]
        },
        {
          title: 'Qual desses países faz fronteira com a França?', options: [
            {
              text: 'Hungria',
              isCorrect: false,
            },
            {
              text: 'Bósnia e Herzegovina',
              isCorrect: false,
            },
            {
              text: 'Brasil',
              isCorrect: true,
            },
            {
              text: 'Polônia',
              isCorrect: false,
            },
          ],
        },
        {
          title: 'Em qual ano aconteceu a Revolução Russa?', options: [
            { text: '1917', isCorrect: true },
            { text: '1986', isCorrect: false },
            { text: '1882', isCorrect: false },
            { text: '1709', isCorrect: false },
          ]
        },
        {
          title: 'Qual desses serviços da AWS é um serviço de banco de dados?', options: [
            { text: 'RDS', isCorrect: true },
            { text: 'EC2', isCorrect: false },
            { text: 'Elastic Load Balancer', isCorrect: false },
            { text: 'VPC', isCorrect: false },
          ]
        },
        {
          title: 'Quais desses serviços da AWS é considerado serverless?', options: [
            { text: 'Lambda', isCorrect: true },
            { text: 'Elastic Compute Cloud', isCorrect: false },
            { text: 'Elastic Beanstalk', isCorrect: false },
            { text: 'Amazon Lightsail', isCorrect: false },
          ]
        },
        {
          title: 'Quais os 2 últimos dígitos de Pi?', options: [
            { text: '14', isCorrect: false },
            { text: '3,14', isCorrect: false },
            { text: '21', isCorrect: false },
            { text: 'impossível definir', isCorrect: true },
          ]
        },
      ]
    })
    return response.status(200).json({ quiz })
  } catch (error) {
    next(error)
  }
}