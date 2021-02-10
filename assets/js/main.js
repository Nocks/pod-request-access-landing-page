const emailAddress = document.getElementById('email');
const emailErrorMessage = document.querySelector('.email-error');
const btnRequest = document.querySelector('.btn-request');

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

btnRequest.addEventListener('click', () => {
    if (!validateEmail(emailAddress.value)) {
        emailErrorMessage.style.display = 'block';
    } else {
        emailErrorMessage.style.display = 'none';
    }
});