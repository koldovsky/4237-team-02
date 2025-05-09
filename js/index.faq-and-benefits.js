document.querySelectorAll('.faq-benefits__details').forEach((details) => {
  const summary = details.querySelector('summary');
  const content = details.querySelector('.faq-benefits__answer');

  if (!summary || !content) return;

  content.style.overflow = 'hidden';
  content.style.maxHeight = '0';
  content.style.transition = 'max-height 0.5s ease';

  summary.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = details.hasAttribute('open');

    document.querySelectorAll('.faq-benefits__details[open]').forEach((openDetails) => {
      if (openDetails !== details) {
        const openContent = openDetails.querySelector('.faq-benefits__answer');
        openContent.style.maxHeight = openContent.scrollHeight + 'px';

        requestAnimationFrame(() => {
          openContent.style.maxHeight = '0';
        });

        setTimeout(() => {
          openDetails.removeAttribute('open');
        }, 500);
      }
    });

    if (!isOpen) {
      details.setAttribute('open', '');
      content.style.maxHeight = '0'; // початкове значення

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          content.style.maxHeight = content.scrollHeight + 'px';
        });
      });
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';

      requestAnimationFrame(() => {
        content.style.maxHeight = '0';
      });

      setTimeout(() => {
        details.removeAttribute('open');
      }, 500);
    }
  });
});
