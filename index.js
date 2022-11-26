// решение без вызова функции
const student = {
  fullName: 'Ivan Ivanov',
  programmingLanguage: 'JavaScript'
}
const job = {
  jobName: 'EPAM'
}
const giveJob = {
  ...student,
  ...job,
}
// console.log(giveJob)

// alert (`Поздравляем! У студента ${giveJob.fullName} появилась новая работа. теперь он работает в ${giveJob.jobName}`)

// вызов через функцию
const giveJobToStudents = (student, job)=>{
return Object.assign(student,job)
}
console.log(giveJobToStudents(student, job));

// let job1 = prompt ('Введите назание компании')
// const giveJobToStudents1 = (student, job1)=>{
//   return student.job1
//   }
//   console.log(giveJobToStudents1(student, job));