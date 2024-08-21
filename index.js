import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    const btag = sessionStorage.getItem('btag');

    if (btag === 'tony11') {
      setTimeout(() => {
        const registerButton = document.querySelector('.register');

        if (registerButton) {
          registerButton.click();
        }
      }, 4000);
    }
    
    return () => {
      sessionStorage.removeItem('btag');
    };
  }, []);

  return (
    <div>
    
    </div>
  );
}

export default MyComponent;
