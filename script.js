
document.addEventListener('DOMContentLoaded', () => {
    const findJobsBtn = document.getElementById('findJobsBtn');
    const jobSearch = document.getElementById('jobSearch');
    const locationSearch = document.getElementById('locationSearch');

    // Handle Search Click
    findJobsBtn.addEventListener('click', () => {
        const job = jobSearch.value;
        const loc = locationSearch.value;

        if (job || loc) {
            alert(`Searching for ${job || 'any job'} in ${loc || 'your area'}...`);
        } else {
            alert('Please enter a job title or location to start searching.');
        }
    });

    // Category Click Simulation
    const categories = document.querySelectorAll('.category-card');
    categories.forEach(cat => {
        cat.addEventListener('click', function () {
            const name = this.innerText.trim();
            jobSearch.value = name;
            jobSearch.focus();
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 10) {
            nav.classList.add('shadow-md');
        } else {
            nav.classList.remove('shadow-md');
        }
    });
});



document.querySelectorAll('.hover-glow').forEach(el => {
    el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        el.style.setProperty('--x', `${x}px`);
        el.style.setProperty('--y', `${y}px`);
    });

    el.addEventListener('mouseleave', () => {
        el.style.removeProperty('--x');
        el.style.removeProperty('--y');
    });
});




document.addEventListener('DOMContentLoaded', () => {
    // Selection feedback for cards
    const roleCards = document.querySelectorAll('.group.bg-white');

    roleCards.forEach(card => {
        card.addEventListener('click', () => {
            const roleName = card.querySelector('h3').innerText;
            console.log(`Navigating to category: ${roleName}`);
            // In a real app, window.location.href = `/jobs/${roleName.toLowerCase()}`;
        });
    });

    // Handle the "View All" button toggle
    const viewAllBtn = document.querySelector('button.mt-12');
    viewAllBtn.addEventListener('click', () => {
        // Toggle logic for showing extra rows could go here
        viewAllBtn.innerHTML = 'Loading Categories...';
        setTimeout(() => {
            viewAllBtn.innerHTML = 'View All Categories <i class="fas fa-chevron-down text-xs"></i>';
        }, 1000);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    // Apply to all steps
    document.querySelectorAll('.md\\:grid-cols-4 > div').forEach(step => {
        step.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(step);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const ecosystemButtons = document.querySelectorAll('.lg\\:grid-cols-4 button');

    ecosystemButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const userType = e.target.closest('div').querySelector('h3').innerText;
            // Mock logic to redirect to specific registration forms
            alert(`Redirecting to registration for: ${userType}`);
            // window.location.href = `/register?type=${userType.toLowerCase().replace(' ', '-')}`;
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Lead generation button interaction
    const hireTeamBtn = document.querySelector('.bg-green-500');
    hireTeamBtn.addEventListener('click', () => {
        // Mocking a lead capture form trigger
        console.log("Opening Bulk Hiring Consultation Form...");
        alert("Our enterprise team will contact you within 2 hours!");
    });

    // Brochure download simulation
    const downloadBtn = document.querySelector('.border-2.border-white\\/30');
    downloadBtn.addEventListener('click', () => {
        downloadBtn.innerHTML = '<i class="fas fa-spinner animate-spin"></i> Preparing...';
        setTimeout(() => {
            alert("Brochure downloaded successfully!");
            downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download Brochure';
        }, 1500);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelectorAll('.text-3xl');

    const animateValue = (obj, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // Handle percentage vs Millions formatting
            if (end === 100) {
                obj.innerHTML = Math.floor(progress * end) + "%";
            } else {
                obj.innerHTML = (progress * end).toFixed(1).replace('.0', '') + (end > 1000 ? "M+" : "k+");
            }

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    // Use Intersection Observer to trigger when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateValue(stats[0], 0, 2.5, 2000); // 2.5M
                animateValue(stats[1], 0, 15, 2000);  // 15k
                animateValue(stats[2], 0, 600, 2000); // 600
                animateValue(stats[3], 0, 100, 2000); // 100%
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(document.querySelector('.grid-cols-2'));
});

document.addEventListener('DOMContentLoaded', () => {
    // Newsletter Validation
    const subscribeBtn = document.getElementById('newsletterBtn');
    const emailInput = document.getElementById('newsletterEmail');

    subscribeBtn.addEventListener('click', () => {
        if (emailInput.value.includes('@')) {
            subscribeBtn.innerText = "Subscribed!";
            subscribeBtn.classList.remove('bg-blue-600', 'bg-purple-600');
            subscribeBtn.classList.add('bg-green-500');
            emailInput.value = "";
        } else {
            alert("Please enter a valid email address.");
        }
    });

    // WhatsApp Click Interaction
    const whatsappBtn = document.querySelector('button.bg-\\[\\#25D366\\]');
    whatsappBtn.addEventListener('click', () => {
        window.open('https://wa.me/9118001234567', '_blank');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const menuTrigger = document.getElementById('menuTrigger');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = menuTrigger.querySelector('i');

    menuTrigger.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.toggle('hidden');

        // Toggle between Hamburger and Close icon
        if (!isHidden) {
            menuIcon.classList.replace('fa-bars', 'fa-times');
        } else {
            menuIcon.classList.replace('fa-times', 'fa-bars');
        }
    });
});
