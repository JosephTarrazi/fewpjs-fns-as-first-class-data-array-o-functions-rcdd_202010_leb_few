function wakeDog(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
return `Wake ${dogName} the ${dogBreed}` ;
  
}
let a=wakeDog('Xerox','Border Collie');

function leashDog(dogName, dogBreed) {
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`;
}
let b=leashDog('Boo Radley','Pibble');

function walkToPark(dogName, dogBreed) {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`;
}
let c=walkToPark('Bunny','Labrador');

function throwFrisbee(dogName, dogBreed) {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}
let d=throwFrisbee('Mary J.Blige','Papillon');

function walkHome(dogName, dogBreed) {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`;
}
let e= walkHome('Santa Paws','Husky');
   
function unleashDog(dogName, dogBreed) {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`;
}


let f= unleashDog('Lauren','Golden Retriever');

let routine=[wakeDog('Skippy','Welsh Corgi'),a, b , c, d, e, f];

function exerciseDog(dogName, dogBreed){

  for (let i=0; i<routine.length; i++){
    console.log(routine[i]);
  }
  return routine[i];
  
}