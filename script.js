async function cekKelulusan() {
  const nisn = document.getElementById("nisnInput").value.trim();
  const hasilDiv = document.getElementById("hasil");
  hasilDiv.innerHTML = "Memproses...";

  const response = await fetch("data/siswa.json");
  const data = await response.json();

  const siswa = data.find(s => s.nisn === nisn);

  if (siswa) {
    hasilDiv.innerHTML = `
      <p>Nama: <strong>${siswa.nama}</strong></p>
      <p>Status Kelulusan: <strong>${siswa.status}</strong></p>
      <a href="${siswa.pdf}" download>Unduh Surat Kelulusan (PDF)</a>
    `;
  } else {
    hasilDiv.innerHTML = "<p style='color: red;'>NISN tidak ditemukan.</p>";
  }
}
