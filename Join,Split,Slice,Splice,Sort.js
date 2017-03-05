function dataHandling2(){
  var output = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
  output.splice(4,5, "Pria","SMA Internasional Metro");
  console.log(output);
  var baru = (output[3]);
  var baru1 = (output[3]);
  if(baru || '21/05/1989'){
    console.log('Mei');
  }
  else{
    console.log("tidak ada");
  }
  var baru3=baru1.split("");
  baru3.sort(function(value1, value2) { return value1 < value2 });
  console.log(baru3);
  var baru4=(output[3]);
  //console.log(baru4);
  var baru5=baru4.split('');
  var baru6=baru5.join(" ");
  //var baru7=baru6.splice(4,10,"-","-");
  console.log(baru6);
  var baru7=output.slice(1,2);
  console.log(baru7);
}
dataHandling2();