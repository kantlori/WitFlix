// Hover için video start-stop kısmı 

const heroVideo = document.querySelector('.hero-video');
const video = document.querySelector('.hero-preview');

heroVideo.addEventListener('mouseenter', () => {
    video.play();
});

heroVideo.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
});

//Movie Cardlar için video start-stop kısmı

const movieCards = document.querySelectorAll('.movie-card');
movieCards.forEach(card => {
    const video = card.querySelector('video');
    const playButton = card.querySelector('.play-button');

    card.addEventListener('mouseenter', () => {
        video.play();
    });

    card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });
});
