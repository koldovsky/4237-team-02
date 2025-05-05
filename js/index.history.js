/* Pavlo Naichuk */
function initHistoryAnimation() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const block = entry.target;
                block.classList.add('show');
                observer.unobserve(block);
            }
        });
    }, {
        threshold: 0.2
    });

    const blocks = document.querySelectorAll('.history__timeline-block');

    blocks.forEach((block, index) => {
        block.style.transitionDelay = `${index * 150}ms`;

        observer.observe(block);

        if (block.getBoundingClientRect().top < window.innerHeight) {
            block.classList.add('show');
            observer.unobserve(block);
        }
    });
}

document.body.addEventListener('htmx:afterSettle', (e) => {
    if (e.detail.target.id === 'history') {
        initHistoryAnimation();
    }
});
initHistoryAnimation();
/* Pavlo Naichuk */
