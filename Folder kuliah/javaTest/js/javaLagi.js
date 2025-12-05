let namaDepan = "Aditya Faiz";
let namaBelakang = "Syaban"
let umur = 21;

const hariHari = umur*365;

console.log("Nama Saya " + namaDepan + " " + namaBelakang + " umur saya " + umur + " dan saya hidup selama " + hariHari + " hari.");


function cekKelulusan(nilai){
    if (nilai >= 75){
        console.log("Anda Lulus Anjay");
    } else if (nilai < 75){
        console.log("Anda Tidak Lulus, Coba Lagi Tahun Depan");
    }
}


document.getElementById("button").addEventListener("click", function() {
    document.getElementById("text").innerHTML = "ANJAY BERUBAH CUYYYYYYYYYYYYYYYYYYY";
});



const paporit = ["Ngopi", "Ngoding", "Ngegame", "Mie Ayam", "Jalan-Jalan"];
    
for (let i = 0; i < paporit.length; i++) {
    console.log(paporit[i]);
}

const daftar = document.getElementById("daftar");

for (let i = 0; i < paporit.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = paporit[i];
    daftar.appendChild(listItem);
}
