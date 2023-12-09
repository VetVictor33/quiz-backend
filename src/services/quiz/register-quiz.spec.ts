import { QuizRepository } from '@/repositories/quiz-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { RegisterQuiz } from './register-quiz'
import { FakeQuizRepository } from '@/repositories/fakes/fake-quiz-repository'
import { IOption } from '@/interfaces/quiz'

let quizRepository: QuizRepository
let sut: RegisterQuiz

describe("Register Quiz service", () => {
  beforeEach(() => {
    quizRepository = new FakeQuizRepository()
    sut = new RegisterQuiz(quizRepository)
  })
  const titleOne = 'My quiz 1'
  const titleTwo = 'My quiz 2'
  const myOptionOne: IOption = { text: 'My beautiful option', isCorrect: true }
  const myOptionTwo: IOption = { text: 'My beautiful second option', isCorrect: false }

  it("Should create a quiz", async () => {
    const myQuiz = await sut.execute({ quizzes: [{ title: titleOne, options: [myOptionOne, myOptionTwo] }] })

    expect(myQuiz?.length).toEqual(1)
  })

  it("Should create many quizzes", async () => {
    const myQuiz = await sut.execute({
      quizzes: [
        { title: titleOne, options: [myOptionOne, myOptionTwo] },
        { title: titleTwo, options: [myOptionOne, myOptionTwo] },
      ]
    })

    expect(myQuiz?.length).toEqual(2)
  })

  it("Should should not return 'isCorrect' IOption property", async () => {
    const myQuiz = (await sut.execute({
      quizzes: [
        { title: titleOne, options: [myOptionOne, myOptionTwo] },
      ]
    }))!

    expect(myQuiz[0]).not.toHaveProperty('isCorrect')
  })
})