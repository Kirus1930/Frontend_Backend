console.log(` `)
const lecture = ['Лекция 1', 'Лекция 2', 'Лекция 3']
const practice = ['Практика 1', 'Практика 2', 'Практика 3']
lecture.push('Лекция 4')
practice.push('Практика 4')
lecture.forEach((lects) => {
    console.log(lects);
});
console.log(` `)
practice.forEach((pracs) => {
    console.log(pracs);
});

function write_array(arr){
    return console.log(arr);
}
write_array(lecture);
write_array(practice);