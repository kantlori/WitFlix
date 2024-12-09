
// Profil menüsü
const avatarContainer = document.querySelector('.avatar-container');
const profileMenu = document.querySelector('.profile-menu');
let timer;

// Avatar butonuna tıklama
avatarContainer.addEventListener('mouseenter', () => {
    clearTimeout(timer);
    profileMenu.style.display = 'block';
});

// Menüden çıkış
avatarContainer.addEventListener('mouseleave', () => {
    // Fare menüden çıkar çıkmaz 1 saniye bekleyip menüyü kapat
    timer = setTimeout(() => {
        profileMenu.style.display = 'none';
    }, 100);
});