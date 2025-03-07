function initShippedOrder() {
    // Retrieve data from localStorage
    const userName = localStorage.getItem('userName');
  

    // Initialize Google Map
    initMap();

    // Confirmation button logic
    document.querySelector('.confirm-button').addEventListener('click', () => {
        const accountNumber = document.getElementById('accountNumberInput').value;
        const ifscCode = document.getElementById('ifscCodeInput').value;

        // Store bank details
        localStorage.setItem('accountNumber', accountNumber);
        localStorage.setItem('ifscCode', ifscCode);

        // Redirect to confirmation.html
        window.location.href = "confirmation.html";
    });
}

function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            const map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: latitude, lng: longitude },
                zoom: 15
            });
            new google.maps.Marker({
                position: { lat: latitude, lng: longitude },
                map: map
            });
        }, () => {
            alert("Geolocation failed or not supported.");
        });
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}

initShippedOrder();
