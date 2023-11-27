// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for(var i = 0; i <= 100; i++){
  if( i % 2 == 0){
    console.log(i);
  }
}
console.log(" ");
// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.

var i = 0;
while( i < 100){
  i++;
  if( i % 2 == 0) continue;
  console.log(i);
}
console.log(" ");
// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.

var  i = 0;
do{
  i++;
  if( i % 3 == 0 ){
    console.log(i);
  }

}while( i < 100 );
console.log(" ");

// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.

for (var i = 2; i <= 100; i++) {
  let prime = true;

  for (var j = 2; j < i; j++) {
    if (i % j === 0) {
      prime = false;
      break;
    }
  }
  if (prime) {
    console.log(i);
  }
}




