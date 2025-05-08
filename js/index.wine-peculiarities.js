
const scrollTopBtn = document.getElementById('scrollTopBtn');
const targetBlock = document.getElementById('benefits'); 


document.querySelectorAll('.benefits__link').forEach(link => {
  link.addEventListener('click', () => {
    scrollTopBtn.classList.add('scroll-top--visible');

    setTimeout(() => {
      scrollTopBtn.classList.remove('scroll-top--visible');
    }, 5000);
  });
});

scrollTopBtn.addEventListener('click', () => {
  if (targetBlock) {
    targetBlock.scrollIntoView({ behavior: 'smooth' });
  }
});
