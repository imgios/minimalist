const themeButton = document.getElementById("theme-button");

// Check user theme preferences
const userThemePreferences = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

switch (userThemePreferences) {
    case 'dark':
        document.documentElement.setAttribute('data-theme', userThemePreferences);
        themeButton.value = '🌚 dark';
        break;
    case 'light':
        document.documentElement.setAttribute('data-theme', userThemePreferences);
        themeButton.value = '🌞 light';
        break;
    case 'system':
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        if (prefersDarkScheme.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
        themeButton.value = '💻 system';
        break;
}
// TO-DO: Theme switch