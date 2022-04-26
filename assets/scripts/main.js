const themeButton = document.getElementById("theme-button");
const body = document.body;

const setLightTheme = () => {
    document.documentElement.setAttribute('data-theme', 'light');
    body.classList.remove('text-light');
    themeButton.classList.add('btn-outline-dark');
    themeButton.classList.remove('btn-outline-light');
    themeButton.innerText = '🌞 light';
};

const setDarkTheme = () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    body.classList.add('text-light');
    themeButton.classList.add('btn-outline-light');
    themeButton.classList.remove('btn-outline-dark');
    themeButton.innerText = '🌚 dark';
};

const switchTheme = (theme) => {
    switch (theme) {
        case 'dark':
            setDarkTheme();
            break;
        case 'light':
            setLightTheme();
            break;
        case 'system':
            const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
            if (prefersDarkScheme.matches) {
                setDarkTheme();
            } else {
                setLightTheme();
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