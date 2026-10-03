// ========================================
// CURRENT DATE AND TIME
// ========================================

function showDateTime() {

    const dateTimeElement =
        document.getElementById("datetime");

    if (dateTimeElement) {

        const now = new Date();

        dateTimeElement.textContent =
            now.toLocaleString();

    }
}


// Show date and time immediately
showDateTime();


// Update every second
setInterval(showDateTime, 1000);


// ========================================
// BANNER SLIDER
// ========================================

let slideIndex = 0;


function showSlides() {

    const slides =
        document.getElementsByClassName("banner-slide");


    // If banner doesn't exist, stop
    if (slides.length === 0) {
        return;
    }


    // Hide all slides
    for (let i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";

    }


    // Move to next slide
    slideIndex++;


    // Start again from first slide
    if (slideIndex > slides.length) {

        slideIndex = 1;

    }


    // Show current slide
    slides[slideIndex - 1].style.display = "block";


    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}


// Start slider
showSlides();


// ========================================
// FAQ COLLAPSIBLE
// ========================================

const faqQuestions =
    document.querySelectorAll(".faq-question");


faqQuestions.forEach(function(question) {

    question.addEventListener("click", function() {

        const answer =
            this.nextElementSibling;

        const icon =
            this.querySelector("span");


        // Open / close answer
        if (answer.style.display === "block") {

            answer.style.display = "none";

            icon.textContent = "+";

        } else {

            answer.style.display = "block";

            icon.textContent = "-";

        }

    });

});


// ========================================
// CONTACT FORM
// ========================================

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            // Stop actual form submission
            event.preventDefault();


            // Get email
            const email =
                document.getElementById("email")
                .value
                .trim();


            // Get phone
            const phone =
                document.getElementById("phone")
                .value
                .trim();


            // ====================================
            // EMAIL VALIDATION
            // ====================================

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                alert(
                    "Please enter a valid email address."
                );

                return;
            }


            // ====================================
            // MOBILE VALIDATION
            // Exactly 11 digits
            // Numbers only
            // ====================================

            const phonePattern =
                /^[0-9]{11}$/;


            if (!phonePattern.test(phone)) {

                alert(
                    "Mobile number must contain exactly 11 digits."
                );

                return;
            }


            // ====================================
            // CONFIRMATION POPUP
            // ====================================

            alert(
                "Your message has been submitted successfully!"
            );


            // Clear form
            contactForm.reset();

        }
    );

}