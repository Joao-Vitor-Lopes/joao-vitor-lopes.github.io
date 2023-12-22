        // Função para verificar se um elemento está visível na tela
        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            );
        }

        // Função para atualizar a classe "active" com base na seção visível
        function updateActiveLink() {
            var sections = document.querySelectorAll('section');
            var navLinks = document.querySelectorAll('.navbar .nav-content .links li a');

            var isHovered = Array.from(navLinks).some(function (link) {
                return link.classList.contains('hovered');
            });

            if (!isHovered) {
                sections.forEach(function (section, index) {
                    var sectionId = section.getAttribute('id');
                    var correspondingNavLink = document.querySelector(`.navbar .nav-content .links li a[href="#${sectionId}"]`);

                    if ((isElementInViewport(section) || (sectionId === 'header' && window.scrollY === 0))) {
                        navLinks.forEach(function (link) {
                            link.classList.remove('active');
                        });
                        correspondingNavLink.classList.add('active');
                    }
                });
            }
        }

        // Atualizar a classe "active" ao rolar a página
        window.addEventListener('scroll', function () {
            updateActiveLink();
        });

        // Adicionar evento para remover a classe "active" quando o mouse entra no link
        var navLinks = document.querySelectorAll('.navbar .nav-content .links li a');
        navLinks.forEach(function (link) {
            link.addEventListener('mouseenter', function () {
                navLinks.forEach(function (otherLink) {
                    otherLink.classList.remove('active');
                });
                this.classList.add('hovered');
            });

            link.addEventListener('mouseleave', function () {
                this.classList.remove('hovered');
                updateActiveLink();
            });
        });

        // Atualizar a classe "active" ao carregar a página
        window.addEventListener('load', function () {
            updateActiveLink();
        });