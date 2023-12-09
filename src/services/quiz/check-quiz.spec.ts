import { QuizRepository } from '@/repositories/quiz-repository'
import { beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { CheckQuiz } from './check-quiz'
import { FakeQuizRepository } from '@/repositories/fakes/fake-quiz-repository'

let quizRepository: QuizRepository
let sut: CheckQuiz

describe("Check quiz answers", () => {
  beforeEach(async () => {
    quizRepository = new FakeQuizRepository()
    sut = new CheckQuiz(quizRepository)
    await quizRepository.createOne('Fake title', [
      { text: 'Fake option 1', isCorrect: true },
      { text: 'Fake option 2', isCorrect: false },
    ])
  })

  it("Should validate correct answers", async () => {
    const quiz = (await quizRepository.findOneByTitle('Fake title'))!
    const answer = {
      _questionID: quiz._id!,
      _optionID: quiz.options[0]._id!
    }

    const { correctAnswers } = await sut.execute({ answers: [answer] })

    expect(correctAnswers).toEqual(1)
  })

  it("Should not validate incorrect answers", async () => {
    const quiz = (await quizRepository.findOneByTitle('Fake title'))!
    const answer = {
      _questionID: quiz._id!,
      _optionID: quiz.options[1]._id!
    }

    const { correctAnswers } = await sut.execute({ answers: [answer] })

    expect(correctAnswers).toEqual(0)
  })
})