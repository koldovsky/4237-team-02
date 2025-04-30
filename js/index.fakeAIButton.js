const aiButton = document.querySelector('.discovery-section__get-recommendation');

const wineSuggestions = [
  'Try our: Merlot. For cozy evenings!',
  'Taste the fresh: Sauvignon Blanc!',
  'Discover the richness of: Cabernet Sauvignon!',
  'Explore the elegance of: Pinot Noir!',
  'Savor the sweetness of: Riesling!'
];

function typeText(element, text, delay = 70) {
  return new Promise(resolve => {
    element.textContent = '';
    let i = 0;
    element.style.height = '37px';
    const typer = setInterval(() => {
      element.textContent += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(typer);
        resolve();
      }
    }, delay);
  });
}

aiButton.addEventListener('click', async function(event) {
  event.preventDefault();

  const randomIndex = Math.floor(Math.random() * wineSuggestions.length);
  const randomSuggestion = wineSuggestions[randomIndex];
  const pause = (ms) => new Promise(r => setTimeout(r, ms));

  aiButton.style.transition = 'all 0.4s ease';
  aiButton.style.fontSize = '10px';
  aiButton.style.fontWeight = '400';
  aiButton.style.color = '';
  aiButton.style.fontStyle = '';
  aiButton.style.width = '200px';
  aiButton.style.height = '47px';
  aiButton.style.display = 'flex';
  aiButton.style.alignItems = 'center';
  aiButton.style.justifyContent = 'center';

  await typeText(aiButton, "Wait! Analysing your location");
  await pause(1000);
  await typeText(aiButton, "Wait! Analysing cookies");
  await pause(1000);
  await typeText(aiButton, "Wait! Choosing perfect wine");
  await pause(1000);
  await typeText(aiButton, randomSuggestion);
    
  aiButton.style.height = '57px';
  aiButton.textContent = randomSuggestion;
  aiButton.style.marginTop = '30px';
  aiButton.style.fontStyle = 'italic';
  aiButton.style.fontSize = '24px'; 
  aiButton.style.color = '#f0e6d2'; 
  aiButton.style.width = 'auto';
});