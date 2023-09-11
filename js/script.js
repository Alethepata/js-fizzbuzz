/*
1. Creo il ciclo con for.
2. Per i multipli uso If + il modulo %.
3. Trascrivo l'output.
*/

const boxesContainer = document.querySelector('.boxes');
for(let i = 1; i <= 100; i++){
  const box = document.createElement('div');
  box.classList.add('box');
  if((!(i % 3) && (!(i % 5)))){
    box.classList.add('bg-black');
    box.innerHTML='Fizzbuzz';
  } else if(!(i % 3)){
    box.classList.add('bg-warning');
    box.innerHTML='Fizz';
  }else if(!(i % 5)){
    box.classList.add('bg-primary');
    box.innerHTML='Buzz';
  }else{
    box.classList.add('bg-danger');
    box.append(i);
  }
  
  boxesContainer.append(box);
}
