console.log("sosa is live");
const urlParams = new URLSearchParams(window.location.search);

const btag = urlParams.get('btag');
if (btag) {
    sessionStorage.setItem('btag', btag);
}


const btag = sessionStorage.getItem('btag');

if (btag === 'tony11') {
    const registerButton = document.querySelector('.register');

    if (registerButton) {
        registerButton.click();
    }
}
