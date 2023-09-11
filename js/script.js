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
  } else if(!(i % 3)){
    box.classList.add('bg-warning');
  }else if(!(i % 5)){
    box.classList.add('bg-primary');
  }else{
    box.classList.add('bg-danger');
  }
  console.log(i, box)
}
