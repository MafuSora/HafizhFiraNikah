/*
  SLUG HANDLER
  Format URL yang didukung:
  https://domain.com/1/fuji
  https://domain.com/2/andi
  https://domain.com/3/budi
  tipe:
    1 = 10:00 - 12:00
    2 = 12:00 - 15:00
    3 = 10:00 - 15:00
*/
(function() {
  const path = window.location.pathname.split("/").filter(Boolean);
  const tipe = Number(path[0]);
  const nama = decodeURIComponent(path[1] || "Tamu Undangan");
  // Elemen-elemen
  const namaCover = document.querySelector("#namaTamu");
  const namaKomentar = document.querySelector("#komentarNama");
  const waktuTamu = document.querySelector("#waktuTamu");
  // Set nama tamu ke semua tempat
  if (namaCover) namaCover.textContent = nama;
  if (namaKomentar) namaKomentar.value = nama;
  // Tentukan jam sesuai tipe
  let jam = "";
  if (tipe === 1) jam = "10:00 - 12:00";
  else if (tipe === 2) jam = "12:00 - 15:00";
  else if (tipe === 3) jam = "10:00 - 15:00";
  else jam = "10:00 - Selesai";
  if (waktuTamu) waktuTamu.textContent = jam;
})();
