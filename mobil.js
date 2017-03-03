/////////////////////////
// phase 0 week 2
////////////////// mobil.js

function mobil(mobil_warna,mobil_model,mobil_buatan){
	this.buatan = mobil_buatan;
	this.model  = mobil_model;
	this.warna  = mobil_warna;
	this.maju   = function(otherMobil){
		console.log('mobil '+mobil_warna+' '+mobil_model+' '+mobil_buatan+',bergerak maju ');
	}
    this.warnanya = function(otherMobil){
        console.log('mobil 1 adalah '+mobil_warna+' '+mobil_model+' '+mobil_buatan);
    }
}

var mobilku = new mobil('Tesla', 'Ludicrous', 'Merah');
mobilku.maju()
console.log('------------------------------------------')
var mobil1 = new mobil('Honda', 'Accord', 'Hitam');
var mobil2 = new mobil('Honda', 'Civic', 'Silver');
mobil1.warnanya();
var mobil1 = new mobil('Honda', 'Accord', 'silver');
mobil1.warnanya();
mobil1.maju();
mobil2.warnanya();
mobil2.maju();