import { QuizRepository } from '@/repositories/quiz-repository'
import { beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { ValidateQuiz } from './validate-quiz'
import { FakeQuizRepository } from '@/repositories/fakes/fake-quiz-repository'

let quizRepository: QuizRepository
let sut: ValidateQuiz

describe("Check quiz answers", () => {
  beforeEach(async () => {
    quizRepository = new FakeQuizRepository()
    sut = new ValidateQuiz(quizRepository)
    await quizRepository.createOne('Fake title', [
      { text: 'Fake option 1', isCorrect: true },
      { text: 'Fake option 2', isCorrect: false },
    ])
  })

  it("Should validate correct answers", async () => {
    const quiz = (await quizRepository.findOneByTitle('Fake title'))!
    const userAnswer = {
      _questionID: quiz._id!,
      _optionID: quiz.options[0]._id!
    }

    const { correctAnswers } = await sut.execute({ _questionID: userAnswer._questionID, _optionID: userAnswer._questionID })

    expect(correctAnswers).toEqual(1)
  })

  it("Should not validate incorrect answers", async () => {
    const quiz = (await quizRepository.findOneByTitle('Fake title'))!
    const userAnswer = {
      _questionID: quiz._id!,
      _optionID: quiz.options[1]._id!
    }

    const { correctAnswers } = await sut.execute({ _questionID: userAnswer._questionID, _optionID: userAnswer._questionID })

    expect(correctAnswers).toEqual(0)
  })
})