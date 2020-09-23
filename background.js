const name = "eye-break";
let delayInMinutes = 0.1;
let periodInMinutes = delayInMinutes;

// Process to run on alarm
function processAlarm(alarm) {
    if(alarm) {
        console.log(alarm);
    } else {
        console.log("No alarm detected")
    }
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