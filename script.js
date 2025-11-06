
        const translations = {
            pt: {
                'nav-home': 'INÍCIO',
                'nav-about': 'SOBRE MIM',
                'nav-education': 'EDUCAÇÃO',
                'nav-skills': 'HABILIDADES',
                'nav-projects': 'PROJETOS',
                'nav-contact': 'CONTATO',
                'curriculum': '📥 CURRÍCULO',
                'hero-greeting': 'Olá, eu sou Sarah Campos',
                'hero-title': 'DESENVOLVEDORA <span>WEB</span>',
                'hero-description': 'Nenhuma barreira me impede de fazer o que é preciso.',
                'about-title': 'SOBRE MIM',
                'about-description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                'education-title': 'EDUCAÇÃO',
                'skills-title': 'HABILIDADES',
                'languages-title': 'LINGUAGENS',
                'tools-title': 'FERRAMENTAS',
                'projects-title': 'PROJETOS',
                'contact-title': 'CONTATO',
                'email-label': 'EMAIL:',
                'phone-label': 'Cell:',
                'footer-text': 'Sarah Beatriz Silveira Campos // 2025',
                'footer-rights': 'Todos os direitos reservados.'
            },
            en: {
                'nav-home': 'HOME',
                'nav-about': 'ABOUT ME',
                'nav-education': 'EDUCATION',
                'nav-skills': 'SKILLS',
                'nav-projects': 'PROJECTS',
                'nav-contact': 'CONTACT',
                'curriculum': '📥 RESUME',
                'hero-greeting': 'Hello, I\'m Sarah Campos',
                'hero-title': '<span>WEB</span> DEVELOPER',
                'hero-description': 'No barrier stops me from doing what needs to be done.',
                'about-title': 'ABOUT ME',
                'about-description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                'education-title': 'EDUCATION',
                'skills-title': 'SKILLS',
                'languages-title': 'LANGUAGES',
                'tools-title': 'TOOLS',
                'projects-title': 'PROJECTS',
                'contact-title': 'CONTACT',
                'email-label': 'EMAIL:',
                'phone-label': 'Phone:',
                'footer-text': 'Sarah Beatriz Silveira Campos // 2025',
                'footer-rights': 'All rights reserved.'
            }
        };

        let currentLang = 'pt';

        // Change Language Function
        function changeLanguage() {
            const selectedLang = document.getElementById('languageSelect').value;
            currentLang = selectedLang;
            
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[selectedLang][key]) {
                    element.innerHTML = translations[selectedLang][key];
                }
            });

       
            if (selectedLang === 'en' || selectedLang === 'pt') {
                const heading = document.querySelector('.typing-effect');
                const text = translations[selectedLang]['hero-greeting'];
                heading.textContent = text;
            }
        }

     
        function toggleTheme() {
            document.body.classList.toggle('light-mode');
            const btn = document.querySelector('.theme-toggle');
            btn.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
        }

 
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById('progressBar').style.width = scrolled + '%';
        });

        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            
            // Calcula o frame baseado na posição do scroll (1 a 50)
            const scrollPercent = scrollPosition / (docHeight - windowHeight);
            const frameNumber = Math.min(Math.floor(scrollPercent * 50) + 1, 50);
            
            document.getElementById('currentFrame').textContent = frameNumber;
            
            // Efeito de pulso ao mudar de frame
            const frameIndicator = document.getElementById('frameIndicator');
            frameIndicator.style.transform = 'scale(1.1)';
            setTimeout(() => {
                frameIndicator.style.transform = 'scale(1)';
            }, 200);
        });

        const heading = document.querySelector('.typing-effect');
        const text = heading.textContent;
        heading.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                heading.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }

        setTimeout(typeWriter, 500);

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
  