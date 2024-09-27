document.getElementById('btn').addEventListener('click', function() {
    const scannerContainer = document.getElementById('scanner-container');
    scannerContainer.style.display = 'block'; // Show the scanner
    
    const html5QrcodeScanner = new Html5Qrcode("reader", {
        fps: 10,
        qrbox: 250
    });

    function onScanSuccess(decodedText, decodedResult) {
        console.log(`Code matched = ${decodedText}`, decodedResult);
        html5QrcodeScanner.stop().then(() => {
            alert(`QR Code detected: ${decodedText}`);
            scannerContainer.style.display = 'none'; // Hide scanner after scan
        }).catch(err => console.log(`Error stopping the scanner: ${err}`));
    }

    function onScanFailure(error) {
        console.log(`Scan error: ${error}`);
    }

    html5QrcodeScanner.start({ facingMode: "environment" }, 
                             { fps: 10, qrbox: 250 },
                             onScanSuccess,
                             onScanFailure);
});
