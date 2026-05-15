(function() {
  const themeToggle = document.querySelector('.theme-toggle');
  const root = document.documentElement;
  
  // Check for saved theme preference, or fallback to system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  let currentTheme = 'light';
  
  if (savedTheme) {
    currentTheme = savedTheme;
  } else if (systemPrefersDark) {
    currentTheme = 'dark';
  }
  
  // Apply initial theme
  root.setAttribute('data-theme', currentTheme);
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      currentTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', currentTheme);
      localStorage.setItem('theme', currentTheme);
    });
  }
})();
