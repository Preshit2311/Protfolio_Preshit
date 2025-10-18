/*  © 2025 Preshit Raju Dagamwar | preshit.dev */

// Falling Stars Animation
function createStars() {
    const starsContainer = document.getElementById('stars-container');
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        const size = Math.random() * 5 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${Math.random() * 8 + 5}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;

        starsContainer.appendChild(star);
    }
}
createStars();

// Project Card
document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', function () {
            // Close all other open project cards
            projectCards.forEach(otherCard => {
                if (otherCard !== card && otherCard.classList.contains('active')) {
                    otherCard.classList.remove('active');
                }
            });

            // Toggle the clicked card
            this.classList.toggle('active');
        });
    });

    // Close project content when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.project-card')) {
            projectCards.forEach(card => {
                card.classList.remove('active');
            });
        }
    });
});

// Animation scroll and alll

// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false
});


// Typing Animation for Hero Section
const typingText = document.getElementById('typing-text');
const phrases = [
    ' Frontend Web Developer',
    'Who Enjoy Building Web App',
    'Love Responsive Websites',
    'With Clean UI UX'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;

function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isEnd = true;
        setTimeout(() => {
            isDeleting = true;
        }, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    const speed = isDeleting ? 50 : isEnd ? 100 : 150;
    setTimeout(type, speed);
}
setTimeout(type, 1000);

// Typing Animation for About Section
const typingText1 = document.getElementById('typing-text-1');
const phrases1 = [
    'creative',
    'detail-oriented',
    'innovative',
    'user-focused',
    'skilled'
];
let phraseIndex1 = 0;
let charIndex1 = 0;
let isDeleting1 = false;
let isEnd1 = false;

function type1() {
    const currentPhrase1 = phrases1[phraseIndex1];

    if (isDeleting1) {
        typingText1.textContent = currentPhrase1.substring(0, charIndex1 - 1);
        charIndex1--;
    } else {
        typingText1.textContent = currentPhrase1.substring(0, charIndex1 + 1);
        charIndex1++;
    }

    if (!isDeleting1 && charIndex1 === currentPhrase1.length) {
        isEnd1 = true;
        setTimeout(() => {
            isDeleting1 = true;
        }, 1000);
    } else if (isDeleting1 && charIndex1 === 0) {
        isDeleting1 = false;
        phraseIndex1 = (phraseIndex1 + 1) % phrases1.length;
    }

    const speed = isDeleting1 ? 50 : isEnd1 ? 100 : 150;
    setTimeout(type1, speed);
}
setTimeout(type1, 4000); // Slightly delayed start


// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        // Filter projects
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Project Modal Functionality
const projectCardsAll = document.querySelectorAll('.project-card');
const projectModals = document.querySelectorAll('.project-modal');
const closeButtons = document.querySelectorAll('.close-modal');

// Show modal when project card is clicked
projectCardsAll.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        const modal = document.getElementById(`project-modal-${projectId}`);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });
});

// Close modal when close button is clicked
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.project-modal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
});

// Close modal when clicking outside the content
projectModals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        projectModals.forEach(modal => {
            if (modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto'; // Re-enable scrolling
            }
        });
    }
});



// button top to bottom 

document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.getElementById('scrollButton');
    let isAtBottom = false;

    // Function to check scroll position
    function checkScrollPosition() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Show/hide button based on scroll position
        if (scrollPosition > 100) { // Show after 100px scroll
            scrollButton.classList.add('visible');

            // Check if we're at the bottom
            if (scrollPosition + windowHeight >= documentHeight - 100) {
                isAtBottom = true;
                scrollButton.classList.add('at-bottom');
                scrollButton.setAttribute('aria-label', 'Scroll to top');
            } else {
                isAtBottom = false;
                scrollButton.classList.remove('at-bottom');
                scrollButton.setAttribute('aria-label', 'Scroll to bottom');
            }
        } else {
            scrollButton.classList.remove('visible');
        }
    }

    // Scroll button click handler
    scrollButton.addEventListener('click', function (e) {
        e.preventDefault();

        if (isAtBottom) {
            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Scroll to bottom
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        }
    });

    // Throttle scroll events for better performance
    let isScrolling;
    window.addEventListener('scroll', function () {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(checkScrollPosition, 50);
    }, false);

    // Initial check
    checkScrollPosition();
});

// Off Canavs For Closing

document.addEventListener("DOMContentLoaded", function () {
    const offcanvasElement = document.getElementById("offcanvasExample");
    const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

    document.querySelectorAll('#offcanvasExample .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            offcanvas.hide();
        });
    });
});


// Click Function
const info=document.getElementById("project-info")

info.addEventListener("click", function(){
    window.open("https://real-est-ate-web.netlify.app/", "_blank");
});

const aisumm=document.getElementById("summar")

aisumm.addEventListener("click", function(){
    window.open("https://summm-ai.netlify.app/", "_blank");
});


const task=document.getElementById("task-web")

task.addEventListener("click", function(){
    window.open("https://vibe-pad-web.netlify.app/", "_blank");
});



const Summary=document.getElementById("summary")

Summary.addEventListener("click", function(){
    window.open("https://masraovar-web.netlify.app/", "_blank");
});

/*  © 2025 Preshit Raju Dagamwar | preshit.dev */