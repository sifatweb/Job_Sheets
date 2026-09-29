$(document).ready(function () {

    // Current Date and Time
    function showDateTime() {

        let now = new Date();

        let dateTime = now.toLocaleString();

        $("#dateTime").text(dateTime);
    }

    showDateTime();

    setInterval(showDateTime, 1000);


    // Login Confirmation Popup
    $("#loginForm").submit(function (event) {

        event.preventDefault();

        alert("Login form submitted successfully!");

    });


    // Reservation Confirmation
    $("#reservationForm").submit(function (event) {

        event.preventDefault();

        let modal = new bootstrap.Modal(
            document.getElementById("reservationModal")
        );

        modal.show();

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