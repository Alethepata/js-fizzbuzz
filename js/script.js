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
    box.classList.add('bg_orange');
    box.innerHTML='Fizzbuzz';
  } else if(!(i % 3)){
    box.classList.add('bg_yellow');
    box.innerHTML='Fizz';
  }else if(!(i % 5)){
    box.classList.add('bg_green');
    box.innerHTML='Buzz';
  }else{
    box.classList.add('bg_blue');
    box.append(i);
  }
  
  boxesContainer.append(box);
}
