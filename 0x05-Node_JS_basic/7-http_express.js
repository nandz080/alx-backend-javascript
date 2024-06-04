const express = require('express');
const { argv } = require('process');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  fs.readFile(argv[2], 'utf8', (err, data) => {
    if (err) {
      throw Error('Cannot load the database');
    }
    const output = [];
    data.split('\n').forEach((data) => {
      output.push(data.split(','));
    });
    output.shift();
    const lines = [];
    output.forEach((data) => lines.push([data[0], data[3]]));
    const field = new Set();
    lines.forEach((item) => field.add(item[1]));
    const final = {};
    field.forEach((data) => { (final[data] = 0); });
    lines.forEach((data) => { (final[data[1]] += 1); });
    res.write(`Number of students: ${output.filter((check) => check.length > 3).length}\n`);
    Object.keys(final).forEach((data) => res.write(`Number of students in ${data}: ${final[data]}. List: ${lines.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}\n`));
    res.end();
  });
});

app.listen(1245);

module.exports = app;
