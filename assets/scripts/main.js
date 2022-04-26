const themeButton = document.getElementById("theme-button");
const body = document.body;

const switchTheme = (theme) => {
    switch (theme) {
        case 'dark':
            document.documentElement.setAttribute('data-theme', theme);
            body.classList.add('text-light');
            themeButton.innerText = '🌚 dark';
            break;
        case 'light':
            document.documentElement.setAttribute('data-theme', theme);
            body.classList.remove('text-light');
            themeButton.innerText = '🌞 light';
            break;
        case 'system':
            const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
            if (prefersDarkScheme.matches) {
                document.documentElement.setAttribute('data-theme', 'dark');
                body.classList.add('text-light');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                body.classList.remove('text-light');
            }
            themeButton.innerText = '💻 system';
            break;
    }
};

// Check user theme preferences
const userThemePreferences = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (userThemePreferences) {
    switchTheme(userThemePreferences);
}

// Theme switch
themeButton.onclick = () => {
    switch (themeButton.innerText) {
        case '🌞 light':
            switchTheme('dark');
            localStorage.setItem('theme', 'dark');
            break;
        case '🌚 dark':
            switchTheme('system');
            localStorage.setItem('theme', 'system');
            break;
        case '💻 system':
            switchTheme('light');
            localStorage.setItem('theme', 'light');
            break;
    }
};