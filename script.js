// Grab DOM elements
const fileInput = document.getElementById('logFileInput');
const loadLocalBtn = document.getElementById('loadLocalBtn');
const clearViewBtn = document.getElementById('clearViewBtn');
const logDisplay = document.getElementById('logDisplay');
const viewerStatus = document.getElementById('viewerStatus');

// Feature 1: Load log data from an uploaded .txt file
fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    
    if (!file) {
        return;
    }

    const reader = new FileReader();

    // When the file is done reading, output it to the textarea
    reader.onload = function(e) {
        logDisplay.value = e.target.result;
        viewerStatus.textContent = `Successfully loaded: ${file.name}`;
    };

    // Handle potential errors
    reader.onerror = function() {
        viewerStatus.textContent = "Error: Could not read the file.";
        logDisplay.value = "";
    };

    // Read the file as text
    reader.readAsText(file);
});

// Feature 2: Load log data from LocalStorage (Requires exact same domain)
loadLocalBtn.addEventListener('click', function() {
    const savedLog = localStorage.getItem('BatteryTestResultW7');
    
    if (savedLog) {
        logDisplay.value = savedLog;
        viewerStatus.textContent = "Successfully loaded logs from Local Storage.";
    } else {
        alert("No battery logs found in this browser's Local Storage for this domain.");
        viewerStatus.textContent = "Local Storage check failed: No logs found.";
    }
});

// Feature 3: Clear the viewer
clearViewBtn.addEventListener('click', function() {
    logDisplay.value = "";
    fileInput.value = ""; // Reset the file input
    viewerStatus.textContent = "Viewer cleared. Waiting for log data.";
});