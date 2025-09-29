// שנה דינמית בפוטר
document.getElementById("year").textContent = new Date().getFullYear();

// הפעלת Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
});

// הגדרת EmailJS
(function() {
  emailjs.init("YOUR_EMAILJS_USER_ID"); // החלף ב-ID שלך
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => alert("ההודעה נשלחה בהצלחה!"))
    .catch(err => alert("שגיאה בשליחה: " + JSON.stringify(err)));
});
