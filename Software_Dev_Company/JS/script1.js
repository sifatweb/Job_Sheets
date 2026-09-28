/* =================================
   CURRENT DATE AND TIME
================================= */

function showDateTime() {

    const dateTimeElement = document.getElementById("dateTime");

    if (dateTimeElement) {

        const now = new Date();

        dateTimeElement.textContent = now.toLocaleString();

    }
}


/* Update every second */

showDateTime();

setInterval(showDateTime, 1000);



/* =================================
   CONTACT FORM CONFIRMATION
================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you! Your message has been submitted successfully.");

        contactForm.reset();

    });

}



/* =================================
   PROJECT FILTER
================================= */

const filterButtons = document.querySelectorAll(".filter-btn");

const projectItems = document.querySelectorAll(".project-item");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const filter = button.getAttribute("data-filter");


        /* Change button style */

        filterButtons.forEach(function(btn) {

            btn.classList.remove("btn-primary");

            btn.classList.add("btn-outline-primary");

        });


        button.classList.remove("btn-outline-primary");

        button.classList.add("btn-primary");


        /* Filter projects */

        projectItems.forEach(function(project) {

            const category = project.getAttribute("data-category");


            if (filter === "all" || category === filter) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});



/* =================================
   PROJECT IMAGE GALLERY
================================= */

function changeImage(imageSource) {

    const mainImage = document.getElementById("mainProjectImage");

    if (mainImage) {

        mainImage.src = imageSource;

    }

}