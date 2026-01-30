document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("rsvp-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = new URLSearchParams(formData);

    fetch("https://script.google.com/macros/s/AKfycbxXP4g5XEPA2lcHNACEW-7Z9G64virugnltgh5M6GhFcu0yQ-3NOCLnBdMnG-OMWXuiGg/exec", {
      method: "POST",
      body: data,
    })
      .then(res => res.text())
      .then(response => {
        alert("Рақмет! Жауабыңыз қабылданды ✅");
        form.reset();
      })
      .catch(err => {
        console.error("Қате болды", err);
        alert("Қате! Кейінірек қайталап көріңіз.");
      });

      
  });
});


function doGet(e) {
  return ContentService.createTextOutput("OK");
}
