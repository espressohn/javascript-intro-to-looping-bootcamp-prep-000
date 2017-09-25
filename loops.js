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
    number--
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  var i=0
  do{
    delete array[i]
    i++
  }while(array.length > 0 && maybeTrue())
  return
}
