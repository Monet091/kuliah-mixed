function hitungBMI() {
    // 1. AMBIL NILAI DARI INPUT
    let berat = document.getElementById('berat').value;
    let tinggi = document.getElementById('tinggi').value;

    // 2. VALIDASI (Cek kalau kosong)
    if (berat == "" || tinggi == "") {
        alert("Mohon isi Berat dan Tinggi badan dulu ya!");
        return;
    }

    // 3. RUMUS BMI
    // Tinggi diubah dari cm ke meter (dibagi 100)
    let tinggiMeter = tinggi / 100; 
    // Rumus: Berat / (Tinggi * Tinggi)
    let bmi = berat / (tinggiMeter * tinggiMeter);
    
    // Membulatkan hasil jadi 1 angka di belakang koma (misal 24.5)
    bmi = bmi.toFixed(1);

    // 4. LOGIKA KATEGORI (IF - ELSE)
    let status = "";
    let saran = "";
    let warna = "";

    if (bmi < 18.5) {
        status = "Kekurangan Berat Badan";
        saran = "Perbanyak asupan nutrisi dan protein.";
        warna = "#f1c40f"; // Kuning
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal (Ideal)";
        saran = "Pertahankan pola makan dan olahraga!";
        warna = "#2ecc71"; // Hijau
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = "Kelebihan Berat Badan";
        saran = "Kurangi gula dan mulai olahraga ringan.";
        warna = "#e67e22"; // Oranye
    } else {
        status = "Obesitas";
        saran = "Segera konsultasi dokter & atur diet ketat.";
        warna = "#e74c3c"; // Merah
    }

    // 5. TAMPILKAN HASIL KE LAYAR
    document.getElementById('nilai-bmi').innerText = bmi;
    document.getElementById('status-bmi').innerText = status;
    document.getElementById('status-bmi').style.color = warna; // Ubah warna teks
    document.getElementById('saran-bmi').innerText = saran;

    document.getElementById('hasil-output').style.display = "block";
}