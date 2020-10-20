// Busqueda Binaria
var list = new Array;
for (let i = 1; i <= 100; i++) {
    if ((i % 2) == 0) {
        list.push(i);
    }
}

function busquedaBinaria(value,list){
    let start = 0;
    let end = list.length - 1;
    let position = -1;
    let found = false;
    let middle;

    while (found === false && start <= end) {
        middle = Math.floor((start + end )/2);
        if(list[middle] == value){
            found = true;
            position = middle;
        } else if (list[middle] > value){
            end = middle -1;
        } else {
            start = middle +1;
        }
    }
    return position;
    
}


let value = 10 // Numero a buscar
console.log(list)
console.log(`\nEl numero a buscar es el ${value} y esta en la posicion: ${busquedaBinaria(value,list)}`)