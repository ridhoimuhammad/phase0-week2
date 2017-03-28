function Mobil(mobil_buatan,mobil_model,mobil_warna){
	this.pabrikan = mobil_buatan;
	this.model  = mobil_model;
	this.warna  = mobil_warna;
	this.maju   = function(otherMobil){
		console.log('mobil '+this.pabrikan+' '+this.model+' '+this.warna+',bergerak maju ');
	}
//     this.warnanya = function(otherMobil){
//         console.log('mobil 1 adalah '+mobil_warna+' '+mobil_model+' '+mobil_buatan);
//     }
}

// var mobilku = new mobil('Tesla', 'Ludicrous', 'Merah');
// mobilku.maju()
// console.log('------------------------------------------')
// var mobil1 = new mobil('Honda', 'Accord', 'Hitam');
// var mobil2 = new mobil('Honda', 'Civic', 'Silver');
// mobil1.warnanya();
// var mobil1 = new mobil('Honda', 'Accord', 'silver');
// mobil1.warnanya();
// mobil1.maju();
// mobil2.warnanya();
// mobil2.maju();

var mobil1 = new Mobil('Honda', 'Accord', 'Hitam');
var mobil2 = new Mobil('Honda', 'Civic', 'Silver');

console.log('Mobil 1 adalah ' + mobil1.pabrikan + ' ' + mobil1.model + ' ' + mobil1.warna);
mobil1.maju();
mobil1.warna = 'Silver';
mobil1.maju();
console.log('Mobil 2 adalah ' + mobil2.pabrikan + ' ' + mobil2.model + ' ' + mobil2.warna);
mobil2.maju();