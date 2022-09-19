/**
    Determinar el minimo numero de saltos necesarios para llegar al final.
    EL juego siempre se puede pasar.

    Array = [0,1,0,1,0,1]
    count Min 

*/

const test1 = [0, 0, 1, 0, 0, 1, 0]; // 4
const test2 = [0, 1, 0, 1, 0, 1, 0]; // 3
const test3 = [0, 0, 1, 0, 1, 0, 0]; // 4
const test4 = [0, 0, 0, 0, 1, 0, 0]; // 4

function jumpingClouds(array) {
  const { length } = array;
  let cont = 0;
  for (let i = 1; i < length; i++) {
    if (array[i] > 0) {
      cont++;
      i++;
    } else {
      if (array[i + 1] > 0) {
        cont += 2;
        i += 2;
      } else {
        cont++;
        i++;
      }
    }
  }

  return cont;
}

console.log(jumpingClouds(test1));
console.log(jumpingClouds(test2));
console.log(jumpingClouds(test3));
console.log(jumpingClouds(test4));
