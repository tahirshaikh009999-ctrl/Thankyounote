function openLetter() {
    document.getElementById('letterModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Play background music when letter opens
    const music = document.getElementById('backgroundMusic');
    music.play().catch(e => {
        console.log('Audio playback failed:', e);
    });
}

function closeLetter() {
    document.getElementById('letterModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLetter();
    }
});

// Background music functionality with YouTube
let musicPlaying = false;
const youtubePlayer = document.getElementById('youtube-player');

function toggleMusic() {
    if (musicPlaying) {
        youtubePlayer.style.display = 'none';
        musicPlaying = false;
    } else {
        youtubePlayer.style.display = 'block';
        musicPlaying = true;
    }
}

// Show music player when user first interacts with the page
document.addEventListener('click', function() {
    if (!musicPlaying) {
        youtubePlayer.style.display = 'block';
        musicPlaying = true;
    }
}, { once: true });