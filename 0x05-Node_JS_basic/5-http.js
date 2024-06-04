const http = require('http');
const fs = require('fs');
const { argv } = require('process');

function countStudents(path, stream) {
  if (fs.existsSync(path)) {
    const data = fs.readFileSync(path, 'utf8');
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
    stream.write(`Number of students: ${output.length}\n`);
    const tmp = [];
    Object.keys(final).forEach((data) => tmp.push(`Number of students in ${data}: ${final[data]}. List: ${lines.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}\n`));
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < tmp.length; i++) {
      if (i === tmp.length - 1) {
        tmp[i] = tmp[i].replace(/(\r\n|\n|\r)/gm, '');
      }
      stream.write(tmp[i]);
    }
  } else { throw new Error('Cannot load the database'); }
}

const hostname = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;
  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      countStudents(argv[2], res);
      res.end();
    } catch (err) {
      res.end(err.message);
    }
  }
});

app.listen(port, hostname);

module.exports = app;
