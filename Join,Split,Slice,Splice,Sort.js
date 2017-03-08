function dataHandling2(){
  var output = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
  output.splice(4,1, "Pria","SMA Internasional Metro");
  console.log(output);
  var tanggal= output[3];
  //console.log(tanggal);
  var tanggal2= tanggal.split('/');
  //console.log(tanggal2);
  var bulan = tanggal2[1];
  //console.log(bulan);
  var bulan2 = parseInt(bulan);
  //console.log(bulan2);
  if(bulan2 == 1){
    console.log("January")
  }else if(bulan2 == 2){
    console.log("February")
  }else if(bulan2 == 3){
    console.log("Maret")
  }else if(bulan2 == 4){
    console.log("April")
  }else if(bulan2 == 5){
    console.log("Mei")
  }
  var s=tanggal2.sort(function(value1, value2) { return value1 < value2 });
  console.log(s);
  var a = s.join("-");
  console.log(a);
  //console.log([1,11,2,21,3].sort());
  console.log(output[1]);
}
dataHandling2();