// part 1
var total =0;
for(var i = 1;i>total;i++){
  if(i%2===1){
    total=+i
  }else if (i%2===0) {
    total=-i
    console.log('total'+total);
  }
}

//part 2
var pagar = '';
for(var i=0;i<10;i++){
  for(var j=0;j<10;j++){
    pagar =+ '#'
  }
  console.log(pagar);
  pagar = '';
}

//part 3
var bintang = '';
for(var i=0;i<10;i++){
  for(var j=0;j<i;j++){
    console.log(bintang);
    bintang =+ '*'
  }
  bintang = '';
}
