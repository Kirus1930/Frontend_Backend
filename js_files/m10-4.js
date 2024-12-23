console.log(` `)
const lects = ['Основы HTML', 'Углубленное изучение HTML', 'Основы CSS', 'Адаптивная верстка', 'Основы JS']

function write_array_o(arr){
    lect_o = []
    for (i = 0; i < arr.length; i++){
        arr_elem = arr[i];
        if (arr_elem[0] == "О"){
            lect_o.push(arr_elem);
        }
    }
    return console.log(lect_o);
}
write_array_o(lects)