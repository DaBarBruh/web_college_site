// Анимация появления кнопки при прокрутке
document.addEventListener("DOMContentLoaded", function () {
  const inviteBlock = document.querySelector(".invite-footer");

  if (!inviteBlock) return;

  inviteBlock.style.opacity = 0;
  inviteBlock.style.transform = "translateY(50px)";
  inviteBlock.style.transition = "all 1s ease";

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        inviteBlock.style.opacity = 1;
        inviteBlock.style.transform = "translateY(0)";
        observer.unobserve(inviteBlock);
      }
    });
  });

  observer.observe(inviteBlock);
});


document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(
    ".text, .text_bold, .text_name, .name, .teg, .calendar_1, .calendar-ring, .timeline-item, .form-wrapper, .countdown-wrapper, .invite-footer, .avatar_wrapper, .overlay-text, .map-button, .countdown-title"
  );

  const options = {
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated-show");
        obs.unobserve(entry.target); // наблюдать только один раз
      }
    });
  }, options);

  animatedItems.forEach(item => {
    item.classList.add("animated-hidden");
    observer.observe(item);
  });
});
