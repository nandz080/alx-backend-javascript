const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (error, data) => {
            if (error) {
                reject(new Error('Cannot load the database'));
            } else {
                const lines = data.split('\n').filter(line => line.trim() !== ''); // Filter out empty lines
                const students = lines.slice(1); // Exclude the header line
                const studentsByField = {};

                students.forEach(student => {
                    const fields = student.split(',');
                    const field = fields[3].trim();

                    if (!(field in studentsByField)) {
                        studentsByField[field] = [];
                    }

                    studentsByField[field].push(fields[0].trim());
                });

                const totalStudents = students.length;
                console.log(`Number of students: ${totalStudents}`);

                Object.entries(studentsByField).forEach(([field, students]) => {
                    console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
                });

                resolve();
            }
        });
    });
}

module.exports = countStudents;
