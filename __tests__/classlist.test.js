'use strict'
/* eslint-env jest */
const classlist = require('./../classList.js')
const newStudent = 'Velaphi'

classlist.add(newStudent)
test('Expect one student in classlist', () => {
  const arrayOfStudents = classlist.get()
  const size = arrayOfStudents.length
  expect(size).toBe(1)
})
