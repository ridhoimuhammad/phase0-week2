/////////////////////////
// phase 0 week 2
////////////////// object2.js

var teman = function(teman_nama,teman_kabar,teman_pekerjaan){
	this.nama 		= teman_nama;
	this.kabar 		= teman_kabar;
	this.pekerjaan	= teman_pekerjaan;
	this.sapa 		= function(otherTeman){
		console.log('Halo, '+ this.nama +' ,apa kabar?');
	}
	this.balasSapa	=function(otherTeman){
		console.log('Halo, '+ this.nama +' kabarku '+ this.kabar);
        console.log('-------------------------------------');
	}
    this.tanya_pekerjaan	= function(otherTeman){
		console.log('Apa pekerjaanmu saat ini?');
	}
	this.balas_pekerjaan	=function (otherTeman) {
		console.log('pekerjaanku saat ini adalah ' +this.pekerjaan);
        console.log('-------------------------------------');
	}
    this.berpisah			=function(otherTeman){
		console.log('Senang bertemu denganmu, ' +this.nama+', semoga kamu sukses sebagai '+this.pekerjaan);	
	}
}
var dika = new teman ('dika','alhamdulillah baik','programer');
var ridho = new teman('ridho','sangat baik','engginering');
ridho.sapa(dika.kabar);
dika.balasSapa(ridho.kabar);
var budi = new teman('Budi', 'baik', 'developer');
var tono = new teman('Tono', 'baik', 'chef');
budi.sapa(tono.nama);
tono.balasSapa(budi.nama);
budi.tanya_pekerjaan();
tono.balas_pekerjaan();
budi.berpisah(tono);
