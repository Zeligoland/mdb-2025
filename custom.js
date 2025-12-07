document.addEventListener('DOMContentLoaded', () => {
    const lbxCardButtons = document.querySelectorAll('.js-card-lbx');

    if (lbxCardButtons.length > 0) {
        lbxCardButtons.forEach(button => {
            const id = button.dataset.lbx;
            const lightbox = document.querySelector(`.js-lbx[data-lightbox="${id}"]`);

            if (!lightbox) return;

            const lbxClose = lightbox.querySelector('.js-lbx-close');

            button.addEventListener('click', (e) => {
                e.preventDefault();
                lightbox.classList.toggle('hidden');
                lightbox.setAttribute('aria-hidden', lightbox.classList.contains('hidden') ? 'true' : 'false');
            });

            lbxClose.addEventListener('click', () => {
                lightbox.classList.add('hidden');
                lightbox.setAttribute('aria-hidden', 'true');
            });
        });

    }
});
