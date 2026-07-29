document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Clear previous errors
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            let isValid = true;
            
            if (!name) {
                document.getElementById('name-error').textContent = 'Name is required.';
                isValid = false;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email) {
                document.getElementById('email-error').textContent = 'Email is required.';
                isValid = false;
            } else if (!emailRegex.test(email)) {
                document.getElementById('email-error').textContent = 'Please enter a valid email address.';
                isValid = false;
            }
            
            if (!message) {
                document.getElementById('message-error').textContent = 'Message cannot be empty.';
                isValid = false;
            }
            
            if (isValid) {
                // Here you would typically send the data to a server
                const modal = document.getElementById('success-modal');
                if (modal) {
                    modal.style.display = 'flex';
                }
                contactForm.reset();
            }
        });
    }

    // Modal Close Logic
    const modal = document.getElementById('success-modal');
    const closeModalBtn = document.getElementById('close-modal');
    
    if (modal && closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        // Close modal if user clicks outside the modal content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});
