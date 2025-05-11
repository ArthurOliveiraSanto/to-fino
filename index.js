  document.addEventListener('DOMContentLoaded', function() {
            console.log('Página carregada com sucesso!');
            
            const containerneo = document.querySelector('.containerneo');
            containerneo.style.opacity = '0';
            let opacity = 0;
            const fadeInterval = setInterval(() => {
                opacity += 0.05;
                containerneo.style.opacity = opacity;
                if (opacity >= 1) clearInterval(fadeInterval);
            }, 30);
        });



                document.addEventListener('DOMContentLoaded', function() {
            console.log('Página carregada com sucesso!');

            const containers = [
                {id: 'container1', delay: 0},
                {id: 'container2', delay: 150},
                {id: 'container3', delay: 300},
                {id: 'container4', delay: 450},
                {id: 'container5', delay: 600},
                {id: 'container6', delay: 750},
                {id: 'fullWidthContainer', delay: 900}
            ];

            containers.forEach(container => {
                setTimeout(() => {
                    const element = document.getElementById(container.id);
                    element.style.opacity = '0';
                    let opacity = 0;
                    const fadeInterval = setInterval(() => {
                        opacity += 0.05;
                        element.style.opacity = opacity;
                        if (opacity >= 1) clearInterval(fadeInterval);
                    }, 30);
                }, container.delay);
            });
        });



         document.addEventListener('DOMContentLoaded', function() {
            for (let i = 1; i <= 9; i++) {
                const cardAutismo = document.getElementById(`cardAutismo${i}`);
                setTimeout(() => {
                    cardAutismo.classList.add('carregado');
                }, 100 * i); 
            }
        });

        function mostrarMensagem(cardNumber) {
            alert(`Você clicou em "Saiba mais" no Card ${cardNumber} sobre Autismo!`);
        }
