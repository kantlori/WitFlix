// Checkbox ve body elemanlarını seç
const themeCheckbox = document.getElementById('theme-toggle');
const body = document.body;

// Daha önceki tema tercihlerini kontrol et
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeCheckbox.checked = true;
}
// Checkbox değişimini dinle
themeCheckbox.addEventListener('change', () => {
    if (themeCheckbox.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});