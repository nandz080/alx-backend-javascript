const fs = require('fs');

async function countStudents(path) {
  if (fs.existsSync(path)) {
    return new Promise((resolve) => {
      fs.readFile(path, 'utf8', (err, data) => {
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
        console.log(`Number of students: ${output.filter((check) => check.length > 3).length}`);
        Object.keys(final).forEach((data) => console.log(`Number of students in ${data}: ${final[data]}. List: ${lines.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}`));
        resolve(output, final, lines);
      });
    });
  }
  throw Error('Cannot load the database');
}

module.exports = countStudents;
