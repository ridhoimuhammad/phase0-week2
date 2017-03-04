/////////////////////////
// phase 0 week 2
////////////////// json.js

var Object1 = {
    hari: ['Senin','Rabu','Jumat'],
    kehadiran: [
    'Masuk',
    'Masuk',
    'Absen',
    {
      alasan: "Dinas Luar"
    }
  ],
};
console.log(Object1.hari[0]+' '+Object1.kehadiran[0]);
console.log(Object1.hari[1]+' '+Object1.kehadiran[1]);
console.log(Object1.hari[2]+' '+Object1.kehadiran[2]+' alasan '+Object1.kehadiran[3].alasan);
console.log('***********************************')
var kehadiran =[["Senin","Masuk"," - "],["Rabu","Masuk"," - "],["Jumat","Absen","Dinas Luar"]]
for (var absensi = 0; absensi < 3; kehadiran,absensi++){
  console.log('Hari      : ' +kehadiran[absensi][0])
  console.log('Kehadiran : ' +kehadiran[absensi][1])
  console.log('Alasan    : ' +kehadiran[absensi][2])
  console.log('--------------------------------')
}
var masuk = 2,absen = 1,jumlah = absensi;
console.log("Total Hari kerja minggu ini :" +jumlah +" hari")
//if(kehadiran){
//console.log(kehadiran[absensi][0])
//}
console.log("Total Masuk : " +masuk +" hari")
console.log("Total Tidak Masuk : " +absen +" hari")