console.log("sosa is live");
const urlParams = new URLSearchParams(window.location.search);


if (urlParams.get('btag') === 'tony11') {
   const registerButton = document.querySelector('.register');


    if (registerButton) {
        registerButton.click();
    }
}
