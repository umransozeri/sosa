  var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.7.1.min.js'; // Güncel sürüm
    script.onload = function() { // jQuery yüklendikten sonra çalışacak kod
        $(document).ready(function() {
            function getQueryParam(param) {
                let urlParams = new URLSearchParams(window.location.search);
                return urlParams.get(param);
            }

            let btag = getQueryParam('btag');

            if (btag === 'tony11') {
                if (!sessionStorage.getItem('btagnew')) {
                    sessionStorage.setItem('btagnew', btag);
                }

                if (sessionStorage.getItem('btagnew')) {
                    setTimeout(function() {
                        $('.register').trigger('click');
                    }, 500);
                    sessionStorage.removeItem('btagnew');
                }
            }
        });
    };
    document.getElementsByTagName('head')[0].appendChild(script);
