function forLoop(array){
  for(let i=0; i<25; i++){
    console.log(i)
    console.log("I am ${i} strange loop.")
    array.push("I am ${parseint(i)} strange loop${i===0 ? '' : 's'}.")
    console.log(array[i])
  }
  console.log(array)
  return array
}

function whileLoop(number){
  while(number>0){
    console.log(number)
    number--
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){

  do{
    array.shift()

  }while(array.length > 0 && maybeTrue())
  return array
}
