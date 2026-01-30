document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("rsvp-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Не даём форме отправиться стандартно

    const formData = new FormData(form);
    const params = new URLSearchParams();
    for (const pair of formData.entries()) {
      params.append(pair[0], pair[1]);
    }

    fetch("https://script.google.com/macros/s/AKfycbzd6eyN67hEm8L_TD6wm4tv_wUZ6CnBjoKXI9vlUtX4qiqaWkn6iykh2eWMd7lXNxdz/exec?" + params.toString(), {
      method: "GET",
    })
      .then(res => res.text())
      .then(response => {
        alert("🎉 Рақмет! Жауабыңыз қабылданды ✅");
        form.reset();
      })
      .catch(err => {
        console.error("Қате болды", err);
        alert("🚫 Қате! Кейінірек қайталап көріңіз.");
      });
  });
});
