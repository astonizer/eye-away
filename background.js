const name = "eye-break";
let delayInMinutes = 0.1;
let periodInMinutes = delayInMinutes;

// Alarm checker function
function processAlarm(alarm) {
    if(alarm) {
        eyeBreak();
    } else {
        console.log("No alarm detected")
    }
}

// Instructing user to take break
function eyeBreak() {
    // Open image of nature
    // Close the new tab
}

// Creating alarm on starting the browser
browser.alarms.create(name, {
    delayInMinutes,
    periodInMinutes
});

// Handling case when the alarm goes off
browser.alarms.onAlarm.addListener((alarm) => {
    processAlarm(alarm);
});