//перевірка заповнення полів
const form = document.querySelector('.cart__form');
            if (!form) {
               return;
            }            
            const inputs = form.querySelectorAll('input');

            form.addEventListener('submit', function (event) {
               event.preventDefault();

               let isValid = true;

               inputs.forEach((input) => {                  
                  if (!input.value.trim()) {
                     input.classList.add('error');
                     isValid = false;
                  } else {
                     input.classList.remove('error');
                  }
               });
               
               if (isValid) {
                  alert('Все ок');
               }
            });