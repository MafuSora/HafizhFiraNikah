/*
  KOMENTAR — SEND + LIVE STREAM (LIKE IG LIVE)
*/
const komentarForm = document.getElementById("formKomentar");
const komentarStatus = document.getElementById("komentarStatus");
const KOMENTAR_API = "https://script.google.com/macros/s/AKfycbyUcS0Lg_qJiBoIeTwNBFI2Z35fn7iJlZJlN_pS0DtBGfy4fy4taYKcUj0go22vTphCtA/exec";
// ====== SEND KOMENTAR ======
komentarForm.addEventListener("submit", async function(e) {
  e.preventDefault();
  const nama = document.getElementById("komentarNama").value;
  const pesan = document.getElementById("komentarPesan").value.trim();
  if (pesan === "") {
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
    komentarStatus.innerHTML = "<span style='color:green;'>Berhasil! Terima kasih.</span>";
    document.getElementById("komentarPesan").value = "";
    loadComments(); // Refresh
  } catch (err) {
    komentarStatus.innerHTML = "<span style='color:red;'>Gagal mengirim.</span>";
  }
});
// ====== LOAD LIVE COMMENTS ======
async function loadComments() {
  try {
    const res = await fetch(KOMENTAR_API);
    const data = await res.json();
    const list = document.getElementById("liveKomentarList");
    list.innerHTML = "";
    data.reverse().slice(0, 20).forEach(row => {
      const item = document.createElement("div");
      item.className = "comment-item";
      item.innerHTML = `
        <div class="comment-name">${row.nama}</div>
        <div class="comment-text">${row.pesan}</div>
      `;
      list.appendChild(item);
    });
  } catch (err) {
    console.log("Gagal load komentar");
  }
}
// Load awal
loadComments();
// Auto refresh tiap 6 detik
setInterval(loadComments, 6000);
