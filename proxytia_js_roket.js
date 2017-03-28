////////////////////////////
// Phase 0 week 2
// logika if-else
//////////////////////// proxytia_games.js

console.log("+-------------------------------+")
console.log("+W E L C O M E  to Proxytia game+")
console.log("+--------- P E R A N -----------+")
console.log("|1. Ksatria, 2.Tabib, 3.Penyihir|")
console.log("|******* Case-sensitive ********|")
console.log("+-------------------------------+")
//Penulisan peran case-sensitive

var nama,peran;
var tahunLahir = 1992;
var umur = 2017 - tahunLahir;
var playerHealth = tahunLahir * Math.random();
var monsterHealth = tahunLahir * Math.random();
var kodeMonster = Math.floor(Math.pow(100, Math.random()));
// console.log(umur);
// console.log(playerHealth);
// console.log(monsterHealth);
nama='';
peran='Tabib';
if(nama===''){
 nama = 'kacung';

}
else if(nama!=='');
{
console.log("Selamat datang di Dunia Proxytia, " +nama);
//console.log("Halo Ksatria  "+nama, " kamu dapat menyerang dengan senjatamu!");
}
if (peran ==''){
  console.log("Pilih peranmu untuk memulai game!");
  }
else if (peran!=='' && peran=== "Kesatria"){
  console.log("Halo Ksatria " +nama +", kamu dapat menyerang dengan senjatamu!");
  }else if (peran!=='' && peran==="Tabib"){
    console.log("Halo Tabib " +nama +", kamu dapat menyerang dengan senjatamu!");
  }else if(peran!=='' && peran=== "Penyihir"){
    console.log("Halo Penyihir " +nama +", ciptakan keajaiban yang membantu kemenanganmu!");
  }else{
  console.log("Pilih peranmu untuk memulai game!");
}
for (var i =0 ; i<tahunLahir;i++){
  if (i%umur===0&&i%kodeMonster===0){
    console.log('Health keduanya bertambah');
    monsterHealth+umur;
    playerHealth-kodeMonster;
  }else if(i%umur===0){
    console.log(peran + ' ' + nama + ' menyerang monster!');
    monsterHealth-umur;
  }else if (i%kodeMonster===0){
    console.log('monster menyerang ' + peran + ' ' + nama + '!');
    playerHealth-kodeMonster;
  }else if (playerHealth>monsterHealth) {
    console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
  }else {
    console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');
  }
}
