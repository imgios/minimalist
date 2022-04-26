// Check user theme preferences
const userThemePreferences = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

switch (userThemePreferences) {
    case 'dark':
        document.documentElement.setAttribute('data-theme', userThemePreferences);
        break;
    case 'light':
        document.documentElement.setAttribute('data-theme', userThemePreferences);
        break;
    case 'system':
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        if (prefersDarkScheme.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
        break;
}
// TO-DO: Theme switch