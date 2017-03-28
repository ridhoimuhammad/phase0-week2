/////////////////////////
// phase 0 week 2
////////////////// json.js

var Object1 = {
    hari: 'Senin',
    kehadiran: 'Masuk',
    alasan: "     -    "
}
var Object2 = {
    hari: 'Rabu',
    kehadiran: 'Masuk',
    alasan: "     -    "
}
var Object3 = {
    hari: 'Jumat',
    kehadiran: 'Absen',
    alasan: "Dinas Luar"
}

var abc=[Object1,Object2,Object3];
var absen = 0;
var masuk = 0;

for(var i=0;i<abc.length;i++){
  console.log("HARI        "+"KEHADIRAN      "+"ALASAN  ");
    console.log(abc[i].hari +"         "+ abc[i].kehadiran +"      "+abc[i].alasan+'\n');
  if(abc[i].kehadiran == "Masuk"){
    masuk = masuk + 1;
  }else if(abc[i].kehadiran == "Absen"){
    absen = absen + 1;
  }
}
var jml=absen + masuk;
console.log('hari kerja minggu ini  ' +jml+' hari');
console.log('total masuk kerja ' +masuk+' hari');
console.log('total tidak masuk kerja ' +absen+' hari');
