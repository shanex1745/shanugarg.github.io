document.addEventListener('DOMContentLoaded', () => {

    // Initialize Lucide icons
    lucide.createIcons();

    // Hero button scroll
    const enterBtn = document.getElementById('enter-world');

    if (enterBtn) {
        enterBtn.addEventListener('click', () => {
            document
                .getElementById('features')
                .scrollIntoView({
                    behavior: 'smooth'
                });
        });
    }

    // Feature card interaction
    document.querySelectorAll('.feature-card').forEach(card => {

        card.addEventListener('keydown', (event) => {

            if (
                event.key === 'Enter' ||
                event.key === ' '
            ) {

                event.preventDefault();

                card.classList.add(
                    'ring-4',
                    'ring-yellow-300'
                );

                setTimeout(() => {
                    card.classList.remove(
                        'ring-4',
                        'ring-yellow-300'
                    );
                }, 300);
            }
        });

        card.addEventListener('click', () => {

            card.classList.add(
                'ring-4',
                'ring-yellow-300'
            );

            setTimeout(() => {
                card.classList.remove(
                    'ring-4',
                    'ring-yellow-300'
                );
            }, 300);
        });

    });

});