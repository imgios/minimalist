// Check user theme preferences
const userThemePreferences = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (userThemePreferences) {
    document.documentElement.setAttribute('data-theme', userThemePreferences)
}
// TO-DO: Theme switch