/* Pavlo Naichuk */
let scrollPosition = 0;

function disableScroll() {
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
    document.body.style.overflowY = 'scroll';
}

function enableScroll() {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflowY = '';
    window.scrollTo(0, scrollPosition);
}

function showModal() {
    const ageGate = document.querySelector('.age-gate');
    if (!ageGate) return;

    disableScroll();
    void ageGate.offsetWidth;
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            ageGate.classList.add('show');
        });
    });
}

function initAgeGate() {
    const ageGate = document.querySelector('.age-gate');
    if (!ageGate) return;
    showModal();

    window.verifyAge = () => {
        ageGate.classList.replace('show', 'hide');
        ageGate.addEventListener('transitionend', () => {
            ageGate.remove();
            enableScroll();
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
/* Pavlo Naichuk */
