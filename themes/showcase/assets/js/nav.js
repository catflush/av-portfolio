// Minimal, accessible mobile nav toggle.
(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', String(!open));
    btn.setAttribute('aria-expanded', String(!open));
  });
  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.getAttribute('data-open') === 'true') {
      nav.setAttribute('data-open', 'false');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });
})();
