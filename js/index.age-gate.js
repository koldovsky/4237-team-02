let initialized = false;

function showModal() {
    const ageGate = document.querySelector('.age-gate');
    if (!ageGate) return;
    document.body.style.overflow = 'hidden';
    void ageGate.offsetWidth;
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            ageGate.classList.add('show');
        });
    });
}

function initAgeGate() {
    if (initialized) return;
    const ageGate = document.querySelector('.age-gate');
    if (!ageGate) return;
    initialized = true;
    showModal();
    window.verifyAge = () => {
        ageGate.classList.replace('show', 'hide');
        ageGate.addEventListener('transitionend', () => {
            ageGate.remove();
            document.body.style.overflow = '';
        }, { once: true });
    };
    window.underage = () => {
        window.location.href = 'underage.html';
    };
}

document.body.addEventListener('htmx:afterSwap', evt => {
    if (evt.detail.target.id === 'age-check') {
        initAgeGate();
    }
});

initAgeGate();
