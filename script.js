        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                const mobileMenu = document.getElementById('mobile-menu');
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            });
        });

        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        const copyrightName = "Template by Lipaved";
        const targetLink = "https://alifafvedfahroza.site";
        const year = new Date().getFullYear();
        const originalCopyrightHTML = `© Copyright <a href="${targetLink}" class="hover:text-gray-300 transition duration-200 no-underline" style="text-decoration: none;" target="_blank" rel="noopener noreferrer">${copyrightName} ${year}</a>`;

        document.getElementById("copyrightText").innerHTML = originalCopyrightHTML;


        const themeToggleBtn = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const body = document.body;

        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            body.classList.add(currentTheme);
            if (currentTheme === 'dark-mode') {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        }

        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark-mode');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light-mode');
            }
        });

        const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 200) { // Tampilkan tombol setelah scroll 200px
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Scroll halus ke atas
            });
        });

        const footerElement = document.querySelector('footer'); // Dapatkan referensi ke elemen footer
        const copyrightTextElement = document.getElementById('copyrightText');
        let initialCheckDone = false;

        function checkCopyrightIntegrity() {
            if (!initialCheckDone) {
                if (copyrightTextElement && copyrightTextElement.innerHTML.includes(copyrightName) && copyrightTextElement.innerHTML.includes(targetLink)) {
                    initialCheckDone = true;
                }
                return; // Tunggu sampai konten awal disuntikkan
            }

            if (!document.body.contains(footerElement)) {
                alert("ANDA MENGHAPUS HAK CIPTA DARI STEMPLATE INI HUBUNGI LIPAVED UNTUK MEMBELI LISENSI");
                const body = document.body;
                const newFooter = document.createElement('footer');
                newFooter.className = 'backdrop-blur-md bg-white/10 border border-white/20 text-center py-6 no-select';
                newFooter.innerHTML = `
                    <div class="container mx-auto">
                        <p id="copyrightText" class="text-gray-400 text-sm sm:text-base"></p>
                    </div>
                `;
                body.appendChild(newFooter);
                document.getElementById("copyrightText").innerHTML = originalCopyrightHTML;
                return; // Keluar setelah memulihkan footer
            }

            if (!document.body.contains(copyrightTextElement) ||
                !copyrightTextElement.innerHTML.includes(copyrightName) ||
                !copyrightTextElement.innerHTML.includes(targetLink)) {
                
                alert("ANDA MENGHAPUS HAK CIPTA DARI STEMPLATE INI HUBUNGI LIPAVED UNTUK MEMBELI LISENSI");
                if (document.body.contains(copyrightTextElement)) {
                    copyrightTextElement.innerHTML = originalCopyrightHTML;
                } else {
                    const footer = document.querySelector('footer');
                    if (footer) {
                        const p = document.createElement('p');
                        p.id = 'copyrightText';
                        p.className = 'text-gray-400 text-sm sm:text-base';
                        p.innerHTML = originalCopyrightHTML;
                        footer.querySelector('.container').appendChild(p);
                    }
                }
            }
        }

        setInterval(checkCopyrightIntegrity, 1000);