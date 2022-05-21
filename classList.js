'use strict'

// private

const list = []
// public
module.exports = {
  add: function (student) {
    list.push(student)
  },
  edit: function (student, index) {
    list[index] = student
  },
  get: function () {
    return list
  },
  delete: function (index) {
    list.splice(index, 1) // Rmove one element starting from index
  }

}
