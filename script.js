function toggleTheme(theme) {
    const body = document.body;

    body.classList.remove('light-theme', 'dark-theme');

    body.classList.add(theme + '-theme');
}
