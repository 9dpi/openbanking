/**
 * QUANTIX SYSTEM SECURITY MODULE
 * Basic protection against unauthorized copying and source viewing
 */

document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(e) {
    // Disable F12
    if(e.keyCode == 123) {
        return false;
    }
    // Disable Ctrl+Shift+I (Inspect)
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    // Disable Ctrl+Shift+J (Console)
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    // Disable Ctrl+U (View Source)
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
    // Disable Ctrl+S (Save)
    if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
        return false;
    }
    // Disable Ctrl+C (Copy)
    if(e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
};

// Basic anti-debugger trick
(function() {
    var lastTime = Date.now();
    setInterval(function() {
        var startTime = Date.now();
        debugger;
        var endTime = Date.now();
        if (endTime - startTime > 100) {
            console.log("Quantix Security: Debugger Detected.");
        }
    }, 1000);
})();
