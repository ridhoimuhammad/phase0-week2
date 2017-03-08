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
nama='hbj';
peran='Tabib';
if(nama===''){
  console.log("Nama tidak boleh kosong")
  
}
else if(nama!=='')
{  
console.log("Selamat datang di Dunia Proxytia, " +nama)
//console.log("Halo Ksatria  "+nama, " kamu dapat menyerang dengan senjatamu!")
}
if (peran ==''){
  console.log("Pilih peranmu untuk memulai game!")
  }
else if (peran!=='' && peran=== "Kesatria"){
  console.log("Halo Ksatria " +nama +", kamu dapat menyerang dengan senjatamu!")
  }else if (peran!=='' && peran==="Tabib"){
    console.log("Halo Tabib " +nama +", kamu dapat menyerang dengan senjatamu!")
  }else if(peran!=='' && peran=== "Penyihir"){
    console.log("Halo Penyihir " +nama +", ciptakan keajaiban yang membantu kemenanganmu!")
  }else{
  console.log("Pilih peranmu untuk memulai game!")
}
 
