/*
  KIRIM KOMENTAR KE GOOGLE SHEET
*/
const komentarForm = document.getElementById("formKomentar");
const komentarStatus = document.getElementById("komentarStatus");
// URL Web App Anda
const KOMENTAR_API = "https://script.google.com/macros/s/AKfycbyUcS0Lg_qJiBoIeTwNBFI2Z35fn7iJlZJlN_pS0DtBGfy4fy4taYKcUj0go22vTphCtA/exec";
komentarForm.addEventListener("submit", async function(e) {
  e.preventDefault();
  const nama = document.getElementById("komentarNama").value;
  const pesan = document.getElementById("komentarPesan").value;
  if (pesan.trim() === "") {
    komentarStatus.innerHTML = "<span style='color:red;'>Pesan tidak boleh kosong.</span>";
    return;
  }
  komentarStatus.innerHTML = "Mengirim...";
  try {
    const res = await fetch(KOMENTAR_API, {
      method: "POST",
      body: JSON.stringify({ nama, pesan }),
      headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    if (data.status === "success") {
      komentarStatus.innerHTML = "<span style='color:green;'>Terima kasih! Ucapan Anda sudah dikirim.</span>";
      document.getElementById("komentarPesan").value = "";
    } else {
      komentarStatus.innerHTML = "<span style='color:red;'>Gagal mengirim. Coba lagi.</span>";
    }
  } catch (err) {
    komentarStatus.innerHTML = "<span style='color:red;'>Terjadi kesalahan. Periksa koneksi Anda.</span>";
  }
});
