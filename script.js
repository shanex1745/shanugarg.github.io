document.addEventListener('DOMContentLoaded', () => {

    // Initialize Lucide icons
    lucide.createIcons();

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
