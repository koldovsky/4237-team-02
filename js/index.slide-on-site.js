const aiButton = document.querySelector('.discovery-section_get-personal-recomendation');

const wineSuggestions = [
  'Try our Merlot for cozy evenings!',
  'Taste the fresh Sauvignon Blanc!',
  'Discover the richness of Cabernet Sauvignon!',
  'Explore the elegance of Pinot Noir!',
  'Savor the sweetness of Riesling!'
];

aiButton.addEventListener('click', async function(event) {
  event.preventDefault();

  const randomIndex = Math.floor(Math.random() * wineSuggestions.length);
  const randomSuggestion = wineSuggestions[randomIndex];
  const pause = (ms) => new Promise(r => setTimeout(r, ms));

  aiButton.style.transition = 'all 0.4s ease';
  aiButton.style.fontSize = '10px';
  await pause(300);
  aiButton.style.color = '';
  aiButton.style.fontStyle = '';
  aiButton.style.width = '200px';
  aiButton.style.display = 'flex';
  aiButton.style.alignItems = 'center';
  aiButton.style.justifyContent = 'center';

  aiButton.textContent = "Wait! Analysing your location";

  aiButton.textContent = "Wait! Analysing coockies";
  await pause(3000);


  aiButton.textContent = "Wait! Choosing perfect wine";
  await pause(1000);
    
  aiButton.textContent = randomSuggestion;
  aiButton.style.marginTop = '30px';
  aiButton.style.fontStyle = 'italic';
  aiButton.style.fontSize = '24px'; 
  aiButton.style.color = '#d4af37'; 
  aiButton.style.width = 'auto';
});