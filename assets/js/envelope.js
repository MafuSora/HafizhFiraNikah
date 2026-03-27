/*
  ENVELOPE OPENING ANIMATION (Model C)
*/
const envelopeScreen = document.getElementById("envelopeScreen");
const envelope = document.querySelector(".envelope-container");
// Setelah animasi card keluar → fade-out amplop
setTimeout(() => {
  envelopeScreen.classList.add("envelope-hide");
  // Trigger global event untuk mulai musik
  document.dispatchEvent(new Event("bukaUndangan"));
}, 4000); // total durasi animasi amplop
