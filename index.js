console.log("sosa is live");
const urlParams = new URLSearchParams(window.location.search);

const btag = urlParams.get('btag');
if (btag) {
    sessionStorage.setItem('btag', btag);
}


window.addEventListener('load', function() {
    const btag = sessionStorage.getItem('btag');
    console.log("sosa is loaded");

    if (btag === 'tony11') {
        const registerButton = document.querySelector('.register');
    console.log("sosa is tony11");

        if (registerButton) {
                console.log("sosa is clicked");

            registerButton.click();
        }
    }
});
