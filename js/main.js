document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  document.querySelectorAll('.js-demo-form').forEach(function (form) {
    var confirmBox = document.getElementById(form.dataset.confirmTarget);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      form.style.display = 'none';
      if (confirmBox) {
        confirmBox.classList.add('show');
        confirmBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
});
