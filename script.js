// Grab DOM elements
const loadLocalBtn = document.getElementById('loadLocalBtn');
const clearViewBtn = document.getElementById('clearViewBtn');
const logDisplay = document.getElementById('logDisplay');
const viewerStatus = document.getElementById('viewerStatus');

// Load log data from LocalStorage (Requires exact same domain)
loadLocalBtn.addEventListener('click', function() {
    const savedLog = localStorage.getItem('BatteryTestResultW7');
    
    if (savedLog) {
        logDisplay.value = savedLog;
        viewerStatus.textContent = "Successfully loaded logs from Local Storage.";
    } else {
        alert("No logs found. Make sure the Logger and Viewer are hosted on the exact same web address.");
        viewerStatus.textContent = "Local Storage check failed: No logs found.";
    }
});

// Clear the viewer
clearViewBtn.addEventListener('click', function() {
    logDisplay.value = "";
    viewerStatus.textContent = "Viewer cleared. Ready for pasted logs.";
});

// Update status if you manually paste text in
logDisplay.addEventListener('input', function() {
    if (logDisplay.value.length > 0) {
        viewerStatus.textContent = "Logs pasted manually.";
    } else {
        viewerStatus.textContent = "Viewer cleared. Ready for pasted logs.";
    }
});
