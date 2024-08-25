
var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.7.1.min.js'; 
    script.onload = function() { 
        $(document).ready(function() {
            function getQueryParam(param) {
                let urlParams = new URLSearchParams(window.location.search);
                return urlParams.get(param);
            }

            let btag = getQueryParam('btag');

    if (btag && btag.startsWith('tony')) {

                if (!sessionStorage.getItem('btagnew')) {
                    sessionStorage.setItem('btagnew', btag);

                }

             
            }
            console.log(sessionStorage.getItem('btagnew'));
               if (sessionStorage.getItem('btagnew')) {


                   function triggerClickWithRetry(retryCount) {
            if (retryCount === 0) return; 

            $('.register').trigger('click');

            setTimeout(function() {
             
                
                if (!$('.register').hasClass('clicked')) {
                    triggerClickWithRetry(retryCount - 1); 
                }
            }, 1000);
        }

        triggerClickWithRetry(5);
                    sessionStorage.removeItem('btagnew');
                }
        });
    };
    document.getElementsByTagName('head')[0].appendChild(script);
