document.addEventListener('DOMContentLoaded', function () {
    // Get the form and input element
    const form = document.getElementById('formAuthentication');
    const usernameInput = document.getElementById('username');
    const error = document.getElementById('error');

    // Add an event listener to the form on submit
    form.addEventListener('submit', function (event) {
        if (!validateUsername(usernameInput.value)) {
            event.preventDefault();
            error.textContent = 'No space allowed. Only small letters(a-z), number(0-9), and underscore(_)';
        }
    });

    function validateUsername(username) {
        const regex = /^[a-z0-9_]+$/;
        return !/\s/.test(username) && regex.test(username);
    }
});
