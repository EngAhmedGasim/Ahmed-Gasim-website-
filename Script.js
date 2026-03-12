// script.js for Portfolio Website

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
            e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                                behavior: 'smooth',
                                            block: 'start'
                                                    });
                                                        });
                                                        });

                                                        // Form Handling
                                                        const form = document.getElementById('contact-form');
                                                        form.addEventListener('submit', function(e) {
                                                            e.preventDefault();
                                                                const formData = new FormData(form);
                                                                    // handle form submission, send data via Fetch API or XMLHttpRequest
                                                                    });

                                                                    // Scroll Effects
                                                                    const sections = document.querySelectorAll('section');
                                                                    const options = {
                                                                        root: null,
                                                                            rootMargin: '0px',
                                                                                threshold: 0.5
                                                                                };
                                                                                const observer = new IntersectionObserver(entries => {
                                                                                    entries.forEach(entry => {
                                                                                            if (entry.isIntersecting) {
                                                                                                        entry.target.classList.add('visible');
                                                                                                                } else {
                                                                                                                            entry.target.classList.remove('visible');
                                                                                                                                    }
                                                                                                                                        });
                                                                                                                                        }, options);

                                                                                                                                        sections.forEach(section => {
                                                                                                                                            observer.observe(section);
                                                                                                                                            });

                                                                                                                                            // Skill Animations
                                                                                                                                            const skills = document.querySelectorAll('.skill');
                                                                                                                                            function showSkills() {
                                                                                                                                                skills.forEach(skill => {
                                                                                                                                                        skill.style.width = skill.getAttribute('data-percent');
                                                                                                                                                            });
                                                                                                                                                            }
                                                                                                                                                            window.addEventListener('scroll', showSkills);

                                                                                                                                                            // Portfolio Filtering
                                                                                                                                                            const filterButtons = document.querySelectorAll('.filter-button');
                                                                                                                                                            filterButtons.forEach(button => {
                                                                                                                                                                button.addEventListener('click', function() {
                                                                                                                                                                        const filterValue = this.getAttribute('data-filter');
                                                                                                                                                                                const portfolioItems = document.querySelectorAll('.portfolio-item');

                                                                                                                                                                                        portfolioItems.forEach(item => {
                                                                                                                                                                                                    if (item.classList.contains(filterValue) || filterValue === 'all') {
                                                                                                                                                                                                                    item.style.display = 'block';
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                item.style.display = 'none';
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                                        // Performance Optimizations
                                                                                                                                                                                                                                                                        function debounce(func, wait) {
                                                                                                                                                                                                                                                                            let timeout;
                                                                                                                                                                                                                                                                                return function executedFunction(...args) {
                                                                                                                                                                                                                                                                                        const later = () => {
                                                                                                                                                                                                                                                                                                    clearTimeout(timeout);
                                                                                                                                                                                                                                                                                                                func(...args);
                                                                                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                                                                                                clearTimeout(timeout);
                                                                                                                                                                                                                                                                                                                                        timeout = setTimeout(later, wait);
                                                                                                                                                                                                                                                                                                                                            };
                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                            window.addEventListener('resize', debounce(() => {
                                                                                                                                                                                                                                                                                                                                                // handle resize events
                                                                                                                                                                                                                                                                                                                                                }, 250));
                                                                                                                                                                                                                                                                                                                                                
