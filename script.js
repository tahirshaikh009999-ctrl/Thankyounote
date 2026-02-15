/**
 * Opens a specific modal page and handles music
 * @param {number} pageNumber - The ID suffix of the modal to open
 */
function openLetter(pageNumber) {
    // 1. Handle Background Music
    const music = document.getElementById('backgroundMusic');
    if (music && music.paused) {
        music.play().catch(e => console.log('Music play blocked by browser'));
    }

    // 2. Hide all open modals
    const allModals = document.querySelectorAll('.modal');
    allModals.forEach(modal => {
        modal.style.display = 'none';
    });

    // 3. Show the requested modal using FLEX for centering
    const targetModal = document.getElementById('modal' + pageNumber);
    if (targetModal) {
        targetModal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

/**
 * Closes all modals and restores scrolling
 */
function closeAll() {
    const allModals = document.querySelectorAll('.modal');
    allModals.forEach(modal => {
        modal.style.display = 'none';
    });
    document.body.style.overflow = 'auto';
}

// Close modals if the user presses the 'Escape' key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeAll();
    }
});

// Optional: Close modal if clicking outside the white content box
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeAll();
    }
};
