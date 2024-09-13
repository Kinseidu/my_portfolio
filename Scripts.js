<!-- Add this script at the end of your HTML body -->
<script>
// Smooth Scrolling for Nav Links
document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back-to-Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerText = '⬆️';
backToTopBtn.classList.add('back-to-top');
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form Validation
document.querySelector('#contact form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    let errorMessage = '';
    
    if (!name) {
        errorMessage += 'Name is required. ';
    }
    if (!email) {
        errorMessage += 'Email is required. ';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorMessage += 'Please enter a valid email address. ';
    }
    if (!message) {
        errorMessage += 'Message is required.';
    }

    if (errorMessage) {
        alert(errorMessage);
    } else {
        alert('Form successfully submitted!');
        // Code to submit the form
        this.submit();
    }
});

// Intersection Observer for Fade-In Effects
const sections = document.querySelectorAll('section');
const options = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
</script>

<style>
/* Back-to-Top Button Styles */
.back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    padding: 10px 15px;
    font-size: 1.5rem;
    background-color: #f0a500;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
}

.back-to-top:hover {
    transform: scale(1.1);
}

/* Fade-In Animation */
section {
    opacity: 0;
    transition: opacity 1.5s ease-in;
}

section.visible {
    opacity: 1;
}
</style>
