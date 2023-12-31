function emailValidation() {
  const form = document.getElementById('form');
  form.addEventListener('submit', function(e) {
    if(form.email.value !== form.email_confirm.value) {
      e.preventDefault();
      const element = document.createElement('p')
      const message = document.createTextNode("Eメールが一致しません")
      form.appendChild(element);
      element.appendChild(message);
      element.classList.add("alert");
      setTimeout(function() {
        form.removeChild(element);
      }, 3000);
    }
  });
};

window.onload = emailValidation;