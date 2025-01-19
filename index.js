document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active button
            document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter cards
            document.querySelectorAll('.card').forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex'; // Show matching cards
                } else {
                    card.style.display = 'none'; // Hide non-matching cards
                }
            });
        });
    });

    // Initially show all cards
    document.querySelectorAll('.card').forEach(card => {
        card.style.display = 'flex';
    });
});
