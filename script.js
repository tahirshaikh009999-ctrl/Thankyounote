function openLetter() {
    openModal('letterModal');
    const music = document.getElementById('backgroundMusic');
    music.play().catch(e => console.log('Audio playback failed:', e));
}

function openModal(modalId) {
    // Hide all modals first
    const modals = document.querySelectorAll('.modal');
    modals.forEach(m => m.style.display = 'none');
    
    // Show the specific one
    const target = document.getElementById(modalId);
    target.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeAllLetters() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(m => m.style.display = 'none');
    document.body.style.overflow = 'auto';
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllLetters();
});
