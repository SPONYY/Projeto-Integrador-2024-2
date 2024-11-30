const stars = document.querySelectorAll('.star');
        let selectedRating = 0; // Armazena a avaliação

        // Função para preencher as estrelas
        function handleHover(index) {
            stars.forEach((star, i) => {
                if (i < index) {
                    star.querySelector('i').classList.remove('far'); // Remove a classe de estrela vazia
                    star.querySelector('i').classList.add('fas'); // Adiciona a classe de estrela preenchida
                } else {
                    star.querySelector('i').classList.remove('fas');
                    star.querySelector('i').classList.add('far');
                }
            });
        }

        // Função para selecionar a avaliação
        function handleClick(index) {
            selectedRating = index;
            stars.forEach((star, i) => {
                if (i < index) {
                    star.querySelector('i').classList.remove('far');
                    star.querySelector('i').classList.add('fas');
                } else {
                    star.querySelector('i').classList.remove('fas');
                    star.querySelector('i').classList.add('far');
                }
            });
        }

        // Adicionando os eventos de hover e click
        stars.forEach((star, index) => {
            star.addEventListener('mouseenter', () => handleHover(index + 1)); // Hover
            star.addEventListener('click', () => handleClick(index + 1)); // Clique
            star.addEventListener('mouseleave', () => handleHover(selectedRating)); // Remove hover quando sai o mouse
        });


        stars.forEach(star => {
            star.addEventListener('click', () => {
                // Quando uma estrela for clicada, redireciona para a homepage
                window.location.href = 'homepage.html';
            });
        });