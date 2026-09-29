$(document).ready(function () {

    // Current Date and Time

    function showDateTime() {

        let now = new Date();

        document.getElementById("dateTime").innerHTML =
            now.toLocaleDateString() + " " +
            now.toLocaleTimeString();

    }

    showDateTime();

    setInterval(showDateTime, 1000);


    // Login Confirmation Popup

    $("#loginForm").submit(function (event) {

        event.preventDefault();

        alert("Login form submitted successfully!");

    });


    // Signup Form

    $("#signupForm").submit(function (event) {

        event.preventDefault();

        alert("Registration completed successfully!");

    });


    // jQuery Image Zoom

    $("#zoomImage").mouseenter(function () {

        $(this).css("transform", "scale(1.5)");

    });

    $("#zoomImage").mouseleave(function () {

        $(this).css("transform", "scale(1)");

    });


    // Quantity Increase

    $("#plusBtn").click(function () {

        let quantity = parseInt($("#quantity").val());

        $("#quantity").val(quantity + 1);

    });


    // Quantity Decrease

    $("#minusBtn").click(function () {

        let quantity = parseInt($("#quantity").val());

        if (quantity > 1) {

            $("#quantity").val(quantity - 1);

        }

    });

});