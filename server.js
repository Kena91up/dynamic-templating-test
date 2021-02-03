require('dotenv').config();

const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// require some data form your exam-info.js file
let students = require('./exam-info')

app.use(express.static('public'));

app.get("/", (req, res) => {
 
  res.render( 'full-list.hbs' , {students});
});
app.get("/results", (req, res )=> {
    let scoreStudents = students
    .filter((students) => students.hasPassed)
    .sort((a,b) => b.score - a.score)
       res.render( 'results.hbs',{scoreStudents})
});

// 1: in the home,list all the students who took the exam (list all the students)

// ... Your code here

// 2: in the '/results' list all the students who passed the test and their score.
// Also, students should be in descending order based on their score.

// ... Your code here

app.listen(process.env.PORT, () =>
  console.log(`App running on ${process.env.PORT}.`)
);
