function forLoop(array){
  for(let i=0; i<25; i++){
    array[i]="I am ${i} strange loop${i===1 ? '' : 's'}."
    console.log(array[i])
  }
  return array
}

function whileLoop(number){
  while(number>0){
    console.log(number)
    i--
  }
  return 'done'
}
