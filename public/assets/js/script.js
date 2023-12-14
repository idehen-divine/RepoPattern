$(document).ready(function () {
    // Toggle password visibility
    $(".form-password-toggle i").click(function () {
        var passwordInput = $("#password");
        var icon = $(".form-password-toggle i");

        // Toggle the type attribute of the password input
        if (passwordInput.attr("type") === "password") {
            passwordInput.attr("type", "text");
            icon.removeClass("bx-hide").addClass("bx-show");
        } else {
            passwordInput.attr("type", "password");
            icon.removeClass("bx-show").addClass("bx-hide");
        }
    });
});
