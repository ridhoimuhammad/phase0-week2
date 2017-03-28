//part 1

var nama = 'ikhsan';
var angkaPembilang = 20;
var angkaPenyebut = 4;
var hasilBagi = angkaPembilang%angkaPenyebut;
console.log('hallo '+nama,'angka pembilang % angka penyebut adalah sama dengan '+hasilBagi);


//part 2
var alas = 12; tinggi=15;
var luas = alas*tinggi /2;
console.log(luas);

//part 3


tahun = 2000
if (tahun % 4 === 0){
  console.log(+tahun+' adalah tahun Kabisat');
}else if (tahun % 100 === 0){
console.log(+tahun+' adalah tahun Kabisat');
}else if (tahun % 400 === 0) {
console.log(+tahun+' adalah tahun Kabisat');
}else{
console.log(+tahun+' adalah bukan tahun Kabisat');
          }
