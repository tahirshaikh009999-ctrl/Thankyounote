function openLetter(pageNumber) {
    // Play music only on the first interaction
    const music = document.getElementById('backgroundMusic');
    if (music.paused) {
        music.play().catch(e => console.log("Audio play blocked"));
    }

   const allModals = document.querySelectorAll('.modal');
    allModals.forEach(m => m.style.display = 'none');

    const target = document.getElementById('modal' + pageNumber);
    if (target) {
        target.style.display = 'flex'; // Use flex instead of block
        document.body.style.overflow = 'hidden';
    }
}

function closeAll() {
    const allModals = document.querySelectorAll('.modal');
    allModals.forEach(modal => modal.style.display = 'none');
    document.body.style.overflow = 'auto';
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
});
