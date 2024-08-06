document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    const floorsButtons = document.querySelectorAll('.floors-button');


    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            let content = button.nextElementSibling;

            
            document.querySelectorAll('.accordion-content').forEach(item => {
                if (item !== content) item.classList.remove('active');
            });
            document.querySelectorAll('.accordion-button').forEach(item => {
                if (item !== button) item.classList.remove('active');
            });

            content.classList.toggle('active');
            button.classList.toggle('active');
        });
    });

    // Manejar clics en los botones de los pisos
    floorsButtons.forEach(button => {
        button.addEventListener('click', () => {
            let availableCarrosDiv = button.nextElementSibling;

            if (button.classList.contains('active')) {
                
                button.classList.remove('active');
                availableCarrosDiv.style.display = 'none';
            } else {
                
                button.classList.add('active');
                availableCarrosDiv.style.display = 'block';

                // Cerrar el contenido de todos los otros pisos
                document.querySelectorAll('.floors-button').forEach(btn => {
                    if (btn !== button) {
                        btn.classList.remove('active');
                        btn.nextElementSibling.style.display = 'none';
                    }
                });

        //simular la api, despues hay que "linkearla" con hhtps (?)
                let simulatedData = {
                    carts: [
                        { location: 'Aula L3' } 
                    ],
                    building: 'Edificio de Libertador', 
                    floors: [
                        { name: '2' } 
                    ]
                };

                if (button.dataset.building === simulatedData.building && button.dataset.floor === simulatedData.floors[0].name) {
                    simulatedData.carts.forEach(cart => {
                        let cartDiv = document.createElement('div');
                        cartDiv.textContent = `En el ${simulatedData.floors[0].name} del ${simulatedData.building} hay un carro en ${cart.location}`;
                        availableCarrosDiv.appendChild(cartDiv);
                    });
                } else {
                    availableCarrosDiv.textContent = 'No hay carros disponibles en este piso.';
                }
            }
        });
    });
});
